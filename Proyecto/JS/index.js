// Gestion de Alumno 


class Grupo {
    constructor(nombre, alumnos) {
        this.nombre = nombre
        this.alumnos = alumnos
    }
}

class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre
        this.calificacion = calificacion
    }
}

let alumno1 = new Alumno("Erick", 10)
let alumno2 = new Alumno("Luis", 8)
let alumno3 = new Alumno("Juan", 9)
let alumno4 = new Alumno("Maria", 7)
let alumno5 = new Alumno("Ana", 6)
let alumno6 = new Alumno("Pedro", 5)
let alumno7 = new Alumno("Jose", 4)
let alumno8 = new Alumno("Carlos", 3)
let alumno9 = new Alumno("Ricardo", 2)
let alumno10 = new Alumno("Fernando", 1)
let alumno11 = new Alumno("Alfonso", 10)
let alumno12 = new Alumno("Luisa", 8)
let alumno13 = new Alumno("Katia", 9)
let alumno14 = new Alumno("Mariana", 7)
let alumno15 = new Alumno("Anabarbara", 6)
let alumno16 = new Alumno("Pedro", 5)


var alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8, alumno9, alumno10, alumno11, alumno12, alumno13, alumno14, alumno15, alumno16]
let grupo1 = new Grupo("Grupo 1", alumnos)


function agregarAlumno() {
    let nombre = document.getElementById("nombre").value
    let calificacion = document.getElementById("calificacion").value
    let nuevoAlumno = new Alumno(nombre, calificacion)
    alumnos.push(nuevoAlumno)
    mostrarAlumnos(alumnos)
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
   alumnos.splice(indice, 1)
   document.getElementById("alertContainer").style.display = "block"
    mostrarAlumnos(alumnos)
}

function eliminarUltimoRegistro() {
    alumnos.pop()
    mostrarAlumnos(alumnos)
}

function ordernarAlfabeticamente() {
    let arrayOrdenado = alumnos.sort((a, b) => {
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
    let arrayAlumnoFiltrado = alumnos.filter( alumno => alumno.nombre.includes(nombreCapitalizado))
    if (arrayAlumnoFiltrado.length == 0) {
        alert("No se encontro el alumno")
    } else {
        mostrarAlumnos(arrayAlumnoFiltrado)
    } 
    
}

// mostrarAlumnos
mostrarAlumnos(alumnos)


// leer datos del input con el evento input
 let searchInput = document.getElementById("serchStudent");
    searchInput.addEventListener("input", buscarAlumno)