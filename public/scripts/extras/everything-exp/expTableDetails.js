const EXP_TABLE_HISTORY = [
    {
        name: "NEW AGE",
        details: ["Released in KMS on 15 June 2023", "Level 210 to 269 EXP reductions"],
        url: "https://namu.wiki/w/%EB%A9%94%EC%9D%B4%ED%94%8C%EC%8A%A4%ED%86%A0%EB%A6%AC/%EC%8B%9C%EC%8A%A4%ED%85%9C/%EA%B2%BD%ED%97%98%EC%B9%98?rev=453"
    },
    {
        name: "SAVIOR",
        details: ["Released in KMS on 22 December 2022", "Level 220 to 259 EXP reductions"],
        url: "https://namu.wiki/w/%EB%A9%94%EC%9D%B4%ED%94%8C%EC%8A%A4%ED%86%A0%EB%A6%AC/%EC%8B%9C%EC%8A%A4%ED%85%9C/%EA%B2%BD%ED%97%98%EC%B9%98?rev=367",
    },
    {
        name: "DESTINY",
        details: ["Released in KMS on 30 December 2021", "Level 250 to 259 EXP reductions"],
        url: "https://m.inven.co.kr/board/maple/2304/29604?",
    },
    {
        name: "NEO",
        details: ["Released in KMS in December 2020", "Level 210 to 250 EXP reductions", "Level cap raised to 300",],
        url: "https://www.inven.co.kr/board/maple/2304/24805",
    },
    {
        name: "RISE",
        details: ["Released in KMS in December 2019", "Level 170 to 199 EXP reductions"],
        url: "https://namu.wiki/w/%EB%A9%94%EC%9D%B4%ED%94%8C%EC%8A%A4%ED%86%A0%EB%A6%AC/%EC%8B%9C%EC%8A%A4%ED%85%9C/%EA%B2%BD%ED%97%98%EC%B9%98?rev=156",
    },
    {
        name: "GLORY",
        details: ["Released in KMS in July 2019", "Level 220 to 234 EXP reductions"],
        url: "https://strategywiki.org/w/index.php?title=MapleStory/EXP_and_Pet_Closeness&oldid=839646",
    },
    {
        name: "BLACK",
        details: ["Released in KMS in June 2018", "Level 201 to 220 EXP reductions", "Level cap raised to 275"],
        url: "https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pasta4065&logNo=221339208135",
    },
    {
        name: "V",
        details: ["Released in KMS in July 2016", "Level 66 to 200 EXP reductions"],
        url: "https://blog.naver.com/13333331/220758186233",
    },
    {
        name: "Cygnus Knights Reorganization",
        details: ["Released in KMS on 31 January 2013", "Level cap raised to 250"],
        url: "https://blog.naver.com/13333331/178536039",
    },
    {
        name: "BIG BANG",
        details: ["Released in KMS in July 2010", "EXP reduced across all levels"],
        url: "https://blog.naver.com/13333331/178536039",
    },
];

const CURR_EXP_TABLE = [
    {
        name: "Level 1 to 30",
        startLevel: 1,
        values: [
            15,34,57,92,135,372,560,840,1242,1242,
            1242,1242,1242,1242,1490,1788,2145,2574,3088,3705,
            4446,5335,6402,7682,9218,11061,13273,15927,19112,
        ]
    },
    {
        name: "Level 30 to 60",
        startLevel: 30,
        values: [
            19112,19112,19112,19112,19112,22934,27520,33024,39628,47553,51357,
            55465,59902,64694,69869,75458,81494,88013,95054,102658,110870,
            119739,129318,139663,150836,162902,175934,190008,205208,221624,
        ]
    },
    {
        name: "Level 60 to 100",
        startLevel: 60,
        values: [
            221624,221624,221624,221624,221624,238245,256113,275321,295970,318167,342029,
            367681,395257,424901,456768,488741,522952,559558,598727,640637,685481,
            733464,784806,839742,898523,961419,1028718,1100728,1177778,1260222,1342136,
            1429374,1522283,1621231,1726611,1838840,1958364,2085657,2221224,2365603,
        ]
    },
    {
        name: "Level 100 to 140",
        startLevel: 100,
        values: [
            2365603,2365603,2365603,2365603,2365603,2519367,2683125,2857528,3043267,3241079,3451749,
            3676112,3915059,4169537,4440556,4729192,5036589,5363967,5712624,6083944,6479400,
            6900561,7349097,7826788,8335529,8877338,9454364,10068897,10723375,11420394,12162719,
            12953295,13795259,14691950,15646926,16663976,17747134,18900697,20129242,21437642,
        ]
    },
    {
        name: "Level 140 to 200",
        startLevel: 140,
        values: [
            22777494,24201087,25713654,27320757,29028304,30842573,32770233,34818372,36994520,39306677,41763344,
            44373553,47146900,50093581,53224429,56550955,60085389,63840725,67830770,72070193,76574580,
            81360491,86445521,91848366,97588888,103688193,110168705,117054249,124370139,132143272,138750435,
            145687956,152972353,160620970,168652018,177084618,185938848,195235790,204997579,215247457,226009829,
            237310320,249175836,261634627,274716358,288452175,302874783,318018522,333919448,350615420,368146191,
            386553500,405881175,426175233,447483994,469858193,493351102,518018657,543919589,571115568,
        ]
    },
    {
        name: "Level 200 to 250",
        startLevel: 200,
        values: [
            2207026470,2471869646,2768494003,3100713283,3472798876,
            3889534741,4356278909,4879032378,5464516263,6120258214,
            7956335678,8831532602,9803001188,10881331318,12078277762,
            15701761090,17114919588,18655262350,20334235961,22164317197,
            28813612356,30830565220,32988704785,35297914119,37768768107,
            49099398539,52536356436,56213901386,60148874483,64359295696,
            83667084404,86177096936,88762409844,91425282139,94168040603,
            122418452783,126091006366,129873736556,133769948652,137783047111,
            179117961244,184491500081,190026245083,195727032435,201598843408,
            262078496430,269940851322,278039076861,286380249166,294971656640,
        ]
    },
    {
        name: "Level 250 to 275",
        startLevel: 250,
        values: [
            442457484960,455731209508,469403145793,483485240166,497989797370,
            512929491291,528317376029,544166897309,560491904228,577306661354,
            1731919984062,1749239183902,1766731575741,1784398891498,1802242880412,
            2342915744535,2366344901980,2390008350999,2413908434508,2438047518853,
            5412465491851,5466590146770,5521256048237,5576468608720,5632233294807,
        ]
    },
    {
        name: "Level 275 to 300",
        startLevel: 275,
        values: [
            11377111255510,12514822381061,13766304619167,15142935081084,16657228589191,
            33647601750165,37012361925183,40713598117701,44784957929471,49263453722418,
            99512176519285,109463394171214,120409733588335,132450706947169,145695777641885,
            294305470836608,323736017920269,356109619712296,391720581683526,430892639851879,
            870403132500795,957443445750874,1053187790325960,1158506569358560,1737759854037840,
        ]
    },
];

const EVENT_EXP_TABLE = [
    // Level 200 to 250
    740400000, 760500000, 780800000, 803500000, 824200000,
    845000000, 866100000, 889500000, 910900000, 932500000,
    1860100000, 1902600000, 1950400000, 1993600000, 2037200000,
    2086100000, 2134000000, 2180100000, 2224900000, 2275500000,
    2321100000, 2372400000, 2418600000, 2470700000, 2517600000,
    2570400000, 2623800000, 2671700000, 2725800000, 2780200000,
    2950300000, 3008000000, 3066000000, 3117800000, 3176600000,
    3236000000, 3295900000, 3348800000, 3409300000, 3470100000,
    3531200000, 3642200000, 3705100000, 3761000000, 3824800000,
    3888900000, 3953300000, 4018200000, 4083500000, 4149200000,

    // Level 250 to 275
    4386100000, 4455300000, 4524900000, 4594900000, 4665400000,
    4736000000, 4807300000, 4878800000, 4959500000, 5032100000,
    12941000000, 13127200000, 13313700000, 13501600000, 13713100000,
    15427400000, 15639200000, 15851800000, 16092000000, 16307100000,
    17057600000, 17866900000, 18099500000, 19096200000, 19371800000,

    // Level 275 to 300
    21772700000, 22047200000, 22357600000, -1, -1,
    25770300000, 26121900000, 26435800000, -1, -1,
    -1, -1, -1, -1, -1, 
    -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1,
];

const DESTINY_EVENT_EXP_TABLE = [
    // Level 200 to 250
    740400000, 760500000, 780800000, 803500000, 824200000,
    845000000, 866100000, 889500000, 910900000, 932500000,
    1860100000, 1902600000, 1950400000, 1993600000, 2037200000,
    2086100000, 2134000000, 2180100000, 2224900000, 2275500000,
    2321100000, 2372400000, 2418600000, 2470700000, 2517600000,
    2570400000, 2623800000, 2671700000, 2725800000, 2780200000,
    2950300000, 3008000000, 3066000000, 3117800000, 3176600000,
    3236000000, 3295900000, 3348800000, 3409300000, 3470100000,
    3531200000, 3642200000, 3705100000, 3761000000, 3824800000,
    3888900000, 3953300000, 4018200000, 4083500000, 4149200000,

    // Level 250 to 260; 260+ same as 260
    4386100000, 4455300000, 4524900000, 4594900000, 4665400000,
    4736000000, 4807300000, 4878800000, 4959500000, 5032100000,
    7657200000, 
];

const DOJO_EXP_TABLE = [
    // Level 105 to 200
    3190, 3307, 3425, 3520, 3640, 
    4518, 4668, 4785, 4938, 5092, 5247, 5405, 5565, 5690, 5850, 
    6013, 6180, 6347, 6517, 6687, 6857, 7087, 7263, 7613, 7968, 
    8327, 8687, 9053, 9475, 9852, 10230, 10615, 11005, 11393, 11852, 
    12253, 12657, 13065, 13545, 13963, 14385, 14880, 15310, 15742, 16253, 
    16698, 17143, 18018, 18823, 19720, 20542, 21465, 22302, 23247, 24103, 
    25068, 25940, 26930, 27932, 28830, 29850, 30763, 31807, 32862, 33800, 
    34878, 35965, 37063, 38038, 39158, 40288, 41432, 42585, 43598, 44773, 
    45957, 48000, 50075, 52168, 54282, 56425, 58582, 60768, 62972, 65207, 
    67452, 69727, 72018, 74333, 76670, 79030, 81413, 83812, 86475, 88928, 

    // Level 200 to 220
    91397, 93878, 96390, 99190, 101747, 104317, 106917, 109813, 112457, 115113, 
    118097, 120797, 123832, 126575, 129343, 132447, 135258, 138418, 144473, 147367,
];

const PUNCH_KING_EXP_TABLE = [
    98708, 101389, 104101, 107125, 109886, 112662, 115470, 118598, 121453, 124322,
    248003, 253673, 260047, 265808, 271621, 278138, 284043, 290679, 296653, 303394,
    309470, 316316, 322473, 329417, 335675, 342720, 349836, 356216, 363430, 370692,
    393361, 401055, 408778, 415702, 423542, 431459, 439402, 446505, 454564, 462670,
    470824, 485614, 494006, 501461, 509964, 518511, 527106, 535749, 544459, 553217,
    584807, 594040, 603318, 612643, 622041, 631458, 640971, 650504, 661261, 670940,
    1725461, 1750290, 1775159, 1800203, 1828409, 2056794, 2085219, 2113572, 2145596, 2174274,
    2445217, 2481337, 2513634, 2546149, 2582906, 2903024, 2939616, 2981010, 3017988, 3059716,
    3436027, 3482914, 3524768, 3572010, 3614278, 4062965, 4110304, 4163751, 4217526, 4265489,
    4265489, 4265489, 4265489, 4265489, 4265489, 4265489, 4265489, 4265489, 4265489, 4265489,
];

const POTION_EXP_TABLE = {
    extreme: { name: "Extreme Growth Potion", minLevel: 141, maxLevel: 199 },
    potion1: { name: "Growth Potion 1", minLevel: 200, maxLevel: 209 },
    potion2: { name: "Growth Potion 2", minLevel: 200, maxLevel: 219 },
    potion3: { name: "Growth Potion 3", minLevel: 200, maxLevel: 229 },
    typhoon: { name: "Typhoon Growth Potion", minLevel: 200, maxLevel: 239 },
    maximum: { name: "Maximum Growth Potion", minLevel: 200, maxLevel: 249 },
};

const MONSTER_PARK_EXTREME_TABLE = [
    2.04, 2.04, 2.04, 2.04, 2.04,
    2.652, 2.652, 2.652, 2.652, 2.652,
    4.20, 4.20, 4.20, 4.20, 4.20,
    5.376, 5.376, 5.376, 5.376, 5.376,
    5.832, 5.832, 5.832, 5.832, 5.832, 
    5.832, 5.832, 5.832, 5.832, 5.832, 
    5.832, 5.832, 5.832, 5.832, 5.832, 
    5.832, 5.832, 5.832, 5.832, 5.832,
];