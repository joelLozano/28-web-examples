/* Un objeto tiene Caractiristicas y Comportamientos

propiedades y metodos o funciones.

Un objeto se crea con base a una clase 

Abstraccion: Es cuando se toma un objeto del mundo real y se lleva a un objeto en el mundo de la programacion
polismorfismo: Es cuando un objeto puede tener diferentes formas, por ejemplo un objeto de tipo animal puede ser un perro, un gato, un pajaro, etc.

*/

class Auto { 
    constructor(marca, precio) {
        this.marca = marca
        this.precio = precio
    }

    avanzar() {
        console.log(this.marca)
    }
}

const maverick = new Auto("Ford", 1970)
const mustang = new Auto("Ford", 1984)

// Estructura de datos 
// arrays o arrelos 


console.log(maverick.marca); // Ford




// Archivos JSON -> JavaScript Object Notation


var alumnos = [casio, reloj] 