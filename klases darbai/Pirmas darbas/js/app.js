'use strict';



// let knygos = [{ grozine: [{ knyga1: 'labai idomi' }, { knyga2: 'labai idomi' }, { knyga3: 'labai idomi' }] },
//     { fantastika: [{ knygaFan1: 'labai fantastiska' }, { KnygaFan2: 'labai fantastiska' }, { KnygFan3: 'labai fantastiska' }] },
//     { siaubo: [{ knygaSiau1: 'baisiai siaubinga' }, { KnygaSiau2: 'baisiai siaubinga' }, { KnygSiau3: 'baisiai siaubinga' }] }
// ]

// for (let eilutes = 0; eilutes < knygos.length; eilutes++) {
//     console.log(knygos[eilutes]);
//     for (let stulpeliai = 0; stulpeliai < knygos[eilutes].length; stulpeliai++) {
//         console.log(knygos[eilutes]);

//     }

let knygos = [{ //0
        grozine: [ // this is object key{ISBN: 'GR1236A',leidimoMetai: '2015', pavadinimas: 'Knyga1',puslapiuSkaicius: '221'},
            {
                ISBN: 'GR1236B',
                leidimoMetai: '2014',
                pavadinimas: 'Knyga2',
                puslapiuSkaicius: '222'
            },
            {
                ISBN: 'GR1236J',
                leidimoMetai: '2015',
                pavadinimas: 'Knyga10',
                puslapiuSkaicius: '230'
            },
            {
                ISBN: 'GR1236J',
                leidimoMetai: '2015',
                pavadinimas: 'Knyga10',
                puslapiuSkaicius: '230'
            }
        ]
    },
    {
        fantastika: [{
                ISBN: 'GR1236KAI',
                leidimoMetai: '2021',
                pavadinimas: 'fantastikosKnyga6',
                puslapiuSkaicius: '236'
            },
            {
                ISBN: 'GR1236KAR',
                leidimoMetai: '2018',
                pavadinimas: 'fantastikosKnyga7',
                puslapiuSkaicius: '237'
            },
            {
                ISBN: 'GR1236KAX',
                leidimoMetai: '2021',
                pavadinimas: 'fantastikosKnyga8',
                puslapiuSkaicius: '238'
            },
            {
                ISBN: 'GR1236KAV',
                leidimoMetai: '2019',
                pavadinimas: 'fantastikosKnyga9',
                puslapiuSkaicius: '239'
            }
        ]
    },
    {
        siaubo: [{
                ISBN: 'GR1236KYQ',
                leidimoMetai: '2019',
                pavadinimas: 'siauboKnyga1',
                puslapiuSkaicius: '241'
            },
            {
                ISBN: 'GR1236KUT',
                leidimoMetai: '2020',
                pavadinimas: 'siauboKnyga2',
                puslapiuSkaicius: '242'
            },
            {
                ISBN: 'GR1236KIO',
                leidimoMetai: '2019',
                pavadinimas: 'siauboKnyga3',
                puslapiuSkaicius: '243'
            },
            {
                ISBN: 'GR1236KPO',
                leidimoMetai: '2018',
                pavadinimas: 'siauboKnyga4',
                puslapiuSkaicius: '244'
            },
        ]
    }
]
for (let kateg of knygos) {
    for (let kategorija in kateg) {
        console.log("kategorija:" + kategorija)
        console.log('----------------------------');
        for (let kiek in kategorija) {
            for (let bookInfo in kateg[kategorija][kiek]) {
                (bookInfo == 'leidimoMetai') && (kateg[kategorija][kiek][bookInfo] == '2020') ? console.log("     " + bookInfo + ":   " + kateg[kategorija][kiek][bookInfo] + " Nauja knyga"): console.log("     " + bookInfo + ":   " + kateg[kategorija][kiek][bookInfo]);
            }
            console.log("-------------------------");
        }
    }
}