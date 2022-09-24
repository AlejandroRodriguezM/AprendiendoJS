//const = a es una variable que no se puede cambiar, se entiende como si fuese el numero pi, es inmutable..

const PI = 3.14159; //Para buena practica, todas las constantes deben de ser en mayuscula
let radios;
let circunferencia;

radius = window.prompt("Introduce el radio del circulo: ")
radius = Number(radius);

//Si se modifica el valor de una constante, el resultado sera que se nos devolvera un error por consola.

circunferencia = 2 * pi * radius;

console.log("La circunferencia es: ",circunferencia);