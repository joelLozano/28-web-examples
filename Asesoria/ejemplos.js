// Objeto del Ticket 
class Ticket {
    constructor (persona, ticket) {
        this.persona = persona
        this.ticket = ticket;
    }
}

const ticket1 = new Ticket('Juan', true);
const ticket2 = new Ticket('Pedro', false);
const ticket3 = new Ticket('Maria', true);

class Stack {
    constructor() {
        this.pila = [];
    }
    // Agregar un elemento
    push(elemento) {
        this.pila.push(elemento);
    }
    // Eliminar un elemento
    pop() {
        if (this.pila.length === 0) {
            return null;
        }
        return this.pila.pop();
    }
}

const stack = new Stack();
stack.push(ticket1); // ticket1.persona = "juan",  ticket1.ticket =  true 
stack.push(ticket2);


for (let i = 0; i < stack.pila.length; i++) {
    if (stack.pila[i].ticket) {
        // haces algo 
    } else {
        // haces otra cosa 
    }
}


// crear una cola 
class Queue {
    constructor() {
        this.cola = [];
    }
    // Agregar un elemento
    enqueue(elemento) {
        this.cola.push(elemento);
    }
    // Eliminar un elemento
    dequeue() {
        if (this.cola.length === 0) {
            return null;
        }
        return this.cola.shift();
    }
}

// array de personas 
let 