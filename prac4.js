const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');

// btn1.onclick=(e)=>{
//     console.log('You clicked me');
//     let a=9;
//     a++;
//     console.log(a);
// };
// const box=document.getElementById('box');
// box.onmouseover=(e)=>{
//     box.style.backgroundColor='red';
//     console.log('over me');
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);

// }

// box.onmouseout=()=>{
//     box.style.backgroundColor='blue';
//     console.log('out of me');
    
// }
// /               event listeners
// btn1.addEventListener('click',()=>{
//     console.log('You clicked me -Event 1');
    
// });
// btn1.addEventListener('click',()=>{
//     console.log('You clicked me -Event 2');
    
// });
// const event3=()=>{
//     console.log('You clicked me -Event 3');
    
// };
// btn1.addEventListener('click',event3);

// btn1.addEventListener('click',()=>{
//     console.log('You clicked me -Event 4');
    
// })
// btn1.removeEventListener('click',(event3));

//   light dark mode
// const mode=document.getElementById('light');
// const body=document.body;
// mode.onclick=()=>{
//  if(mode.innerHTML==='Light Mode') 
// {
//      body.style.backgroundColor='white';
//      body.style.color='black';
//      mode.innerHTML='Dark Mode';
// }
//  else if(mode.innerHTML='Dark Mode')
//  {
//     body.style.backgroundColor='black';
//     body.style.color='white'; 
//     mode.innerHTML='Light Mode';
//  }
// }