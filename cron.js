const cron              = require("cron");
const { BigQuery }      = require("@google-cloud/bigquery");
const MonsterLife       = require("./models/monsterLifeData");
//const aws               = require("aws-sdk");

function runCron() {
    const CronJob = cron.CronJob;

    console.log("Cron job started - Running every 6th hour...");
    const job = new CronJob('0 0 */6 * * *', function() {
        queryMonsterLifeDb();
    })

    job.start();
}

// START BIGQUERY
async function queryMonsterLifeDb() {
    console.log("querying monster life db...");
    const bigqueryClient = new BigQuery();
    const query = `SELECT * FROM monsterlife.v_ft_latestobs`;
    const [queriedData] = await bigqueryClient.query({ query: query });

    let monsterList = compileMonsterList(queriedData);

    await MonsterLife.bulkWrite(Object.keys(monsterList).map(monsterName => ({
        updateOne: {
            filter: { name: monsterName },
            update: { $set: { farms: monsterList[monsterName] } }
        }
    })))
    .then(res => {
        console.log("Updated monster life farm list");
    })
    .catch(err => {
        console.log("Unable to update monster life farm list");
        console.log(err);
    })

    //uploadToAWS(monsterList)
}

// Compiles monsters that have been tracked
// Each monster name is the object key
// Each key contains an array with respective farms, monster expiry date, and last-tracked date
function compileMonsterList(data) {
    let monsterList = {};

    data.forEach((singleMonsterData,index) => {
        let monsterName = singleMonsterData.mob_name;

        if(monsterName === "Papulatus' Watch") { monsterName = "Papulatus's Watch"; }
        if(monsterName === "Petite Arka") { monsterName = "Petit Arkarium"; }
        if(monsterName === "Mushroom Couple") { monsterName = "Couple Mushrooms"; }
        if(monsterName === "Yeti & Pepe") { monsterName = "Yeti and Pepe"; }

        // Sort farms by monster names
        if(!monsterList[monsterName]) {
            monsterList[monsterName] = [];
        }

        // Timestamp recorded is already in GMT+8
        // When executing Date.parse(), millisecond values provided will have factored GMT+8 but is considered as GMT
        monsterList[monsterName].push({
            farmName: singleMonsterData.farm_name,
            expires: singleMonsterData.expire_time.value,
            updatedOn: singleMonsterData.update_time.value,
        })
    })

    return monsterList;
}

/*function uploadToAWS(monsterList) {
    const s3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })

    Object.keys(monsterList).forEach((monster, index) => {
        // Upload to AWS
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `monster-life/${monster}.json`,
            Body: JSON.stringify(monsterList[monster])
        }

        s3.upload(params, function(err, data) {
            if(err) {
                console.log(`Failed to upload [${monster}] farm data. Error: ${err}`);
            } else {
                console.log(`Data for [${monster}] successfully uploaded!`);
            }
        })
    })
}*/

module.exports = { runCron };