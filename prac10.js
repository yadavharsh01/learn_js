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

const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector(".fact"); 
const btn=document.querySelector(".btn");



const getFacts= async () =>{
    console.log("fetching data....");
    const response= await fetch(url)
    console.log(response);// JSON FORMAT
        console.log(response.status);  //200
    let data=await response.json();
    console.log(data);// whole data in json format
     console.log(data[Math.floor(Math.random()*5)].text);//
     factPara.innerText=(data[Math.floor(Math.random()*5)].text); // not working json object (usable format) // any random text as output from 0 to 5
};
 btn.addEventListener("click",getFacts)
// getFacts()
factPara.innerHTML=para; // not working
// fetching data....
// prac10.js:32  Uncaught ReferenceError: para is not defined
//     at prac10.js:32:20
// (anonymous) @ prac10.js:32
// prac10.js:24 Response {type: 'cors', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, …}
// prac10.js:25 200
// prac10.js:27 (5) [{…}, {…}, {…}, {…}, {…}]
// prac10.js:28 Owning a cat can reduce the risk of stroke and heart attack by a third.