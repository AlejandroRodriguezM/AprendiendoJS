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
    <!-- Ejercicio1. Copia el siguiente ejemplo e insertalo en localhost junto
        con un archivo hola.txt (con el contenido que tu quieras) -->


    <script>
        function hacerpromesa() {
            fetch("hola.txt")
                .then(response => {
                    if (response.ok)
                        return response.text()
                    else
                        throw new Error(response.status);
                })
                .then(data => {
                    document.getElementById("cosas").innerHTML += "solicitada descarga <br>" + data;
                })
                .catch(err => {
                    console.error("ERROR: ", err.message)
                });
        }
    </script>

    <button onclick="hacerpromesa()"> boton </button>
    <div id="cosas"> </div>


    <!-- Ejercicio2. Copia el siguiente ejemplo e insertalo en localhost junto
        con un archivo hola.php (con el contenido que tu quieras) -->
    hola.php
    <?php
    $hoy = date('l jS \of F Y h:i:s A');
    //$ahora=print_r($hoy);
    echo (" hola hola hola " . $hoy);
    ?>
    ajax-php.htm

    <script>
        function hacerpromesa() {
            fetch("hola.php")
                .then(function(response) {
                    if (response.ok)
                        return response.text();
                    else
                        throw new Error(response.status);
                })
                .then(function(data) {
                    document.getElementById("cosas").innerHTML += "solicitada descarga <br>" + data;
                })
                .catch(err => {
                    console.error("ERROR: ", err.message)
                });
        }
    </script>

    <button onclick="hacerpromesa()"> boton </button>
    <div id="cosas"> </div>




    <!-- Ejercicio3. Crea este ejemplo -->
    <script>
        const hacerpromesa = async function(url) {
            const response = await fetch(url);
            if (!response.ok) throw new Error("WARN", response.status);
            const data = await response.text();
            return data;
        }

        function LlamarPromesa() {
            data = hacerpromesa('hola.php');
            document.getElementById("cosas").innerHTML += "solicitada descarga <br>" + data;
        }
    </script>

    <button onclick="LlamarPromesa()"> boton </button>
    <div id="cosas"> </div>
</body>

</html>
</body>

</html>