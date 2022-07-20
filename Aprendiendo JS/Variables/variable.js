let texto1 = "Esto es una prueba"; //Esto es una variable tipo string

let numero = 23; //Esto es una variable tipo numerica

let estado = false;

let indefinido; //Las variables sin valor, se veran en pantalla como "undefined"

let num1 = 20;
let num2 = 10;
let num3 = num1 - num2; //Variable que guarda el calculo de 2 variables de tipo numerico

console.log(texto1); //Variable que se muestra en la consola del navegador

console.log(numero); //Variable que se muestra en la consola del navegador

console.log(estado); //Variable que se muestra en la consola del navegador

console.log(indefinido); //Variable que se muestra en la consola del navegador

console.log(num3); //Variable que se muestra en la consola del navegador

document.getElementById("p1").innerHTML = "hello " + texto1; //Cambios en el .html que permite cambiar valores por las variables que queramos

document.getElementById("p2").innerHTML = "Tengo " + num3 + " años"; //Cambios en el .html que permite cambiar valores por las variables que queramos

window.alert("Esto realmente es una prueba"); //Muestra una alerta en pantalla con el texto o variable que queramos.