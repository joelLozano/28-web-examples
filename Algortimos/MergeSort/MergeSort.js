/*
    El algoritmo Merge Sort es un algoritmo de ordenamiento eficiente que utiliza 
    la estrategia de "dividir y conquistar" para ordenar una lista de elementos. 
    Funciona de la siguiente manera:

1. **Dividir**: El primer paso es dividir la lista no ordenada en dos mitades iguales.
 Esto se hace recursivamente hasta que cada mitad contenga solo un elemento. 
 Esto se logra dividiendo repetidamente la lista por la mitad hasta que tengas sublistas de un solo elemento.

2. **Conquistar**: Luego, se combinan (fusionan) las sublistas de manera ordenada.
 Comienzas fusionando dos sublistas de un solo elemento en una lista ordenada de dos elementos, 
 luego fusionas dos listas ordenadas de dos elementos en una lista ordenada 
 de cuatro elementos, y así sucesivamente, hasta que hayas combinado todas las sublistas en una sola lista ordenada.

El paso crucial en Merge Sort es la fusión de dos sublistas ordenadas. Aquí hay un 
ejemplo de cómo funciona el proceso de fusión:

Supongamos que tienes dos sublistas ordenadas:

Sublista 1: [2, 4, 6]
Sublista 2: [1, 3, 5]

Para fusionar estas sublistas, comparas los elementos en la parte superior
 de cada sublista y los colocas en orden en una nueva sublista vacía. 
 En este caso, comenzarías comparando 2 y 1. 1 es el elemento más pequeño, 
 por lo que lo colocarías en la nueva sublista. Luego, avanzas al siguiente 
 elemento en la sublista 2 y lo comparas con el elemento siguiente 
 en la sublista 1. Continúas haciendo esto hasta que hayas 
 fusionado ambas sublistas en una sola lista ordenada:

Sublista fusionada: [1, 2, 3, 4, 5, 6]

Este proceso de fusión se repite recursivamente para todas las sublistas 
hasta que finalmente tengas una sola lista ordenada que contiene todos los elementos originales.

Merge Sort es un algoritmo de ordenamiento estable y tiene un 
tiempo de ejecución promedio de O(n log n), lo que lo hace muy eficiente para ordenar grandes conjuntos de datos.
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Si la lista tiene 0 o 1 elemento, ya está ordenada
    }
  
    // Dividir la lista en dos mitades
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Aplicar mergeSort a cada mitad (recursión)
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);
  
    // Combinar (fusionar) las dos listas ordenadas
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Combinar las sublistas ordenadas
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Agregar elementos restantes de las sublistas
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Ejemplo de uso:
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(unsortedArray);
  console.log("Array ordenado:", sortedArray);
  