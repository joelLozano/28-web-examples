// Gestion de Alumno 

// Leer datos de un archivo externo JSON 
/* La funcion fetch sirve para consultar datos / informacion de una API o un archivo
para su uso debo usar una promesa, la cual me permite ejecutar codigo cuando la promesa se cumpla.
*/ 


let data = [];

fetch('./File.json')
.then(response => {
    if (!response.ok) {
        throw Error("Error")
    }
    return response.json();
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})


class Grupo {
    constructor(nombre, data) {
        this.nombre = nombre
        this.data = data
    }
}

class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre
        this.calificacion = calificacion
    }
}


let grupo1 = new Grupo("Grupo 1", data.data)


function agregarAlumno() {
    let nombre = document.getElementById("nombre").value
    let calificacion = document.getElementById("calificacion").value
    let nuevoAlumno = new Alumno(nombre, calificacion)
    data.push(nuevoAlumno)
    mostrarAlumnos(data)
}

function mostrarAlumnos(array) {
    limpiarTabla()
    array.forEach((item, indice) => {
        let tBody = document.getElementById("students")
         let elemento = `
         <tr>
            <td>${item.nombre}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>${item.calificacion}</td>
            <td><button class="btn btn-danger" onclick="eliminarAlumno(${indice})">Elimnar</button></td>
        </tr>
         `;
    tBody.innerHTML += elemento
   } )
}

function limpiarTabla() {
    let tBody = document.getElementById("students")
    tBody.innerHTML = ""
}

function eliminarAlumno(indice) {
   data.splice(indice, 1)
   document.getElementById("alertContainer").style.display = "block"
    mostrarAlumnos(data)
}

function eliminarUltimoRegistro() {
    data.pop()
    mostrarAlumnos(data)
}

function ordernarAlfabeticamente() {
    let arrayOrdenado = data.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    mostrarAlumnos(arrayOrdenado)
}

function buscarAlumno() {
    let alumnoAbuscar = document.getElementById("serchStudent").value
    const nombreCapitalizado = alumnoAbuscar.charAt(0).toUpperCase() + alumnoAbuscar.slice(1)
    let arrayAlumnoFiltrado = data.filter( alumno => alumno.nombre.includes(nombreCapitalizado))
    if (arrayAlumnoFiltrado.length == 0) {
        alert("No se encontro el alumno")
    } else {
        mostrarAlumnos(arrayAlumnoFiltrado)
    } 
    
}

// mostrarAlumnos
mostrarAlumnos(data)


// leer datos del input con el evento input
 let searchInput = document.getElementById("serchStudent");
    searchInput.addEventListener("input", buscarAlumno)


   var objeto =  {
        nombre: "joel",
        apellido: "lozano",
        edad: 12,
        calificaciones : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    }