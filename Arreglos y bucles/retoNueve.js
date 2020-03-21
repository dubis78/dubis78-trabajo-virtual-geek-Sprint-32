'use strict';
let num=0,acum='';
num=prompt('de qué altura quieres el arbolito?');
for (let i = 0; i <num; i++) {
    acum=acum+'▲';
    console.log('' + acum);
}
