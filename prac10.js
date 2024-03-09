 //           free-apis
 //               fetch api
//  const url="https://cat-fact.herokuapp.com/facts";
 
// const getFacts= async () =>{
//     console.log("fetching data....");
//     const response= await fetch(url)
//     console.log(response);
//     console.log(response.status);  //200

// }
// getFacts()
// // Output: 
// fetching data....
// Promise {<pending>}
// prac10.js:8 Response {type: 'cors', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, …}

//                       fetch api for cats

// const url="https://cat-fact.herokuapp.com/facts";
// const factPara=document.querySelector(".fact"); 
// const btn=document.querySelector(".btn");

// const getFacts= async () =>{
//     console.log("fetching data....");
//     const response= await fetch(url)
//     console.log(response);// JSON FORMAT
//         console.log(response.status);  //200
//     let data=await response.json();
//     console.log(data);// whole data in json format
//      console.log(data[Math.floor(Math.random()*5)].text);//
//      factPara.innerText=(data[Math.floor(Math.random()*5)].text); // not working json object (usable format) // any random text as output from 0 to 5
// };
//  btn.addEventListener("click",getFacts)
// // getFacts()
// factPara.innerHTML=para; // not working
// fetching data....
// prac10.js:32  Uncaught ReferenceError: para is not defined
//     at prac10.js:32:20
// (anonymous) @ prac10.js:32
// prac10.js:24 Response {type: 'cors', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, …}
// prac10.js:25 200
// prac10.js:27 (5) [{…}, {…}, {…}, {…}, {…}]
// prac10.js:28 Owning a cat can reduce the risk of stroke and heart attack by a third.

//               same with promises

const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector(".fact");
const btn=document.querySelector(".btn");
          //            or
// let promise=fetch(url)
// .then(response=>response.json())    
//  .then(data=>console.log(data))
//                         
// //                       or   using promise chains
// function getFacts(){
//     fetch(url).then((resolve)=>{
//         return resolve.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText=data[Math.floor(Math.random()*5)].text;
//     })
// }  
// btn.addEventListener("click",getFacts)
// // // output:
// Cats make about 100 different sounds. Dogs make only about 10.

// GET a Fact
  //                          requests & responses
  