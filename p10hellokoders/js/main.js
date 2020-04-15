 //Práctica 1
//obtener el nombre completo del usuario e indicarle cuántos caracteres tiene su nombre
//Práctica 2
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo
//Práctica 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene

//PRACTICA 1
/*
var name = prompt("Ingresa tu nombre", "nombre");
var numbercharacters = name.length;

console.log("El numero de caracteres de tu nombre es : " + numbercharacters);
*/
//PRACTICA 2
/*
var name = prompt("Ingresa tu nombre", "nombre");
var numbercharacters = name.length;

console.log("El numero de caracteres de tu nombre es : " + numbercharacters);

var valuecharacters = parseInt(numbercharacters);

if(valuecharacters<15){

    console.log("TU NOMBRE ES MUY CORTO");

}else{

    console.log("TU NOMBRE ES LARGO");
}
*/
//PRACTICA 3

/*
var name = prompt("Ingresa tu nombre", "nombre");

var numbercharacters = name.length;

console.log("El numero de caracteres de tu nombre es : " + numbercharacters);

var vocalesname = name.match(/[aeiou]/g);

document.getElementById("demo").innerHTML=vocalesname;


var numbervocales = vocalesname.length;

console.log ("El numero de vocales en tu nombre es: " , numbervocales);
*/

//PRACTICA 4

/*

Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo

pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario

*/

/*----ALGORITMO(S)-----*/

/*

EJERCICIO 1
1.-DECLARAR METODO propmt SIN OLVIDAR COMO ATRIBUTOS LA PETICION PARA INGRESAR UNA PALABRA
2.-DECLARAR LA VARIABLE nameuser Y ASIGNARLE EL METODO prompt DECLARADO EN EL PASO ANTERIOR
3.-DECLARAR LA VARIABLE res Y ASIGNARLE EL VALOR DEL METODO slice (CON ARGUMENTOS 0,2) APLICADO A LA VARIABLE nameuser  
4.-DECLARAR LA VARIABLE invres Y ASIGNARLE EL VALOR DEL METODO slice (CON ARGUMENTOS -3,-1) APLICADO A LA VARIABLE nameuser
5.-DECLARAR EN EL DOCUMENTO index.html EL ELEMENTO <p> Y ASIGNARLE UN id EL CUAL NOMBRAREMOS COMO "demo"
6.-DECLARAR EL OBJETO document 
    6.1.-ASIGNARLE AL OBJETO document EL METODO getElementById CON UN ATRIBUTO "demo"
        6.1.1-ASIGNARLE AL METODO getElementById LA PROPIEDAD innerHTML
7.-ASIGNAR TODA LA DECLARACION DEL PUNTO ANTERIOR A LA VARIABLE res





*/

/*---------------------*/

var nameuser = prompt("Ingresa tu palabra","palabra");
var res = nameuser.slice(0,2);
var invres = nameuser.slice(-3,-1);

document.getElementById("demo").innerHTML = res;
document.getElementById("demo2").innerHTML = invres;

var mixletters =  res + invres;

console.log("TU NUEVA PALABRA ES : " + mixletters);

var number_mixletters = mixletters.length;

console.log("TU NUEVA PALABRA TIENE : " + number_mixletters + " LETRAS");

var element_mixletters = parseInt (number_mixletters);

if(nameuser<5){

    console.error("LA LONGITUD DE TU PALABRA ES MENOR A 5 CARACTERES");

}else{

    console.log("LA LONGITUD DE TU  PALABRA ES MAYOR A 5 CARACTERES");

}

var nameuser = prompt("Ingresa tu nombre","nombre");
var ageuser = prompt("Ingresa tu edad","edad");

console.log("Hola, soy " , nameuser , " y tengo " , ageuser);

var frase = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";

var countstudent = frase.match(/estudiante/g);

document.getElementById("demo").innerHTML=countstudent;

var numberstudent = countstudent.length;

console.log ("El numero de veces que se repite la palabra estudiante es: " , numberstudent);



var newfrase = frase.replace("estudiante","koder");

console.log("Tu nueva frase es: " , newfrase);


