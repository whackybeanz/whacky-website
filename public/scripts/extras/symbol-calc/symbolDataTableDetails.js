const MAX_SYMBOL_LEVEL = {
    arc: 20,
    aut: 11,
}

const SYMBOL_EXP_TABLE = [
    {
        name: "Arcane Symbols",
        id: "arc",
        startLevel: 1,
        values: [
            12, 15, 20, 27, 36,
            47, 60, 75, 92, 111,
            132, 155, 180, 207, 236,
            267, 300, 335, 372,
        ]
    },
    {
        name: "Authentic Symbols",
        id: "aut",
        startLevel: 1,
        values: [
            29, 76, 141, 224, 325,
            444, 581, 736, 909, 1100,
        ]
    }
];

const SYMBOL_COST_TABLE = [
    {
        name: "Road to Extinction",
        symbolGroup: "arc",
        id: "rte",
        /*preDestinyValues: [
            9500000, 16630000, 23760000, 30890000, 38020000,
            45150000, 52280000, 59410000, 66540000, 73670000,
            80800000, 87930000, 95060000, 102190000, 109320000,
            116450000, 123580000, 130710000, 137840000,
        ],*/
        values: [
            7070000, 11030000, 14990000, 18950000, 22910000,
            26870000, 30830000, 34790000, 38750000, 42710000,
            46670000, 50630000, 54590000, 58550000, 62510000,
            66470000, 70430000, 74390000, 78350000,
        ],
    },
    {
        name: "Chew Chew Island",
        symbolGroup: "arc",
        id: "cci",
        /*preDestinyValues: [
            19040000, 25640000, 32240000, 38840000, 45440000,
            52040000, 58640000, 65240000, 71840000, 78440000,
            85040000, 91640000, 98240000, 104840000, 111440000,
            118040000, 124640000, 131240000, 137840000,
        ],*/
        values: [
            10840000, 15460000, 20080000, 24700000, 29320000,
            33940000, 38560000, 43180000, 47800000, 52420000,
            57040000, 61660000, 66280000, 70900000, 75520000,
            80140000, 84760000, 89380000, 94000000,
        ],
    },
    {
        name: "Lacheln",
        symbolGroup: "arc",
        id: "lacheln",
        /*preDestinyValues: [
            19040000, 25640000, 32240000, 38840000, 45440000,
            52040000, 58640000, 65240000, 71840000, 78440000,
            85040000, 91640000, 98240000, 104840000, 111440000,
            118040000, 124640000, 131240000, 137840000,
        ],*/
        values: [
            14610000, 19890000, 25170000, 30450000, 35730000,
            41010000, 46290000, 51570000, 56850000, 62130000,
            67410000, 72690000, 77970000, 83250000, 88530000,
            93810000, 99090000, 104370000, 109650000,
        ],
    },
    {
        name: "Arcana",
        symbolGroup: "arc",
        id: "arcana",
        /*preDestinyValues: [
            19040000, 25640000, 32240000, 38840000, 45440000,
            52040000, 58640000, 65240000, 71840000, 78440000,
            85040000, 91640000, 98240000, 104840000, 111440000,
            118040000, 124640000, 131240000, 137840000,
        ],*/
        values: [
            17136000, 23076000, 29016000, 34956000, 40896000,
            46836000, 52776000, 58716000, 64656000, 70596000, 
            76536000, 82476000, 88416000, 94356000, 100296000,
            106236000, 112176000, 118116000, 124056000,
        ],
    },
    {
        name: "Moras",
        symbolGroup: "arc",
        id: "moras",
        /*preDestinyValues: [
            19040000, 25640000, 32240000, 38840000, 45440000,
            52040000, 58640000, 65240000, 71840000, 78440000,
            85040000, 91640000, 98240000, 104840000, 111440000,
            118040000, 124640000, 131240000, 137840000,
        ],*/
        values: [
            17136000, 23076000, 29016000, 34956000, 40896000,
            46836000, 52776000, 58716000, 64656000, 70596000, 
            76536000, 82476000, 88416000, 94356000, 100296000,
            106236000, 112176000, 118116000, 124056000,
        ],
    },
    {
        name: "Esfera",
        symbolGroup: "arc",
        id: "esfera",
        /*preDestinyValues: [
            19040000, 25640000, 32240000, 38840000, 45440000,
            52040000, 58640000, 65240000, 71840000, 78440000,
            85040000, 91640000, 98240000, 104840000, 111440000,
            118040000, 124640000, 131240000, 137840000,
        ],*/
        values: [
            17136000, 23076000, 29016000, 34956000, 40896000,
            46836000, 52776000, 58716000, 64656000, 70596000, 
            76536000, 82476000, 88416000, 94356000, 100296000,
            106236000, 112176000, 118116000, 124056000,
        ],
    },
    {
        name: "Cernium",
        symbolGroup: "aut",
        id: "cernium",
        values: [
            185400000, 273900000, 362300000, 450700000, 539200000,
            627600000, 716100000, 804500000, 892900000, 981400000,
        ],
    },
    {
        name: "Hotel Arcs",
        symbolGroup: "aut",
        id: "hotel-arcs",
        values: [
            203900000, 301200000, 398500000, 495700000, 593100000,
            690300000, 787700000, 884900000, 982100000, 1079500000,
        ],
    },
]