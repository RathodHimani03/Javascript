 

 const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1")
    },1000)
 });
 const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2")
    },4000)
 });
 const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("promise3")
        reject("Promise3")
    },1000)
 });

//  Promise.all([p2,p1,p3]).then((prtMsg)=>{
// console.log(prtMsg)
//  }).catch(
//     (e)=>console.log("Error:"+e)
//  )
//  Promise.allSettled([p2,p1,p3]).then((prtMsg)=>{
// console.log(prtMsg)
//  }).catch(
//     (e)=>console.log("Error:"+e)
//  )
 Promise.race([p2,p1,p3]).then((prtMsg)=>{
console.log(prtMsg)
 }).catch(
    (e)=>console.log("Error:"+e)
 )