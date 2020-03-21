'use strict';
const job = "developer"; 
 const user = { // Objeto que almacena la información de un usuario
    firstName: 'Pepito',
    lastName:'Pérez',
    age: 30,
    job: job, //Al valor job (a la derecha) de la propiedad job (lado izquierdo), no se lo coloca entre comillas, ya que a ésta propiedad job le estamos asignando la constante job definida al inicio.
}
document.write(`Mi nombre es ${user.firstName} ${user.lastName}, tengo ${user.age} años y mi profesión es ${user.job}`);