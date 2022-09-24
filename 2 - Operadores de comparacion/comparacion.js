//Operadores de comparacion basicos.
//Existe el =, ==, === . Cada uno hace algo diferente.
//= le da valor a una variable
//== compara una variable con otra, si comparas un entero 45 y una cadena "45", dira que es igual aunque el sentido comun diga que no
//=== comparacion extricta, aqui la comparacion anterior daria como resultado "False"

let num = 45; // = Para dar valor

num == 45;
console.log(num);

num == "45";
console.log(num);

num === "45";
console.log(num);

num === 45;
console.log(num);

//Hay mas comparadores, como <(Menor que) >(mayor que) <= >=(igual o mayor que), !==(diferente igual que)