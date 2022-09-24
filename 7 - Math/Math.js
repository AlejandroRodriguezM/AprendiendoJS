//Math es un objeto intrinsico que provee funcionalidades basicas matematicas y constantes.

let x = 3.14;
let x1 = 3.14;
let x2 = 3.14;
let x3 = 3.14;
let x4 = 3.14;
let x5 = -3.14;
const PI = Math.PI; //Variable que contiene el valor de PI, metodo de Math
let max; //Variable donde guardaremos el numero mayor.
let min; //Variable donde guardaremos el numero menor.

x = Math.round(x); //Lo redondea, sea a la minima o maxima segun sus decimales
console.log("Redonde: ",x);
x1 = Math.floor(x1); //Lo redondea a la minima 3.14 = 3
console.log("Redondeo a la minima: ",x1);
x2 = Math.ceil(x2); //Redondea a la maxima 3.99 = 4
console.log("Redondeo a la maxima: ",x2);
x3 = Math.pow(x3, 2); //Calcula la variable elevado al numero que queramos 
console.log("Numero elevado a 2: ",x3);
x4 = Math.sqrt(x4); //Raiz cuadrada
console.log("Raiz cuadrada: ",x4);
x5 = Math.abs(x5); //Devuelve el valor absoluto, si fuese -3.14, se volveria 3.14
console.log("Numero absoluto: ",x5);
console.log("numero Pi: ",PI);

let y = 5;
let z = 9;

max = Math.max(x, y, z); //Comprueba cual es el numero mayor de las diferentes variables.
console.log("Maximo: ",max); //Devolvera el 9

min = Math.min(x,y,z);
console.log("Minimo: ",min);



console.log(x);