 // ¿Que es el metodo de la burbuja ?

    // El método de la burbuja es un algoritmo de ordenamiento
    // muy sencillo. Funciona revisando cada elemento de la lista
    // que va a ser ordenada con el siguiente, intercambiándolos de
    // posición si están en el orden equivocado. Es necesario revisar
    // varias veces toda la lista hasta que no se necesiten más intercambios,
    // lo cual significa que la lista está ordenada. Este algoritmo obtiene su
    // nombre de la forma con la que suben por la lista los elementos durante los intercambios,
    // como si fueran pequeñas "burbujas".

function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
    do {
      swapped = false;
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Intercambiar los elementos si están en el orden incorrecto
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  
  // Ejemplo de uso:
  var array = [64, 34, 25, 12, 22, 11, 90];
  bubbleSort(array);
  console.log("Array ordenado:", array);

  
  // Explicacion de como funciona el metodp de la burbuja
    // https://www.geeksforgeeks.org/bubble-sort/

    // paso 1: Comparamos el primer elemento con el segundo, si el primero es mayor que el segundo, los intercambiamos.
    // paso 2: Comparamos el segundo elemento con el tercero, si el segundo es mayor que el tercero, los intercambiamos.
    // paso 3: Así sucesivamente hasta terminar con todos los elementos.
    // paso 4: Volvemos al primer elemento, y repetimos todo el proceso hasta que esté ordenado.
    // paso 5: El ordenamiento se realiza en el mismo arreglo.
    // paso 6: Si el arreglo es de n elementos, hacemos n-1 pasadas.
    // paso 7: Al final tendremos todos los elementos ordenados.
    // paso 8: La complejidad computacional en el peor de los casos es de O(n²).
    // paso 9: La complejidad computacional en el mejor de los casos es de O(n).
    // paso 10: La complejidad computacional en el caso promedio es de O(n²).
    // paso 11: Es un algoritmo de ordenamiento estable.
    // paso 12: Es un algoritmo de ordenamiento in-place.
    // paso 13: Es un algoritmo de ordenamiento por comparación.

    // Ejemplo de como funciona el metodo de la burbuja
    // https://www.youtube.com/watch?v=lyZQPjUT5B4