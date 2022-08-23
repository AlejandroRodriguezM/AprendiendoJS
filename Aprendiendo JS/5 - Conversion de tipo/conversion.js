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

console.log("Tu edad es ",edad," años, feliz cumpleaños!")