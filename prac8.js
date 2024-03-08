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

// //            promises
// const getPromise =()=>{
//    return new Promise((resolve,reject)=>{
//     console.log('i m a promise');
//     resolve("success");
//     // reject("heyy ,error occurred");
// })
// }
// let promise=getPromise();
// promise.then((e)=>{
//     console.log("promise fulfilled",e);
// })
// promise.catch((err)=>{
//     console.log("error is there");
//  })
//  output
// i m a promise
// prac8.js:34 promise fulfilled success

//                           promise chains
// function asynFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data 1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data 2");
//       resolve("success");
//     }, 6000);
//   });
// }
//  here we are fetching data 1 and data 2 simultaneously but what we want is  ,one after another therefore we will use promise chains
// console.log("fetching data1....");
// let p1 = asynFunc();
// p1.then((res) => {
//   console.log("promise1 fulfilled", res);
// });
// setTimeout(() => {
//   console.log("fetching data2....");
// }, 4500);
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log("promise 2 fulfilled", res);
// });
//bbbbbbbb here we go , for promise chains (i.e one after another)
// console.log("fetching data1....");
// let p3 = asynFunc();
// p3.then((res) => {
//   console.log("promise1 fulfilled", res);
//       console.log("fetching data2....");
//   let p4 = asyncFunc2();
//   p4.then((rs) => {
//     console.log("promise 2 fulfilled", rs);

//   });
// });
// //                        also

// console.log("fetching data1....");
// asynFunc().then((res) => {
//   console.log("promise1 fulfilled", res);
//       console.log("fetching data2....");
// asyncFunc2().then((rs) => {
//     console.log("promise 2 fulfilled", rs);

//   });
// // });
// fetching data1....
// prac8.js:47 some data 1
// prac8.js:89 promise1 fulfilled success
// prac8.js:90 fetching data2....
// prac8.js:55 some data 2
// prac8.js:92 promise 2 fulfilled success

// //                   another eg
//              here we have 4 data  and each is fecteched one after another at a gap of 3 sec using promises chains and not callback hell
function asyncFunc3(dataId) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Data", dataId);
      res("success");
    }, 3000);
  });
}

// asyncFunc3(1).then((res) => {
//   console.log(res);
//   asyncFunc3(2).then((res) => {
//     console.log(res);

//     asyncFunc3(3).then((res) => {
//       console.log(res);

//       asyncFunc3(4).then((res) => {
//         console.log(res);
//       });
//     });
//   });
// });

 //          a real promise chain looks like (but seems complex)
 asyncFunc3(1)
 .then((res) => {
        console.log(res);
   return asyncFunc3(2);})
   .then((res) => {
   console.log(res);
     return asyncFunc3(3);})
   .then((res) => {
     console.log(res);
     return asyncFunc3(4)})
     .then((res) => {
       console.log(res);
     });
// output

// ﻿
// prac8.js:108 Data 1
// prac8.js:115 success
// prac8.js:108 Data 2
// prac8.js:117 success
// prac8.js:108 Data 3
// prac8.js:120 success
// prac8.js:108 Data 4
// prac8.js:123 success       

