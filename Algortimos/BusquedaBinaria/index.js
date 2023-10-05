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

/*

1. **Definición de la función `busquedaBinaria`**:
   - Se define una función llamada `busquedaBinaria` que toma dos parámetros: `arreglo` (un arreglo ordenado) y `elemento` (el valor que se desea buscar en el arreglo).

2. **Inicialización de variables**:
   - Se declaran dos variables locales, `inicio` y `fin`, que se utilizan para llevar un seguimiento de los índices iniciales y finales del rango de búsqueda en el arreglo. `inicio` se inicializa en 0, y `fin` se inicializa en la longitud del arreglo menos 1.

3. **Bucle `while`**:
   - Se inicia un bucle `while` que se ejecutará mientras `inicio` sea menor o igual a `fin`. Este bucle se encarga de realizar la búsqueda binaria.

4. **Cálculo del punto medio (`medio`)**:
   - En cada iteración, se calcula el índice del elemento en la posición media del rango de búsqueda. Esto se hace mediante la fórmula `Math.floor((inicio + fin) / 2)`.

5. **Comparación del elemento en la posición `medio` con el elemento buscado**:
   - Se compara el valor del elemento en la posición `medio` del arreglo con el `elemento` que se está buscando.
   - Si son iguales, significa que el elemento ha sido encontrado, y se devuelve el índice `medio` como resultado.

6. **Actualización de `inicio` y `fin`**:
   - Si el elemento en la posición `medio` es menor que el `elemento` buscado, significa que el elemento está en la mitad derecha del rango. Por lo tanto, se actualiza `inicio` para que sea igual a `medio + 1`.
   - Si el elemento en la posición `medio` es mayor que el `elemento` buscado, significa que el elemento está en la mitad izquierda del rango. Por lo tanto, se actualiza `fin` para que sea igual a `medio - 1`.

7. **Salida si no se encuentra el elemento**:
   - Si el bucle `while` termina y no se encuentra el elemento, se devuelve `-1` para indicar que el elemento no se encuentra en el arreglo.

8. **Llamada a la función con datos de ejemplo**:
   - Se define un arreglo `miArreglo` que contiene números ordenados.
   - Se define el `elementoBuscado` que se desea encontrar en el arreglo.

9. **Llamada a la función `busquedaBinaria`**:
   - Se llama a la función `busquedaBinaria` con el arreglo `miArreglo` y el `elementoBuscado`. El resultado se almacena en la variable `indiceEncontrado`.

10. **Salida en la consola**:
    - Se verifica si `indiceEncontrado` es diferente de `-1`. Si es diferente, se imprime un mensaje indicando que el elemento se encuentra en el índice `indiceEncontrado`. Si es `-1`, se imprime un mensaje indicando que el elemento no se encuentra en el arreglo.

En resumen, este código implementa una búsqueda binaria en un arreglo ordenado y devuelve el índice del elemento buscado si se encuentra, o `-1` si no se encuentra.


*/