'use strict';
const geekGirl1={}
geekGirl1.name='Susana';
geekGirl1.age=34;
geekGirl1.profesion='periodista';
geekGirl1.run='Estoy corriendo';
geekGirl1.showBio = function (){
    return `Mi nombre es ${this.name} tengo ${this.age} años y soy ${this.profesion}`;
}
const geekGirl2={}
geekGirl2.name='Rocio';
geekGirl2.age=25;
geekGirl2.profesion='actriz';
geekGirl2.run='Estoy corriendo';
geekGirl2.showBio = function (){
    return `Mi nombre es ${this.name} tengo ${this.age} años y soy ${this.profesion}`;
}
alert(geekGirl1.showBio());
alert(geekGirl2.showBio());
