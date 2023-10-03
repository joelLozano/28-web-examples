// 1.- Odernar mis elementos ( a ...z  o 0 ... 9 )
// 2.- Dividir el arreglo en 2
// 3.- Evaluar si mayor o menor al elemento a buscar
// 4.- Si es mayor, se toma la mitad superior del arreglo
// 5.- Si es menor, se toma la mitad inferior del arreglo
// 6.- Se repite el proceso hasta encontrar el elemento
/// 7.- En caso de econtrar un elemento avisar 
// 8.- Preguntar si el numero a buscar === al numero del arreglo

const arrayNumeros = [1, 2 ,4 ,3 ,6 ,5 ,8 ,9 ,10, 7]
const arrayOrdenado = arrayNumeros.sort((a, b) => a - b)
// [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]


function busquedabinaria(arrayOrdenado , numeroBuscado) {
    let inicio = 0
    let fin = arrayNumeros.length -1 
    // paso 1 Orndenar los elementos
    
    
    while (inicio <=  fin) {
        let mitad = Math.floor((inicio + fin) / 2)
    
        if (arrayOrdenado[mitad] === numeroBuscado) {
            return mitad
        } else if (arrayOrdenado[mitad] < numeroBuscado) {
            inicio = mitad + 1
        } else {
            fin = mitad - 1
        }
    }
    return -1
}

let resultado = busquedabinaria(arrayOrdenado, 9)

if (resultado === -1) {
    console.log('El numero no se encuentra')
} else {
    console.log('El numero se encuentra en la posicion', resultado)
}

