'use strict';
const numbers= [0,1,8,0,0];
let acum1=0,acum2=0,media1=0,media2=0;
for (let i = 0; i < numbers.length; i++) {
    acum1+=numbers[i];    
}
media1=acum1/numbers.length;
console.log('la media es: '+media1);
numbers[5]=88;
for (let i = 0; i < numbers.length; i++) {
    acum2+=numbers[i];    
}
media2=acum2/numbers.length;
console.log('la media es: '+media2);
const numbers2= [2,4,6,8,10,12];
let media3=0;
media3=average(numbers2);
function average(numbers2){
    let acum3=0; 
    for (let i = 0; i < numbers2.length; i++) {
        acum3+=numbers2[i];    
    }
    return (acum3/numbers2.length)
}
console.log('La media es: '+media3);