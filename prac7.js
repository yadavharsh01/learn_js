//          async await callback promise

//        synchronous
// console.log('one');
// console.log('two');
// console.log('three');
// console.log('four');     

//          setTimeout()

// function hello() {1
//     console.log('hello');   // 10sec
// }
// setTimeout(hello, 10000);   

// console.log('world');       // 0sec
// //          or
// setTimeout(()=> {
//     console.log('hello sorcerer'); // 4sec
// }
// ,4000)
         
//                   callbacks
// function sum(a,b){
//         console.log(a+b);
// }
// function calc(a,b,sumcalc){
//     sumcalc(a,b);
// }
// calc(10,20,sum);
// //              callback hell: nested callbacks
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log('data',dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// //callback hell

// getData(1,()=>{
//     console.log('gett data 2');
//     getData(2,()=>{
//         console.log('gett data 3');
//         getData(3,()=>{
//             console.log('gett data 4');
//              getData(4);
                
//             });
             
//         });
//     });
        