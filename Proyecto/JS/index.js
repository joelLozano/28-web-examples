////////////////////////////  JSON   ////////////////////////////
let dataFromJson; // Variable global que almacena los datos del archivo JSON

/* La funcion fetch sirve para consultar datos / informacion de una API o un archivo
       para su uso debo usar una promesa, la cual me permite ejecutar codigo cuando la promesa se cumpla.
    */

fetch("./Assets/File.json") // fetch recibe como parametro la ruta del archivo
  .then((response) => response.json())
  .then((data) => {
    dataFromJson = data;
    mostrarGrupos();
    mostrarTablaGrupos();
  });

  // NOTA: Las funciones se deben mandar ejecutar dentro de este estracto de codigo, ya que si se ejecutan fuera, no se podra acceder a los datos del archivo JSON.
  // debido a  que es una funcion asincrona, por lo que se ejecuta en segundo plano, y el codigo que se encuentra fuera de la funcion se ejecuta de manera sincrona, por lo que se ejecuta primero.
  // en otras palabras el codigo que se encuentra fuera de la funcion se ejecuta antes de que se obtengan los datos del archivo JSON. y eso proboca que no se pueda acceder a los datos del archivo JSON.

////////////////////////////  CLASES  ////////////////////////////

// Se declaran las clases necesarias para agregar en usu momento grupos y alumnos.

class Grupo {
  constructor(nombre, alumnos) {
    this.nombre = nombre;
    this.alumnos = alumnos;
  }
}

class Alumno {
  constructor(nombre, calificacion) {
    this.nombre = nombre;
    this.calificacion = calificacion;
  }
}

////////////////////////////  CREANDO OBJETOS   ////////////////////////////
// Si deseas trabajar con objetos creados, de manera manual, puedes descomentar el siguiente codigo y comentar el codigo de la funcion fetch.

// let alumi1 = new Alumno("Joel", 10);
// let alumi2 = new Alumno("Juan", 9);
// let alumi3 = new Alumno("Pedro", 8);

// let alm2 = new Alumno("PEPE", 10);
// let alm3 = new Alumno("MAY", 9);
// let alm4 = new Alumno("Gaby", 8);

// let data = [alumi1, alumi2, alumi3];

// let data2 = [alm2, alm3, alm4];

// let grupo1 = new Grupo("Grupo 1", data);
// let grupo2 = new Grupo("Grupo 2", data2);

// let grupos = [grupo1, grupo2];

////////////////////////////  HTML  ////////////////////////////
// EL HTML se crea de manera dinamica, por lo que se crea un string con el codigo HTML y se agrega al DOM con innerHTML
// Esto permitira que se pueda agregar mas grupos y alumnos sin necesidad de modificar el HTML

let htmlBase = `
<div class="container mt-5 mb-5" id="formStudent">

        <div class="row">
            <div class="col" id=tableContent>
                
            </div>

            <div class="col">
                <h5>Agregar alumnno</h5>
                <section class="new-student">
                    <label for="">grupo</label>
                    <select name="grupos" id="gruposSelect">
                        <option value="">--</option>
                    </select>
                    <input type="text" placeholder="nombre" id="nombre">
                    <input type="calificacion" placeholder="calificacion" id="calificacion">
                    <button onclick="agregarAlumno()">Agregar</button>
                   </section>
            </div>
        </div>
    </div>
`;

document.getElementById("containerTable").innerHTML = htmlBase;
//document.getElementById("nombreGrupo").innerText = grupo1.nombre;


////////////////////////////  SELECT  ////////////////////////////
// FUNCION QUE MUESTRA LOS GRUPOS EN UN SELECT

function mostrarGrupos() {
  let select = document.getElementById("gruposSelect");
  dataFromJson.escuela.forEach((item, index) => {
    let option = document.createElement("option"); // Creo un elemento HTML de tipo option
    option.value = index; // Le asigno el valor del indice del array
    option.innerText = item.grupo;
    select.appendChild(option);
  });
}


////////////////////////////  MOSTRAR TABLAS DE GRUPOS  ////////////////////////////

// Funcion para mostrar grupos en una tabla
function mostrarTablaGrupos() {
  dataFromJson.escuela.forEach((item, index) => {
    let table = document.getElementById("tableContent");
    let tableHTML = `
    <div class="row">
            <div class="col">Grupo: <span id="nombreGrupo"></span></div>
            <div class="col text-center">
                <input type="text" id="serchStudent${index}" placeholder="buscar alumno">
            </div>
        </div>
    <table class="table table-striped-columns">
             <thead>
            <tr class="table-primary">
                <th>Nombre <button onclick="ordernarAlfabeticamente()">a-z</button></th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Curso</th>
                <th>Calificaciones</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="students${index}">
        </tbody>
    </table>`;
    table.innerHTML += tableHTML;
    mostrarAlumnos(item, index);
  });
  leerInput()
}

////////////////////////////  FORMULARIO PARA AGREGAR A LOS ALUMNOS A UN GRUPO EN ESPECIFICO  ////////////////////////////

function agregarAlumno() {
  let nombre = document.getElementById("nombre").value;
  let calificacion = document.getElementById("calificacion").value;
  let grupo = document.getElementById("gruposSelect").value;
  let nuevoAlumno = new Alumno(nombre, calificacion);
  dataFromJson.escuela[grupo].alumnos.push(nuevoAlumno);
  mostrarAlumnos(dataFromJson.escuela[grupo], grupo);
}

// recibe como parametro un objeto del grupo y el index del grupo
function mostrarAlumnos(item, indexGrupo) {
  limpiarTabla("students" + indexGrupo);
  if (item.alumnos.length == 0) {
    document.getElementById("students" + indexGrupo).innerHTML =
      "<h3>No hay alumnos</h3>";
  } else {
    item.alumnos.forEach((item, indiceALumno) => {
      let tBody = document.getElementById("students" + indexGrupo);
      let elemento = `
         <tr>
            <td>${item.nombre}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>${item.calificacion}</td>
            <td><button class="btn btn-danger" onclick="eliminarAlumno(${indexGrupo}, ${indiceALumno})">Elimnar</button></td>
        </tr>
         `;
      tBody.innerHTML += elemento;
    });
  }
}

function limpiarTabla(table) {
  let tBody = document.getElementById(table);
  tBody.innerHTML = "";
}

function eliminarAlumno(indexGrupo, indiceALumno) {
  grupos[indexGrupo].alumnos.splice(indiceALumno, 1);
  document.getElementById("alertContainer").style.display = "block";
  mostrarAlumnos(grupos[indexGrupo], indexGrupo);
}

function eliminarUltimoRegistro() {
  data.pop();
  mostrarAlumnos(data);
}

function ordernarAlfabeticamente() {
  let arrayOrdenado = data.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  });
  mostrarAlumnos(arrayOrdenado);
}

function buscarAlumno(indexGrupo) {
  let alumnoAbuscar = document.getElementById("serchStudent"+indexGrupo).value;
  const nombreCapitalizado =
    alumnoAbuscar.charAt(0).toUpperCase() + alumnoAbuscar.slice(1);
    let arrayAlumnoFiltrado = {alumnos:[]}
  arrayAlumnoFiltrado.alumnos = dataFromJson.escuela[0].alumnos.filter((alumno) =>
    alumno.nombre.includes(nombreCapitalizado)
  );
  if (arrayAlumnoFiltrado.length == 0) {
    alert("No se encontro el alumno");
  } else {
    mostrarAlumnos(arrayAlumnoFiltrado, 0);
  }
}

// mostrarAlumnos
// mostrarAlumnos(data)

// leer datos del input con el evento input
function leerInput() {
  dataFromJson.escuela.forEach((item, index) => {
    
    let searchInput = document.getElementById("serchStudent"+index);
searchInput.addEventListener("input", () => {
    let alumnoAbuscar = document.getElementById("serchStudent"+index).value;
    const nombreCapitalizado =
      alumnoAbuscar.charAt(0).toUpperCase() + alumnoAbuscar.slice(1);
      let arrayAlumnoFiltrado = {alumnos:[]}
    arrayAlumnoFiltrado.alumnos = item.alumnos.filter((alumno) =>
      alumno.nombre.includes(nombreCapitalizado)
    );
    if (arrayAlumnoFiltrado.length == 0) {
      alert("No se encontro el alumno");
    } else {
      mostrarAlumnos(arrayAlumnoFiltrado, index);
    }
  });
})
}