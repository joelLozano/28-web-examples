

let alumnos = ["Erick", "luis", "Alfredo", "Sergio", "yared", "michelle"]
console.log(alumnos);

// metdo push - > agregar un elemento al final del arreglo
alumnos.push("Alejandro")
console.log(alumnos);

// metodo pop -> elimina el ultimo elemento del arreglo
alumnos.pop()
console.log(alumnos);

// unshift -> agrega un elemento al inicio del arreglo
alumnos.unshift("Pedro picapiedra")
console.log(alumnos);

// shift -> elimina el primer elemento del arreglo
alumnos.shift()
console.log(alumnos);

// splice -> agrega un elemento en la posicion que le indiquemos
let instrucciones = "-ve al oxoo -dile al cajero que pagaras con QR - escanea el codigo - ingresa el monto - confirma el pago - listo "
let arrayInstrucciones = instrucciones.split("-")
arrayInstrucciones.shift()
console.log(arrayInstrucciones);


// slice -> copia una parte del arreglo
let nuevoArray = alumnos.slice(2)
console.log(nuevoArray);

let nuevoArray2 = alumnos.slice(2,4)
console.log(nuevoArray2);

// splice 
let elementosEliminado = alumnos.splice(2,2) // -> elimina dos elementos a partir de la posicion 2
console.log(alumnos);
console.log(elementosEliminado);

alumnos.splice(2,0,"oscar", "lesly") // -> agrega dos elementos a partir de la posicion 2
console.log(alumnos);

// sort -> ordena el arreglo de A-Z
alumnos.sort()
console.log(alumnos);


// sort numeros 

let numeros = [1, 100, 200, 300, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros.sort());
numeros.sort(function (a, b) {
    return a - b
})

console.log(numeros);




