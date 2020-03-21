'use strict';
function workWithMovies(){
    const movielist=[
    'La Princesa Mononoke','1917','Joker'
];
console.log(movielist);
movielist[3]='Constantine'; //add peli en puesto 3
console.log(movielist);
movielist[0]='El Castillo Vagabundo';  //reescribir peli en puesto 0
console.log(movielist);
}

console.log(workWithMovies());

