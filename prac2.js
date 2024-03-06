//                       //strings
// let str="I m sorcerer"
// console.log(str[1]);

//                    //template stringd
// let sent=`this is a special string`;
// console.log(sent);
// console.log(typeof(sent));

//                      //eg
// let obj={
//     name:'Sorcerer',
//     age:22,
// };

// // console.log("the name is "+ obj.name+" and the age is "+ obj.age);
// console.log(`the name is  ${obj.name} and the age is  ${obj.age}`);

// let str="0123456734834934";
// // console.log(str.trim());
// // console.log(str.toUpperCase());
// // console.log(str.slice(0,5));
// let str2="987654321";
// let str3=str+str2;
// console.log(str3);

// console.log(str.replaceAll('34','00'));

// let n=prompt("Enter your username");
// console.log(`@${n}${n.length}`);

//arrays

// let ar=[97,95,98,99,93];

// for(let i of ar){
//    i= i-(0.1*i);
// console.log(i);
// }

// console.log(ar);

// array methods
// ar=[1,2,3,4,5,6,7,8,9,10];
// console.log(ar);
// console.log(ar.slice(2,4));
// console.log(ar);
// console.log(ar.splice(2,4,11,23));
// console.log(ar);

// let company=["bloomberg","microsoft","uber","google",'ibm',"neflix"];
//  console.log(company);
//  console.log(company.shift());
//  console.log(company.splice(2,0,"ola"));
//  console.log(company);
//  console.log(company.push("amazon"));
//  console.log(company);

//functions
// function my(){
//     console.log("my function");
//     console.log("learn js functions");
// }
// my();
// my();

// function my(msg){
//     console.log(msg);
//      }
// my("hey Sorcerer");
// my();

// function sum(x,y){
//     k=x*y;
//     console.log(k + " before");
//     return k
//     console.log(k +" after");

//      }
// sum(5,4);

// function sum(a,b){
//     return a+b
// }
// const Arrsum = (a, b) => {
//   return a + b;
// };

// function mul(a,b)
// {
//     return a*b;
// }
// const Arrmul=(a,b) =>{
//     return a*b
// }

// Arrsum(3,6);
// Arrmul(5,6);
// Take string as arguement and return vowels

// const val = (str) => {
//   let c = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||                                                                                                          
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       c++;
//     }
//   }
//   return c;
// };
// console.log(val);

    //                     // forEach
    //  let arr=[1,2,3,4,5,6];
    //  arr.forEach((val)=>{
    //     console.log(val**2);
    //  });
                //           // map
                // let n=[1,2,3,4,5];
                // const newAr=n.map((val)=>{
                //     return val**2;
                // })
                            //filter

                        //   let n=[1,2,3,4,5,6,7,8,9,10]; 
                //   const newar=n.filter((val)=>{
                //     return val%2==1;
                //   })         

                    //        reduce
                    //sum of all values
    //                       let n=[1,4,8,9,5,6,7,2,3,10]; 
    // const newAr=n.reduce((a,b)=>{
    //     return a+b;
    // })
    // console.log(newAr);

        // // students who scored more than 90
        // let marks=[28,76,45,87,97,65,54,99,45,67,90,91];
        // const newAr=marks.filter((val)=>{
        //     return val>=90;
        // }) 
        // console.log(newAr);

        // //Q  take input as n and create 1 to n array and find sum and product till n
        // let n=prompt("Enter the n");
        // let ar=[];
        // for(let i=1; i<=n; i++)
        //     ar.push(i);
        // console.log(ar);

        // const sumAr=ar.reduce((a,b)=>{
        //     return a+b;
        //        })
        //        console.log(`sum = ${sumAr}`);

               
        // const mulAr=ar.reduce((a,b)=>{
        //     return a*b;
        //        })
        //        console.log(`factorial is = ${mulAr}`);


        //              DOM    prac 3
