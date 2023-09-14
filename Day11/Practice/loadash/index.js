// import _ from "lodash";


var _ = require('lodash')
console.log(_);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(_.first(numbers)) //1
console.log(_.last(numbers)) //8
console.log(_.nth(numbers, 6)) //working like a index //7

//devide into chunk 
console.log(_.chunk(numbers, 3)) //[[1,2,3],[4,5,6],[7,8]]
console.log(_.chunk(numbers, 2)) //[[1,2],[3,4],[5,6],[7,8]]
// console.log(_.chunk(numbers,9)) //[ [ 1, 2, 3, 4, 5, 6, 7, 8 ] ]

const diff = _.difference(numbers, [1, 4, 5])
console.log(diff) //[ 2, 3, 6, 7, 8 ]

//drop the element from the  numbers
//how much you want to delete form starting
const dropped = _.drop(numbers) //[ 2, 3, 4, 5, 6, 7, 8 ]
console.log(_.drop(numbers, 4)) //first 4 will be drop //[ 5, 6, 7, 8 ]

console.log(dropped)


//for take 
const taken = _.take(numbers, 4)
console.log(taken)//[ 1, 2, 3, 4 ]

const fill = _.fill(['a', 'b', 'c'], 2)
console.log(fill) //[ 2, 2, 2 ]
console.log(_.fill(Array(10), 2)); //[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]

//to take all elements of the array at same level
const num = _.flatten([1, 2, [2, [4]], [5]]);
console.log(num)//[ 1, 2, 2, [ 4 ], 5 ]
//deeply go each and everyelement
const num2 = _.flattenDeep([1, 2, [2, [4]], [5]]);
console.log(num2)//[ 1, 2, 2, 4, 5 ]
//how much you want to go in depth
const num3 = _.flattenDepth([1, 2, [2, [4]], [5]], 1);
console.log(num3)//[ 1, 2, 2, [4], 5 ]

const c = [1, 2, 3]; const d = [4, 5, 2]

console.log(_.union(c, d))//[ 1, 2, 3, 4, 5 ]
console.log(_.intersection(c, d)) //[ 2 ]

const employee = [
    {
        "id": 1,
        "first_name": "Silvanus",
        "last_name": "Kienlein",
        "email": "skienlein0@census.gov",
        "gender": "Male", "salary": 11881
    },
    { "id": 2, "first_name": "Sansone", "last_name": "Morch", "email": "smorch1@dagondesign.com", "gender": "Male", "salary": 40039 },
    { "id": 3, "first_name": "Elvira", "last_name": "Rockcliff", "email": "erockcliff2@mit.edu", "gender": "Female", "salary": 19508 },
    { "id": 4, "first_name": "Lezley", "last_name": "Pulster", "email": "lpulster3@salon.com", "gender": "Male", "salary": 51851 },
    { "id": 5, "first_name": "Dallis", "last_name": "De Santos", "email": "ddesantos4@weather.com", "gender": "Male", "salary": 16214 },
    { "id": 6, "first_name": "Stillmann", "last_name": "Langston", "email": "slangston5@bbb.org", "gender": "Male", "salary": 73557 },
    { "id": 7, "first_name": "Cherrita", "last_name": "Ackermann", "email": "cackermann6@boston.com", "gender": "Female", "salary": 7414 },
    { "id": 8, "first_name": "Inness", "last_name": "Tremberth", "email": "itremberth7@ehow.com", "gender": "Agender", "salary": 30105 },
    { "id": 9, "first_name": "Marilin", "last_name": "Dwyr", "email": "mdwyr8@simplemachines.org", "gender": "Female", "salary": 6174 },
    { "id": 10, "first_name": "Pall", "last_name": "Whickman", "email": "pwhickman9@statcounter.com", "gender": "Male", "salary": 15933 },
    { "id": 11, "first_name": "Orrin", "last_name": "Spillane", "email": "ospillanea@about.com", "gender": "Male", "salary": 50422 },
    { "id": 12, "first_name": "Waiter", "last_name": "Stambridge", "email": "wstambridgeb@slate.com", "gender": "Male", "salary": 37137 },
    { "id": 13, "first_name": "Ugo", "last_name": "Chatelet", "email": "uchateletc@skype.com", "gender": "Male", "salary": 65977 },
    { "id": 14, "first_name": "Zak", "last_name": "Asplin", "email": "zasplind@princeton.edu", "gender": "Male", "salary": 15314 },
    { "id": 15, "first_name": "Penelope", "last_name": "Sheirlaw", "email": "psheirlawe@discovery.com", "gender": "Female", "salary": 97299 },
    { "id": 16, "first_name": "Olav", "last_name": "Wisniowski", "email": "owisniowskif@ameblo.jp", "gender": "Male", "salary": 28134 },
    { "id": 17, "first_name": "Cyndie", "last_name": "Pearne", "email": "cpearneg@wufoo.com", "gender": "Female", "salary": 26164 },
    { "id": 18, "first_name": "Mathilda", "last_name": "Luce", "email": "mluceh@icio.us", "gender": "Female", "salary": 97463 },
    { "id": 19, "first_name": "Wilt", "last_name": "Gartenfeld", "email": "wgartenfeldi@uol.com.br", "gender": "Non-binary", "salary": 49361 },
    { "id": 20, "first_name": "Eldon", "last_name": "Rickhuss", "email": "erickhussj@blinklist.com", "gender": "Male", "salary": 9587 },
    { "id": 21, "first_name": "Nick", "last_name": "MacDearmaid", "email": "nmacdearmaidk@auda.org.au", "gender": "Male", "salary": 73483 },
    { "id": 22, "first_name": "Heriberto", "last_name": "Threadgill", "email": "hthreadgilll@mit.edu", "gender": "Male", "salary": 28224 },
    { "id": 23, "first_name": "Ursala", "last_name": "Toplis", "email": "utoplism@auda.org.au", "gender": "Female", "salary": 16827 },
    { "id": 24, "first_name": "Gawain", "last_name": "Lucey", "email": "gluceyn@discovery.com", "gender": "Male", "salary": 90340 },
]

// console.log(_.countBy(employee,'gender')) //{ Male: 15, Female: 7, Agender: 1, 'Non-binary': 1 }
// console.log(_.groupBy(employee,'gender')) 
// ----output----
// { Male: 
//     [ { id: 1,
//         first_name: 'Silvanus',
//         last_name: 'Kienlein',
//         email: 'skienlein0@census.gov',
//         gender: 'Male',
//         salary: 11881 },
//       { id: 2,
//         first_name: 'Sansone',
//         last_name: 'Morch',
//         email: 'smorch1@dagondesign.com',
//         gender: 'Male',
//         salary: 40039 },
//       { id: 4,
//         first_name: 'Lezley',
//         last_name: 'Pulster',
//         email: 'lpulster3@salon.com',
//         gender: 'Male',
//         salary: 51851 },
//       { id: 5,
//         first_name: 'Dallis',
//         last_name: 'De Santos',
//         email: 'ddesantos4@weather.com',
//         gender: 'Male',
//         salary: 16214 },
//       { id: 6,
//         first_name: 'Stillmann',
//         last_name: 'Langston',
//         email: 'slangston5@bbb.org',
//         gender: 'Male',
//         salary: 73557 },
//       { id: 10,
//         first_name: 'Pall',
//         last_name: 'Whickman',
//         email: 'pwhickman9@statcounter.com',
//         gender: 'Male',
//         salary: 15933 },
//       { id: 11,
//         first_name: 'Orrin',
//         last_name: 'Spillane',
//         email: 'ospillanea@about.com',
//         gender: 'Male',
//         salary: 50422 },
//       { id: 12,
//         first_name: 'Waiter',
//         last_name: 'Stambridge',
//         email: 'wstambridgeb@slate.com',
//         gender: 'Male',
//         salary: 37137 },
//       { id: 13,
//         first_name: 'Ugo',
//         last_name: 'Chatelet',
//         email: 'uchateletc@skype.com',
//         gender: 'Male',
//         salary: 65977 },
//       { id: 14,
//         first_name: 'Zak',
//         last_name: 'Asplin',
//         email: 'zasplind@princeton.edu',
//         gender: 'Male',
//         salary: 15314 },
//       { id: 16,
//         first_name: 'Olav',
//         last_name: 'Wisniowski',
//         email: 'owisniowskif@ameblo.jp',
//         gender: 'Male',
//         salary: 28134 },
//       { id: 20,
//         first_name: 'Eldon',
//         last_name: 'Rickhuss',
//         email: 'erickhussj@blinklist.com',
//         gender: 'Male',
//         salary: 9587 },
//       { id: 21,
//         first_name: 'Nick',
//         last_name: 'MacDearmaid',
//         email: 'nmacdearmaidk@auda.org.au',
//         gender: 'Male',
//         salary: 73483 },
//       { id: 22,
//         first_name: 'Heriberto',
//         last_name: 'Threadgill',
//         email: 'hthreadgilll@mit.edu',
//         gender: 'Male',
//         salary: 28224 },
//       { id: 24,
//         first_name: 'Gawain',
//         last_name: 'Lucey',
//         email: 'gluceyn@discovery.com',
//         gender: 'Male',
//         salary: 90340 } ],
//    Female: 
//     [ { id: 3,
//         first_name: 'Elvira',
//         last_name: 'Rockcliff',
//         email: 'erockcliff2@mit.edu',
//         gender: 'Female',
//         salary: 19508 },
//       { id: 7,
//         first_name: 'Cherrita',
//         last_name: 'Ackermann',
//         email: 'cackermann6@boston.com',
//         gender: 'Female',
//         salary: 7414 },
//       { id: 9,
//         first_name: 'Marilin',
//         last_name: 'Dwyr',
//         email: 'mdwyr8@simplemachines.org',
//         gender: 'Female',
//         salary: 6174 },
//       { id: 15,
//         first_name: 'Penelope',
//         last_name: 'Sheirlaw',
//         email: 'psheirlawe@discovery.com',
//         gender: 'Female',
//         salary: 97299 },
//       { id: 17,
//         first_name: 'Cyndie',
//         last_name: 'Pearne',
//         email: 'cpearneg@wufoo.com',
//         gender: 'Female',
//         salary: 26164 },
//       { id: 18,
//         first_name: 'Mathilda',
//         last_name: 'Luce',
//         email: 'mluceh@icio.us',
//         gender: 'Female',
//         salary: 97463 },
//       { id: 23,
//         first_name: 'Ursala',
//         last_name: 'Toplis',
//         email: 'utoplism@auda.org.au',
//         gender: 'Female',
//         salary: 16827 } ],
//    Agender: 
//     [ { id: 8,
//         first_name: 'Inness',
//         last_name: 'Tremberth',
//         email: 'itremberth7@ehow.com',
//         gender: 'Agender',
//         salary: 30105 } ],
//    'Non-binary': 
//     [ { id: 19,
//         first_name: 'Wilt',
//         last_name: 'Gartenfeld',
//         email: 'wgartenfeldi@uol.com.br',
//         gender: 'Non-binary',
//         salary: 49361 } ] }


// console.log(_.orderBy(employee,'salary','desc'))
// ---output---

// [ { id: 18,
//     first_name: 'Mathilda',
//     last_name: 'Luce',
//     email: 'mluceh@icio.us',
//     gender: 'Female',
//     salary: 97463 },
//   { id: 15,
//     first_name: 'Penelope',
//     last_name: 'Sheirlaw',
//     email: 'psheirlawe@discovery.com',
//     gender: 'Female',
//     salary: 97299 },
//   { id: 24,
//     first_name: 'Gawain',
//     last_name: 'Lucey',
//     email: 'gluceyn@discovery.com',
//     gender: 'Male',
//     salary: 90340 },
//   { id: 6,
//     first_name: 'Stillmann',
//     last_name: 'Langston',
//     email: 'slangston5@bbb.org',
//     gender: 'Male',
//     salary: 73557 },
//   { id: 21,
//     first_name: 'Nick',
//     last_name: 'MacDearmaid',
//     email: 'nmacdearmaidk@auda.org.au',
//     gender: 'Male',
//     salary: 73483 },
//   { id: 13,
//     first_name: 'Ugo',
//     last_name: 'Chatelet',
//     email: 'uchateletc@skype.com',
//     gender: 'Male',
//     salary: 65977 },
//   { id: 4,
//     first_name: 'Lezley',
//     last_name: 'Pulster',
//     email: 'lpulster3@salon.com',
//     gender: 'Male',
//     salary: 51851 },
//   { id: 11,
//     first_name: 'Orrin',
//     last_name: 'Spillane',
//     email: 'ospillanea@about.com',
//     gender: 'Male',
//     salary: 50422 },
//   { id: 19,
//     first_name: 'Wilt',
//     last_name: 'Gartenfeld',
//     email: 'wgartenfeldi@uol.com.br',
//     gender: 'Non-binary',
//     salary: 49361 },
//   { id: 2,
//     first_name: 'Sansone',
//     last_name: 'Morch',
//     email: 'smorch1@dagondesign.com',
//     gender: 'Male',
//     salary: 40039 },
//   { id: 12,
//     first_name: 'Waiter',
//     last_name: 'Stambridge',
//     email: 'wstambridgeb@slate.com',
//     gender: 'Male',
//     salary: 37137 },
//   { id: 8,
//     first_name: 'Inness',
//     last_name: 'Tremberth',
//     email: 'itremberth7@ehow.com',
//     gender: 'Agender',
//     salary: 30105 },
//   { id: 22,
//     first_name: 'Heriberto',
//     last_name: 'Threadgill',
//     email: 'hthreadgilll@mit.edu',
//     gender: 'Male',
//     salary: 28224 },
//   { id: 16,
//     first_name: 'Olav',
//     last_name: 'Wisniowski',
//     email: 'owisniowskif@ameblo.jp',
//     gender: 'Male',
//     salary: 28134 },
//   { id: 17,
//     first_name: 'Cyndie',
//     last_name: 'Pearne',
//     email: 'cpearneg@wufoo.com',
//     gender: 'Female',
//     salary: 26164 },
//   { id: 3,
//     first_name: 'Elvira',
//     last_name: 'Rockcliff',
//     email: 'erockcliff2@mit.edu',
//     gender: 'Female',
//     salary: 19508 },
//   { id: 23,
//     first_name: 'Ursala',
//     last_name: 'Toplis',
//     email: 'utoplism@auda.org.au',
//     gender: 'Female',
//     salary: 16827 },
//   { id: 5,
//     first_name: 'Dallis',
//     last_name: 'De Santos',
//     email: 'ddesantos4@weather.com',
//     gender: 'Male',
//     salary: 16214 },
//   { id: 10,
//     first_name: 'Pall',
//     last_name: 'Whickman',
//     email: 'pwhickman9@statcounter.com',
//     gender: 'Male',
//     salary: 15933 },
//   { id: 14,
//     first_name: 'Zak',
//     last_name: 'Asplin',
//     email: 'zasplind@princeton.edu',
//     gender: 'Male',
//     salary: 15314 },
//   { id: 1,
//     first_name: 'Silvanus',
//     last_name: 'Kienlein',
//     email: 'skienlein0@census.gov',
//     gender: 'Male',
//     salary: 11881 },
//   { id: 20,
//     first_name: 'Eldon',
//     last_name: 'Rickhuss',
//     email: 'erickhussj@blinklist.com',
//     gender: 'Male',
//     salary: 9587 },
//   { id: 7,
//     first_name: 'Cherrita',
//     last_name: 'Ackermann',
//     email: 'cackermann6@boston.com',
//     gender: 'Female',
//     salary: 7414 },
//   { id: 9,
//     first_name: 'Marilin',
//     last_name: 'Dwyr',
//     email: 'mdwyr8@simplemachines.org',
//     gender: 'Female',
//     salary: 6174 } ]


const maxSalary = _.orderBy(employee,'salary','desc');
// console.log(maxSalary)
const top3 = _.take(maxSalary,3) 
const top3Names  = _.map(top3,'first_name')
console.log(top3Names)//[ 'Mathilda', 'Penelope', 'Gawain' ]

const grpByGender = _.groupBy(employee,'gender')
const totalSalaryByGender  = _.map(grpByGender,(grp) => _.reduce(grp,(prev,curr) => prev+curr.salary,0))


console.log(totalSalaryByGender)