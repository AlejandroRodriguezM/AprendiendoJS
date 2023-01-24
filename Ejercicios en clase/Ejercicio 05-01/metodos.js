
/*
Crea una funcion que Use el Método 3 a través de la colección forms[] del objeto document,  
que contiene la referencia a todos los controles del formulario para para mostrar los
 datos del formulario con InnerElements. Añade un boton que llame a esa función.
*/
function metodo1() {
    // Obtener el formulario utilizando la colección forms[]
    let form = document.nameformulario;
    // Obtener los valores de los campos del formulario
    let nombre = form.name_control.value;
    let contrasena = form.pass_control.value;
    let email = form.email_control.value;
    let url = form.url_control.value;
    let fecha = form.date_control.value;
    let tiempo = form.time_control.value;
    let numero = form.number_control.value;
    let telefono = form.tel_control.value;
    let busqueda = form.search_control.value;
    let color = form.color_control.value;
    let sistemaOperativo = form.sistema_control.value;
    let lenguajes = form.querySelectorAll("input[name='lenguaje_control']:checked");
    let saberPython = form.python_control.value;
    let comentarios = form.comentario_control.value;

    // Obtener los lenguajes seleccionados
    let lenguajesSeleccionados = "";
    for (let i = 0; i < lenguajes.length; i++) {
        if (lenguajes[i].checked) {
            lenguajesSeleccionados += lenguajes[i].value + " ";
        }
    }

    // Mostrar los valores en el div "Ejercicio2"
    let ejercicio2 = document.getElementById("Ejercicio2");
    ejercicio2.innerHTML = "Nombre: " + nombre + "<br>" +
        "Contraseña: " + contrasena + "<br>" +
        "Correo Electrónico: " + email + "<br>" +
        "URL: " + url + "<br>" +
        "Fecha: " + fecha + "<br>" +
        "Tiempo: " + tiempo + "<br>" +
        "Número: " + numero + "<br>" +
        "Teléfono: " + telefono + "<br>" +
        "Término de búsqueda: " + busqueda + "<br>" +
        "Color Favorito: " + color + "<br>" +
        "Sistema operativo: " + sistemaOperativo + "<br>" +
        "Lenguajes: " + lenguajesSeleccionados + "<br>" +
        "Sabes utilizar Python: " + saberPython + "<br>" +
        "Comentarios: " + comentarios;
}


/* Usa el Método 2 A través del método getElementsByTagName() . 
Añade un botón (MostrarDatosName)  que llame una función para  
mostrar los datos del formulario con InnerElements en el div con id ejercicio */
function metodo2() {

    // Obtener el formulario utilizando getElementsByTagName()
    let form = document.getElementsByTagName("idFormulario")[0];

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementsByTagName("name_control").value;
    let contrasena = document.getElementsByTagName("pass_control").value;
    let email = document.getElementsByTagName("email_control").value;
    let url = document.getElementsByTagName("url_control").value;
    let fecha = document.getElementsByTagName("date_control").value;
    let tiempo = document.getElementsByTagName("time_control").value;
    let numero = document.getElementsByTagName("number_control").value;
    let telefono = document.getElementsByTagName("tel_control").value;
    let busqueda = document.getElementsByTagName("search_control").value;
    let color = document.getElementsByTagName("color_control").value;
    let sistemaOperativo = document.getElementsByTagName("sistema_control").value;
    let lenguajes = document.getElementsByTagName("lenguaje_control");
    let saberPython = document.getElementsByTagName("python_control").value;
    let comentarios = document.getElementsByTagName("comentario_control").value;


    // Obtener los lenguajes seleccionados
    let lenguajesSeleccionados = "";
    for (let i = 0; i < lenguajes.length; i++) {
        if (lenguajes[i].checked) {
            lenguajesSeleccionados += lenguajes[i].value + " ";
        }
    }

    // Mostrar los valores en el div "Ejercicio3"
    let ejercicio3 = document.getElementById("Ejercicio3");
    ejercicio3.innerHTML = "Nombre: " + nombre + "<br>" +
        "Contraseña: " + contrasena + "<br>" +
        "Correo Electrónico: " + email + "<br>" +
        "URL: " + url + "<br>" +
        "Fecha: " + fecha + "<br>" +
        "Tiempo: " + tiempo + "<br>" +
        "Número: " + numero + "<br>" +
        "Teléfono: " + telefono + "<br>" +
        "Término de búsqueda: " + busqueda + "<br>" +
        "Color Favorito: " + color + "<br>" +
        "Sistema operativo: " + sistemaOperativo + "<br>" +
        "Lenguajes: " + lenguajesSeleccionados + "<br>" +
        "Sabes utilizar Python: " + saberPython + "<br>" +
        "Comentarios: " + comentarios;
}


/* Ejercicio 4. Añade ids cada control y Usa el Método 1 A través del método getElementById() del DOM,
que nos permite acceder a un objeto a través de su atributo ID. Ejemplo: var
formulario=document.getElementById("contactar"); Añade un botón que llame una función para mostrar
los datos del formulario con InnerElements en el div con id ejercicio3  */
function metodo3() {

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("name_control").value;
    let contrasena = document.getElementById("pass_control").value;
    let email = document.getElementById("email_control").value;
    let url = document.getElementById("url_control").value;
    let fecha = document.getElementById("date_control").value;
    let tiempo = document.getElementById("time_control").value;
    let numero = document.getElementById("number_control").value;
    let telefono = document.getElementById("tel_control").value;
    let busqueda = document.getElementById("search_control").value;
    let color = document.getElementById("color_control").value;
    let sistemaOperativo = document.getElementById("sistema_control").value;
    let lenguajes = document.getElementsByName("lenguaje_control");
    let saberPython = document.querySelector('input[name="python_control"]:checked').value;
    let comentarios = document.getElementById("comentario_control").value;

    // Obtener los lenguajes seleccionados
    let lenguajesSeleccionados = "";
    for (let i = 0; i < lenguajes.length; i++) {
        if (lenguajes[i].checked) {
            lenguajesSeleccionados += lenguajes[i].value + " ";
        }
    }

    // Mostrar los valores en el div "Ejercicio3"
    let ejercicio3 = document.getElementById("Ejercicio3");
    ejercicio3.innerHTML = "Nombre: " + nombre + "<br>" +
        "Contraseña: " + contrasena + "<br>" +
        "Correo Electrónico: " + email + "<br>" +
        "URL: " + url + "<br>" +
        "Fecha: " + fecha + "<br>" +
        "Tiempo: " + tiempo + "<br>" +
        "Número: " + numero + "<br>" +
        "Teléfono: " + telefono + "<br>" +
        "Término de búsqueda: " + busqueda + "<br>" +
        "Color Favorito: " + color + "<br>" +
        "Sistema operativo: " + sistemaOperativo + "<br>" +
        "Lenguajes: " + lenguajesSeleccionados + "<br>" +
        "Sabes utilizar Python: " + saberPython + "<br>" +
        "Comentarios: " + comentarios;
}

/* Ejercicio 5. Crea un boton que te rellene con datos el formulario con el metodo anterior que más te guste.  */
function metodo4() {
    let nombre = document.getElementById("name_control").value;
    let contrasena = document.getElementById("pass_control").value;
    let email = document.getElementById("email_control").value;
    let url = document.getElementById("url_control").value;
    let fecha = document.getElementById("date_control").value;
    let tiempo = document.getElementById("time_control").value;
    let numero = document.getElementById("number_control").value;
    let telefono = document.getElementById("tel_control").value;
    let busqueda = document.getElementById("search_control").value;
    let color = document.getElementById("color_control").value;
    document.getElementById("sistema_control").selectedIndex = index;
    let saberPythonSi = document.getElementById("si").value;
    let comentarios = document.getElementById("comentario_control").value;

    // Asignar los valores recolectados a los campos del formulario
    document.getElementById("name_control").value = nombre;
    document.getElementById("pass_control").value = contrasena;
    document.getElementById("email_control").value = email;
    document.getElementById("url_control").value = url;
    document.getElementById("date_control").value = fecha;
    document.getElementById("time_control").value = tiempo;
    document.getElementById("number_control").value = numero;
    document.getElementById("tel_control").value = telefono;
    document.getElementById("search_control").value = busqueda;
    document.getElementById("color_control").value = color;
    document.getElementById("sistema_control").value = sistemaOperativo;
    if (saberPythonSi === 'si') {
        document.getElementById("si").checked = true;
        document.getElementById("no").checked = false;
    } else if (saberPythonSi === 'no') {
        document.getElementById("si").checked = false;
        document.getElementById("no").checked = true;
    }
    document.getElementById("comentario_control").value = comentarios;
}

/*Ejercicio 6. Haz una funcion que Empleando la propiedad elements[] haga un bucle que recorra el
formulario y compruebe que ninguno de los controles esta en blanco.
if (objFormulario.elements[i].value == "") { .... }*/
function metodo5() {
    var form = document.forms[0];
    var misElementos = form.elements;
    var cadena = "";

    for (var i = 0; i < misElementos.length; i++) {
        if (misElementos[i].value === "") {
            cadena += "El campo " + misElementos[i].name + " está vacío. <br>";
        }
    }

    if (cadena === "") {
        cadena = "Todos los campos están llenos.";
    }
    document.getElementById("Ejercicio6").innerHTML = cadena;
}