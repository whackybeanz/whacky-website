const cron              = require("cron");
const { BigQuery }      = require("@google-cloud/bigquery");
const aws               = require("aws-sdk");

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
    uploadToAWS(monsterList)
}

// Compiles monsters that have been tracked
// Each monster name is the object key
// Each key contains an array with respective farms, monster expiry date, and last-tracked date
function compileMonsterList(data) {
    let monsterList = {};

    data.forEach((singleMonsterData,index) => {
        // Sort farms by monster names
        if(!monsterList[singleMonsterData.mob_name]) {
            monsterList[singleMonsterData.mob_name] = [];
        }

        // Timestamp recorded is already in GMT+8
        // When executing Date.parse(), millisecond values provided will have factored GMT+8 but is considered as GMT
        monsterList[singleMonsterData.mob_name].push({
            farmName: singleMonsterData.farm_name,
            expires: singleMonsterData.expire_time.value,
            updatedOn: singleMonsterData.update_time.value,
        })
    })

    return monsterList;
}

function uploadToAWS(monsterList) {
    const s3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })

    Object.keys(monsterList).forEach((monster, index) => {
        // monsterList[monster] contains an array of all farms that have the specific monster
        const csvHeaders = Object.keys(monsterList[monster][0]);
        const replacer = function(key, value) { return value === null ? '' : value };

        // First create the header row (first element in array)
        // For all farms containing the monster, populate the values (farm name, expiry, last-updated-on)
        // Add \r\n between each array element for CSV file creation purpose
        const csv = [
            csvHeaders.join(","),
            ...monsterList[monster].map(row => 
                csvHeaders.map(headerName => 
                    JSON.stringify(row[headerName], replacer).replace(/\\"/g, '""')
                ).join(',')
            )
        ].join('\r\n')

        // Upload to AWS
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `monster-life/${monster}.csv`,
            Body: csv
        }

        s3.upload(params, function(err, data) {
            if(err) {
                console.log(`Failed to upload [${monster}] farm data. Error: ${err}`);
            } else {
                console.log(`Data for [${monster}] successfully uploaded!`);
            }
        })
    })
}

module.exports = { runCron };