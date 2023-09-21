/*   

Pseudocodigo: 

    Proceso: Test de covid
        Entrada: cabeza, diarrea, temperatura, sentidoGusto, oxigenacion
        Salida: diagnostico

        Proceso 1 : Si cabeza && diarrea && temperatura && sentidoGusto && oxigenacion == true
                    entonces: mostrar "Tengo 98% de tener covid"
                
        Proceso 2 : Si cabeza && diarrea && oxigenacion == true 
                    entonces: mostrar "Tengo 75% de tener covid"
        Proceso 3: Si cabeza || diarrea || oxigenacion || sentidoGusto == true 
                    entonces: mostrar "Tengo 20% de tener covid"
        Proceso 4: Si sentidoGusto && oxigenacion == true 
                    entonces: mostrar "Tengo 80% de tener covid"
        Proceso 5: si no, entonces: mostrar "No tienes covid"
        
        Fin de Proceso

    Fin de programa.
    */

    // Entradas 
    function obtenrDatos() {
        let cabeza = document.getElementById("cabeza").value;
        let diarrea = document.getElementById("diarrega").value;
        let temperatura = document.getElementById("temperatura").value;

        crearDiagnosticos( cabeza, diarrea, temperatura)
    }

    function mostrarDiagnostuico(mensaje) {
        console.log(mensaje)
    }

    // Salida 
    var diagnostico = "" 

    function crearDiagnosticos(cabeza, diarrea, temperatura) {

    if (cabeza && diarrea && temperatura) {
         mostrarDiagnostuico("Tengo 98% de tener covid")
        
    } else if(cabeza&& diarrea) {
        mostrarDiagnostuico("Tengo 75% de tener covid")
    } else if (cabeza || diarrea || temperatura) {
        diagnostico = "Tengo 20% de tener covid"
        console.log(diagnostico);
    } else {
        console.log("No tienes covid");
    }
}
