//tener los valores de x y y, y compararlos
//el x es mayor que y, mostrar un mensaje que lo indique
//el x es menor que y, mostrar un mensaje que lo indique


//Algoritmo
//Obtener los valores de x y y
//preguntar si x es mayor que y
//Obtener la respuesta de la comparacion
//si x es mayor que y, mostrar el mensaje "x es mayor que y"
//si x no es mayor que y, mostrar "x es menor que y"

//debugger
var x=4;
var y=3;

if(x>y){

    console.log("El valor de x es mayor a y: "+(x>y));
    console.log('$(x) es mayor que $(y)')


}else if(x<y){

    console.log("El valor de y es mayor a x: "+(x<y));

}else{

    console.log("El valor de x es igual a y: "+(x=y));


}


//Ejercicio 2

//Multiplicar 2 valores, y verificar si el resultado de la multiplicacion es par o non
//si es par, indicarlo con un mensaje
//so es non, indicarlo con un mensaje
//

//Algoritmo
//
//Declarar variables x y y
//Asignar valores a las variables x y y
//Declarar variable z y asignarle el valor de la multiplicacion entre las variables x y y
//Declarar condicion en la cual se obtenga el modulo=1 de la variable z para comprobar que es un numero non
//Declarar condicion en la cual se obtenga el modulo=2 de la variable z para comprobar que es un numero par
//En caso de no cumplirse las otras dos condiciones mostrar un mensaje de error


var x = 5;
var y = 2;

var z = x*y;

console.log(z);

if(z%2===0){

    console.log("El resultado de la multiplicacion es par");


}else if(z%2===1){

    console.log("El resultado de la multiplicacion es non");

}else{

    console.log("El resultado es invalido");

}


var name = prompt("Ingresa tu nombre","nombre");

console.log(typeof name);


//EJERCICIO 3

//Recibir un numero de parte del usuario y calcular el area de un circulo 
//cuyo radio sea igual al numero proporcionado
//

//ALGORITMO
//
//CREA
//
//


var r = prompt("Ingresa radio de una circunferencia","radio");

var pi=3.1416;

var area = pi*(r*r);

console.log("Tu radio es : ", r , "\nEl area del circulo es:", area);



