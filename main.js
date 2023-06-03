
// function generateColor(){
//     let hexaCode=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
//     let color='#';
//     for(let i=0; i<6;i++){
//         let number=Math.round(Math.random()*15);
//        let number2= hexaCode[number];
//        color+=number2;
//     }
//     document.querySelector('#container').style.backgroundColor=color
//     document.querySelector('#output').innerHTML=color

// };


const button=document.querySelector('#button');

button.addEventListener('click',function(){
let hexaColor=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let color='#';
for(let i=0; i<6; i++){
   let nbr1= Math.round(Math.random()*15);
   let num2=hexaColor[nbr1];
   color+=num2;
}
document.querySelector('#container').style.backgroundColor=color;
document.querySelector('#output').innerHTML=color;
});




