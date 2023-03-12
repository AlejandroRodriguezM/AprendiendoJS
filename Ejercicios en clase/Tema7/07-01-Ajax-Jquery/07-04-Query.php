<!DOCTYPE html>
<html lang="en">
<!-- Por Alejandro Rodriguez Mena -->
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <!-- 1) Ejecuta el ejemplo propuesto en un servidor para comprobar que hace -->
  <h1>Ejercicio 1</h1>
  Nombre: <input type="text" name="nombre" value="test" id="nombre"><br>
  correo: <input type="text" name="correo" value="test" id="correo"><br>
  <button id="mi_boton">Enviar datos</button>
  <div id="cosas"> Mensaje: </div> <br>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $('#mi_boton').click(function(event) {
      var nombre = $('#nombre').val();
      var correo = $('#correo').val();

      $.ajax({
        type: "POST",
        url: "ajax-fetch-json-servidor.php",
        data: {
          nombre: nombre,
          correo: correo
        },
        dataType: 'json',
        success: function(data) {
          document.getElementById("cosas").innerHTML += "Datos Recibidos <br>" + data;
        },
        error: function() {
          alert('error fatal');
        }
      });
    });
  </script>
  <?PHP
  $nombre = strrev($_POST['nombre']);
  $correo = strrev($_POST['correo']);
  $data = array($correo, $nombre);
  echo json_encode($data);
  ?>


  <p>El código captura el nombre y el correo electrónico de un usuario y luego los envía a un
    archivo PHP llamado "ajax-fetch-json-servidor.php" utilizando la técnica de Ajax.
    El archivo PHP procesará los datos y devolverá una respuesta en formato JSON.
    Cuando se hace clic en el botón "Enviar datos", se activa una función de JavaScript
    que recupera los valores del nombre y correo electrónico del formulario y los envía
    al servidor utilizando la función $.ajax() de jQuery. Si el servidor procesa la solicitud
    correctamente, la función success() se ejecuta y muestra un mensaje en la pantalla con los
    datos recibidos.

    El archivo PHP "ajax-fetch-json-servidor.php" debe estar en el servidor web y tener
    el código necesario para procesar los datos enviados desde el formulario web y devolver
    una respuesta en formato JSON. Además, la biblioteca de jQuery debe estar disponible en
    el servidor web para que el código de JavaScript funcione correctamente.</p>


  <!-- 2) Modifica el ejercicio 1 anterior para hacer una autentificacion usuario password
(los passwords los puedes tener en un array php) -->
  <h1>Ejercicio 2</h1>
  Nombre: <input type="text" name="nombre" value="test" id="nombre"><br>
  correo: <input type="text" name="correo" value="test" id="correo"><br>
  <button id="mi_boton">Enviar datos</button>
  <div id="cosas"> Mensaje: </div> <br>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $('#mi_boton').click(function(event) {
      var nombre = $('#nombre').val();
      var correo = $('#correo').val();

      $.ajax({
        type: "POST",
        url: "ajax-fetch-json-servidor.php",
        data: {
          nombre: nombre,
          correo: correo
        },
        dataType: 'json',
        success: function(data) {
          document.getElementById("cosas").innerHTML += "Datos Recibidos <br>" + data;
        },
        error: function() {
          alert('error fatal');
        }
      });
    });
  </script>
  <?php
  $usuarios = array(
    'usuario1' => 'password1',
    'usuario2' => 'password2',
    'usuario3' => 'password3'
  );

  $nombre = $_POST['nombre'];
  $contrasena = $_POST['contrasena'];

  $autenticado = false;

  if (isset($usuarios[$nombre]) && $usuarios[$nombre] == $contrasena) {
    $autenticado = true;
  }

  $response = array('autenticado' => $autenticado);
  echo json_encode($response);
  ?>




  <!-- 3) Modifica el ejercicio anterior para crear un cookie de autentificacion usando js o php -->
  Nombre: <input type="text" name="nombre" id="nombre"><br>
  <h1>Ejercicio 3</h1>
  Contraseña: <input type="password" name="contrasena" id="contrasena"><br>
  <button id="mi_boton">Iniciar sesión</button>
  <div id="cosas"> Mensaje: </div> <br>
  <script>
    $('#mi_boton').click(function(event) {
      var nombre = $('#nombre').val();
      var contrasena = $('#contrasena').val();

      $.ajax({
        type: "POST",
        url: "autenticacion.php",
        data: {
          nombre: nombre,
          contrasena: contrasena
        },
        dataType: 'json',
        success: function(data) {
          if (data.autenticado) {
            document.cookie = "autenticado=true";
            document.getElementById("cosas").innerHTML += "Bienvenido " + nombre;
          } else {
            document.getElementById("cosas").innerHTML += "Usuario o contraseña incorrectos";
          }
        },
        error: function() {
          alert('Error al procesar la solicitud');
        }
      });
    });
  </script>
  <?php
  $usuarios = array(
    'usuario1' => 'password1',
    'usuario2' => 'password2',
    'usuario3' => 'password3'
  );

  $nombre = $_POST['nombre'];
  $contrasena = $_POST['contrasena'];

  $autenticado = false;

  if (isset($usuarios[$nombre]) && $usuarios[$nombre] == $contrasena) {
    $autenticado = true;
  }

  $response = array('autenticado' => $autenticado);
  echo json_encode($response);

  if ($autenticado) {
    setcookie('autenticado', 'true', time() + (86400 * 30), '/'); // La cookie expira en 30 días
  }
  ?>





  <!-- 4) Modifica el ejercicio 1 para hacer una busqueda sobre un termino y que php nos
devuelva el contenido de un array en esa posicion.
1:arbol; 2:kiwi; 3:delta; 4:fuego; 5:mango; 6:rombo;  7:pista;  8:Delfín;  9:zapato;  10:cámara-->
  <h1>Ejercicio 4</h1>
  <label for="termino">Término de búsqueda:</label>
  <input type="text" id="termino" name="termino">
  <button id="buscar">Buscar</button>
  <div id="resultado"></div>
  <script>
    $('#buscar').click(function(event) {
      var termino = $('#termino').val();

      $.ajax({
        type: "POST",
        url: "e4.php",
        data: {
          termino: termino
        },
        dataType: 'json',
        success: function(data) {
          document.getElementById("resultado").innerHTML = data;
        },
        error: function() {
          alert('Error al procesar la solicitud');
        }
      });
    });
  </script>

  <?php
  $termino = $_POST['termino'];
  $datos = array(
    1 => 'arbol',
    2 => 'kiwi',
    3 => 'delta',
    4 => 'fuego',
    5 => 'mango',
    6 => 'rombo',
    7 => 'pista',
    8 => 'Delfín',
    9 => 'zapato',
    10 => 'cámara'
  );
  $resultado = array('resultado' => false);
  if (isset($datos[$termino])) {
    $resultado['resultado'] = true;
    $resultado['valor'] = $datos[$termino];
  }
  echo json_encode($resultado);
  ?>



  <!-- 5) Modifica el ejercicio 1 para recibir los datos de un usuario nombre apellidos edad mail
direccion telefono y que los guarde en un fichero json en el servidor. -->
  <h1>Ejercicio 5</h1>
  Nombre: <input type="text" name="nombre" id="nombre"><br>
  Apellidos: <input type="text" name="apellidos" id="apellidos"><br>
  Edad: <input type="number" name="edad" id="edad"><br>
  Correo: <input type="text" name="correo" id="correo"><br>
  Dirección: <input type="text" name="direccion" id="direccion"><br>
  Teléfono: <input type="text" name="telefono" id="telefono"><br>
  <button id="mi_boton">Enviar datos</button>
  <div id="cosas"> Mensaje: </div> <br>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $('#mi_boton').click(function(event) {
      var nombre = $('#nombre').val();
      var apellidos = $('#apellidos').val();
      var edad = $('#edad').val();
      var correo = $('#correo').val();
      var direccion = $('#direccion').val();
      var telefono = $('#telefono').val();

      $.ajax({
        type: "POST",
        url: "guardar-datos.php",
        data: {
          nombre: nombre,
          apellidos: apellidos,
          edad: edad,
          correo: correo,
          direccion: direccion,
          telefono: telefono
        },
        dataType: 'json',
        success: function(data) {
          document.getElementById("cosas").innerHTML += "Datos guardados en el servidor: " + JSON.stringify(data);
        },
        error: function() {
          alert('Error fatal');
        }
      });
    });
  </script>
  <?php
  // Obtener los datos del POST
  $nombre = $_POST['nombre'];
  $apellidos = $_POST['apellidos'];
  $edad = $_POST['edad'];
  $correo = $_POST['correo'];
  $direccion = $_POST['direccion'];
  $telefono = $_POST['telefono'];

  // Crear un arreglo con los datos
  $datos = array(
    'nombre' => $nombre,
    'apellidos' => $apellidos,
    'edad' => $edad,
    'correo' => $correo,
    'direccion' => $direccion,
    'telefono' => $telefono
  );

  // Leer el archivo JSON existente
  $datos_json = file_get_contents('datos.json');
  $datos_existente = json_decode($datos_json, true);

  // Agregar los nuevos datos al arreglo existente
  $datos_existente[] = $datos;

  // Escribir el arreglo actualizado en el archivo JSON
  file_put_contents('datos.json', json_encode($datos_existente));

  // Devolver los datos actualizados al cliente
  echo json_encode($datos_existente);
  ?>





  <!-- 6) Modifica el ejercicio 1 para realizar el siguiente ejercicio con dos consultas ajax -->
  <!-- 1) Al iniciar el htm debes hacer una consulta para tomar todos los nombres de un array
y meterlos en un control select.-->
  <h1>Ejercicio 6.1</h1>


  <label for="nombres">Seleccione un nombre:</label>
  <select id="nombres"></select>

  <script>
    // Definimos el array con los nombres
    const nombres = ["Lucía", "Sofía", "Martina", "María", "Julia", "Paula", "Valeria", "Emma", "Daniela", "Carla", "Alba", "Noa"];

    // Buscamos el control select en el DOM
    const selectNombres = document.getElementById("nombres");

    // Iteramos sobre el array de nombres para agregar cada uno al control select
    nombres.forEach((nombre) => {
      const option = document.createElement("option");
      option.value = nombre;
      option.text = nombre;
      selectNombres.appendChild(option);
    });
  </script>



  <!-- 2) Al pulsar un boton se deben buscar las notas de la persona del select y escribirlos
debajo. -->
  <h1>Ejercicio 6.2</h1>
  <label for="nombres">Seleccione un nombre:</label>
  <select id="nombres"></select>
  <button id="buscar">Buscar</button>
  <div id="resultado"></div>

  <script>
    // Definimos el array con los nombres
    const nombres1 = ["Lucía", "Sofía", "Martina", "María", "Julia", "Paula", "Valeria", "Emma", "Daniela", "Carla", "Alba", "Noa"];

    // Buscamos el control select en el DOM
    const selectnombres1 = document.getElementById("nombres");

    // Iteramos sobre el array de nombres para agregar cada uno al control select
    nombres1.forEach((nombre) => {
      const option = document.createElement("option");
      option.value = nombre;
      option.text = nombre;
      selectNombres.appendChild(option);
    });

    // Definimos el array con las notas
    const notas = [{
        nombre: "Lucía",
        nota: 7
      },
      {
        nombre: "Sofía",
        nota: 8
      },
      {
        nombre: "Martina",
        nota: 9
      },
      {
        nombre: "María",
        nota: 6
      },
      {
        nombre: "Julia",
        nota: 5
      },
      {
        nombre: "Paula",
        nota: 4
      },
      {
        nombre: "Valeria",
        nota: 3
      },
      {
        nombre: "Emma",
        nota: 2
      },
      {
        nombre: "Daniela",
        nota: 1
      },
      {
        nombre: "Carla",
        nota: 10
      },
      {
        nombre: "Alba",
        nota: 9
      },
      {
        nombre: "Noa",
        nota: 8
      },
    ];

    // Buscamos el botón en el DOM
    const botonBuscar = document.getElementById("buscar");

    // Buscamos el div donde se mostrarán los resultados
    const divResultado = document.getElementById("resultado");

    // Agregamos un evento click al botón
    botonBuscar.addEventListener("click", () => {
      // Obtenemos el nombre seleccionado en el select
      const nombreSeleccionado = selectnombres1.value;

      // Buscamos la nota del nombre seleccionado
      const nota = notas.find((nota) => nota.nombre === nombreSeleccionado);

      // Mostramos la nota en el div
      divResultado
        ?
        (divResultado.innerHTML = `La nota de ${nombreSeleccionado} es ${nota.nota}`) :
        null;
    });
  </script>

</body>

</html>