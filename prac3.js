// // alert('hello!!'); 
//         // get element by id
// let hd=document.getElementById("heading");
// console.dir(hd);  //bcz its an object

// let bl=document.getElementById("light");
// console.dir(bl);
// let bd=document.getElementById("dark");
// console.dir(bd);
//         // get element by classname
// let para=document.getElementsByClassName("para");
// console.dir(para);
// console.log(para);
//             // get element by tagname
// let p=document.getElementsByTagName("p");
// console.dir(p);
// console.log(p);
//         // Query selectors one element ,whole node list
// let q1=document.querySelector("p");
// console.dir(q1);
// console.log(q1);

// let q2=document.querySelectorAll(".para");
// console.dir(q2);
// console.log(q2);


// let div=document.querySelector("div");
// console.dir(div);
// console.log(div);

                // Q1// let h= document.querySelector("h2");
// console.log(h.innerText);
// // let h2= document.querySelector("h3");
// h.innerText +=" From Sorcerer"

// let d1=document.querySelectorAll(".box");
// console.log(d1[0]);
// d1[0].innerText = " helloo";
// d1[1].innerText = " sorcerer";
// d1[2].innerText = " here";

//  let d1=document.querySelectorAll(".box");
//   for(d of d1)
//   {
//     console.dir(d.innerHTML);
//   }
//   let i=0;
//   for(d of d1)
//   {
//     console.dir(d.innerHTML="NEW TExt ADDED "+i);
//     i++;
//   }
//             accessing the attributes
// let s=document.querySelector("div");
// console.log(s);
// let attr=s.getAttribute("name");
// console.log(attr);
// let attr2=s.setAttribute("name","yadav"); 
// console.log(attr2);

// s.style.backgroundColor="yellow" ;
// s.style.fontSize="40px";
            


//  Accesing adding removing nodes 



// let btn=document.createElement("button");
// btn.innerText="Click ME n!!"
// console.log(btn);

// let div=document.querySelector("div");
// //div.append(`${btn.innerHTML}`);//this Is a div Click ME n!!

// div.append(btn); // this Is a div
// // 1
// // 2
// // 3
// // Click ME n!!

// // div.prepend(btn);//Click ME n!!this Is a div
// // 1
// // 2
// // 3

// // div.before(btn);

// // div.after(btn);

// let hd=document.createElement("h1");
// hd.innerText = "Hey Sorcerer Please Fuch me!!!";
// console.log(hd);

// document.querySelector("body").before(hd);

// document.querySelector("p").remove();
// hd.remove();

        // qn Prac
//  let btn=document.createElement("button");
//  btn.innerHTML=
//  "Click Me!!";
//  btn.style.backgroundColor="red";
//  btn.style.color="white";
//  document.querySelector("body").append(btn);

        // qn Prac
   let p=document.createElement("p");
   p.setAttribute("class","box") ;
   p.innerHTML="Hey Buddies";
   p.style.height="200px";
   p.style.width="200px";
   p.style.backgroundColor="pink";
   p.style.color="blue";
   p.style.textAlign="center";

document.querySelector("body").after(p);

