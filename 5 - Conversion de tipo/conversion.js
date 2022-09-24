//Conversion de tipos sirve para convertir diferentes tipos de datos a otro tipo de dato, por ejemplo String a number.

//La lectura de datos se hace teniendo en cuenta que la edad es un String.
/*
let edad = window.prompt("Que edad tienes?: ");

edad += 1;

console.log("Tu edad es ",edad," feliz cumpleaños!")
*/
//Convertir el String edad a number seria:

let edad = window.prompt("Que edad tienes?: ");

console.log(typeof edad); //Tipo String

edad = Number(edad); //Se convierte la variable edad a Number

console.log(typeof edad); //Convertido a tipo Number

edad += 1;

console.log("Tu edad es ",edad," años, feliz cumpleaños!");

//Cambio de tipo en varias variables
let x;
let x2;
let y;
let z;
let z2;

x = Number("3.14"); //De String a Number
x2 = Number("pizza"); //De String a Number, devolver NaN ya que 'pizza' no es un numero.
y = String(3.14); //De Number a String
z = Boolean(""); //Resultado 'false' ya que esta vacio
z2 = Boolean(" "); //Resultado 'True' ya que contiene datos(Aunque sea un espacio)

console.log(x, typeof x);
console.log(x2, typeof x2);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(z2, typeof z2);