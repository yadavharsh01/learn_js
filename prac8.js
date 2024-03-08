//                  promises
// let promise=new Promise((resolve,reject)=>{
//     console.log('i m a promise');
//     // resolve("success");
//     reject("heyy ,error occurred");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           if(dataId<50)
//           {  console.log("data",dataId);
//                 resolve("success");}
//             if(getNextData>50)
//             //   getNextData();
//              { 
//            console.log("data",getNextData);
//             // reject("error found n");
//         }
//         },2000);
//     });
// }

//            promises
const getPromise =()=>{
   return new Promise((resolve,reject)=>{
    console.log('i m a promise');
    resolve("success");
    // reject("heyy ,error occurred");
})
}
let promise=getPromise();
promise.then((e)=>{
    console.log("promise fulfilled",e);
})
promise.catch((err)=>{
    console.log("error is there");
 })
//  output
// i m a promise
// prac8.js:34 promise fulfilled success