'use strict';
/*
The console.log() method prints out a toString representation of the object in the console to the user.
The console.dir() method output the list of object properties of a specified object in the console to the user.

The nodeName property returns the name of the specified node.
Ex: the name of the node <div> is DIV or <p> i P


The required property sets or returns whether a text field must be filled out before submitting a form.
This property reflects the HTML required attribute.
*/

const button = document.querySelector('.clicked');
const input = document.querySelector('#input'); 
button.addEventListener('click',(e)=>{   
    console.dir(input);   
    console.dir(input.value);  
    //event.preventDefault();  //si de desacti...deja de pedir la entrada de info por obliga
});
