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

var alumnos = [alumno1, alumno2]

let grupo1 = new Grupo("Grupo 1", alumnos)


function agregarAlumno() {
    let nombre = document.getElementById("nombre").value
    let calificacion = document.getElementById("calificacion").value
    let nuevoAlumno = new Alumno(nombre, calificacion)
    alumnos.push(nuevoAlumno)
    mostrarAlumnos()
}

function mostrarAlumnos() {
    limpiarTabla()
    alumnos.forEach(item => {
        let tBody = document.getElementById("students")
         let elemento = `
         <tr>
            <td>${item.nombre}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>${item.calificacion}</td>
        </tr>
         `;
    tBody.innerHTML += elemento
   } )
}

function limpiarTabla() {
    let tBody = document.getElementById("students")
    tBody.innerHTML = ""
}

function eliminarAlumno() {
    alumnos.pop()
    mostrarAlumnos()
}

function ordernarAlfabeticamente() {

}

function buscarAlumno() {

}


// leer datos del input con el evento input
 let searchInput = document.getElementById("serchStudent");
    searchInput.addEventListener("input", function (event) {
        console.log(event.target.value);
    })