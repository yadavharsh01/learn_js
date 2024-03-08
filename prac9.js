            //  async-await

// function api(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("weather")
//         resolve(200)
//     },3000)    
//     })
// }
// async function getWeaterData(){
// await api();//1st
// await api();//2nd
// }


// setTimeout(()=>{
    
// console.log("start")
// },3000)

// //              async-await
// function getData(dataId){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             res("success")
//         },3000)
//     })
// }
// here we create async function and then generate promise for each data and get resolved in 3 sec each
// async function getAllData(){
//     console.log('getting Data 1')
//     await getData(1);
//     console.log('getting Data 2')

//     await getData(2);
//     console.log('getting Data 3')

//     await getData(3);
//     console.log('getting Data 4')

//     await getData(4);
// }
// //  output
// getAllData()
// Promise {<pending>}
// prac9.js:24 data 1
// prac9.js:24 data 2
// prac9.js:24 data 3
// prac9.js:24 data 4

// //   So to avoid these we use IIFE: immediately invoked Function Expression
// (async function (){
//     console.log('getting Data 1')
//     await getData(1);
//     console.log('getting Data 2')

//     await getData(2);
//     console.log('getting Data 3')

//     await getData(3);
//     console.log('getting Data 4')

//     await getData(4);
// })();