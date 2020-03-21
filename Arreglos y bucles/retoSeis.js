'use strict';
const input1=document.querySelector('#input1');
const input2=document.querySelector('#input2');
const button=document.querySelector('.clicked');
let acumHTML='';
button.addEventListener("click",(e)=>{
  event.preventDefault()
  const arrayInput=[];
  arrayInput[0]=(input1.value);
  arrayInput[1]=(input2.value);
  for (const i of arrayInput) {
    acumHTML=acumHTML+`<br>¡A mí también me encantó ${i}!`;//1er ciclo i= arrayInput[0]
    console.log (`¡A mí también me encantó ${i}!`);  //con for of i apunta a una direccion del arreglo por cada iteracc del ciclo       
  }
  document.querySelector(`.fav`).innerHTML=acumHTML; 
});
