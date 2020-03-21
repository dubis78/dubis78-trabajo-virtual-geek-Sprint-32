let media=0, count=0, acum=0, nombrejoven=0, countdiseñadoras=0;
const geekGirls=[
    {
        nombre: 'Maria',
        edad: 29,
        profesion: 'Diseñadora'
      }, 
      {
        nombre: 'Lucia',
        edad: 31,
        profesion: 'Ingeniera química'
      },
      {
        nombre: 'Susana',
        edad: 34,
        profesion: 'Periodista'
      },
      {
        nombre: 'Rocio',
        edad: 25,
        profesion: 'actriz'
      },
      {
        nombre: 'Inmaculada',
        edad: 21,
        profesion: 'Diseñadora'
      }
];
/*---------------a--------------------- */
count=countGeekGirls(geekGirls);
media=averageAge(geekGirls);
function countGeekGirls(geekGirls){
    let cont=geekGirls.length+1;
    return cont;
}
/*---------------b--------------------- */
function averageAge(geekGirls){
let acum=0;
    dim=geekGirls.length;
    for (let i = 0; i < geekGirls.length; i++){
        acum+=geekGirls[i].edad;
    }
    return acum/dim;
}
/*---------------c--------------------- */
nombrejoven= theYoungest(geekGirls)
function theYoungest(geekGirls){
    let edad=100;
    let mayor="";
    for (let i = 0; i < geekGirls.length; i++){
        if(geekGirls[i].edad <edad)
        mayor=geekGirls[i].nombre;
    } return mayor
}
/*---------------d--------------------- */
const geekGirlsprofesion=geekGirls.filter(item=>{
    return item.profesion==='Diseñadora';},0
)
console.log(geekGirls)
console.log(`Hay ${count} geekGirls :D`);
console.log(`La media de edad de las Geekgirls es: ${media}`);
console.log(`La  menor del grupo es  ${nombrejoven}`);
console.log (`El numero de diseñadoras es ${(geekGirlsprofesion.length)}`);
