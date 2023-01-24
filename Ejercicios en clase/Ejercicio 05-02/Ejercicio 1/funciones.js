function mostrarDatos() {
    document.getElementById("mostrarDatos").addEventListener("click", function(){
        let valor1 = document.getElementById("entrada").value;
        let valor2 = document.formularioBusqueda.cEntrada.value;
        let valor3 = document.formularioBusqueda.elements[0].value;
        let valor4 = document.forms["formularioBusqueda"].elements["cEntrada"].value;
        let valor5 = document.forms["formularioBusqueda"].cEntrada.value;
      
        let ejercicio1 = document.getElementById("Ejercicio1");
        ejercicio1.innerHTML = "Valor 1: " + valor1 + "<br>" +
          "Valor 2: " + valor2 + "<br>" +
          "Valor 3: " + valor3 + "<br>" +
          "Valor 4: " + valor4 + "<br>" +
          "Valor 5: " + valor5;
      });
}

