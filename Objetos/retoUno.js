'use strict';
const fraseSusan = document.querySelector('.mens1');
const fraseRoci = document.querySelector('.mens2');
const geekGirl1={
    name: 'Susana',
    age:34,
    profesion: 'periodista',
};
const geekGirl2={
    name: 'Rocio',
    age:25,
    profesion: 'actriz', 
}
fraseSusan.innerHTML=`Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.profesion}`;
fraseRoci.innerHTML=`Mi nombre es ${geekGirl2.name}, tengo ${geekGirl2.age} años y soy ${geekGirl2.profesion}`;