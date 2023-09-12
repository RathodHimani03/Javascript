let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};


//calllback  hell
//  let order = (fruit_name ,call_production) => {

//     setTimeout(function(){

//         console.log(`${stocks.Fruits[fruit_name]} was selected`)

//        call_production();
//       },2000)
//     }

//  let production = () => {
//     setTimeout(()=>{
//         console.log("production has started")
//         setTimeout(()=>{
//           console.log("The fruit has been chopped")
//           setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//             setTimeout(()=>{
//               console.log("start the machine")
//               setTimeout(()=>{
//                 console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                 setTimeout(()=>{
//                   console.log(`${stocks.toppings[0]} as toppings`)
//                   setTimeout(()=>{
//                     console.log("serve Ice cream")
//                   },2000)
//                 },3000)
//               },2000)
//             },1000)
//           },1000)
//         },2000)
//       },1000)

//     };

//  order(0,production)


//promise

//first undestand time and work

let is_shop_open = true;


// let order = (time, work) => {

//     return new Promise((resolve, reject) => {

//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }
//         else {
//             reject(console.log('our shop is closed'))
//         }

//     })

// }


// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//     .then(
//         () => {
//             return order(1000, () => console.log("production has started"))
//         }
//     )
//     .then(
//         () => {
//             return order(2000, () => console.log("The fruit has been chopped"))
//         }
//     )
//     .then(
//         () => {
//             return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//         }
//     )
//     .then(
//         () => {
//             return order(1000, () => console.log("start the machine"))
//         }
//     )
//     .then(() => {
//         return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//     })
//     .then(() => {
//         return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//     })
//     .then(() => {
//         return order(2000, () => console.log("Serve Ice Cream"))
//     })

// //don't write semicolon after the then(),catch(),finally()


// .catch(() => {
//     console.log('Customer left')
// })

// .finally(()=>{
//     console.log('Day ended, shop closed!')
// })


// async function order() {
//     try {
//         await ABC;
//     }
//     catch (error) {
//         console.log("ABC doesn't exist")
//     }
//     finally {
//         console.log('run code anyway')
//     }
// }

// order().then(
//     console.log('now query resolved')
// )


// let tooping_choice = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 console.log('which topping would you like?')

//             )
//         }, 2000)
//     })
// }


// async function kitchen() {
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     await tooping_choice();
//     console.log("D")
//     console.log("E")
// }

// kitchen();

// //for example other task is going on

// console.log('doing cleaning the dishes')
// console.log('cleaning the tables')
// console.log('taking others orders')


function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms)
    }
    else {
      reject(console.log('our shop is closed'))
    }
  });
}


//async function

async function kitchen() {

  try {

    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`)

    await time(1000)
    console.log('start the production');

    await time(2000)
    console.log(' cut the fruies')

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

    await time(1000)
    console.log("start the machine")

    await time(2000)
    console.log(`ice cream placed on ${stocks.holder[1]}`)

    await time(3000)
    console.log(`${stocks.toppings[0]} as toppings`)

    await time(2000)
    console.log("Serve Ice Cream")
  }
  catch (error) {
    console.log('customer left', error)

  }
  finally {
    console.log('day ended, shop is closed')

  }
}

kitchen()