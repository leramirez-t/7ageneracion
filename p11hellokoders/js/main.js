 //pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

debugger;

var numkoders = prompt("Ingresa el numero de Koders a registrar","# Koders");

console.log("La cantidad de Koders registrados es : " , numkoders);

var intnumkoders = parseInt(numkoders);

var arraykoders = [];


if(intnumkoders!=0){


    for(var i = 0; i<intnumkoders; i++ ){


        var namekoders = prompt ("Ingresa el nombre de los Koders registrados ","Koders");
        
        arraykoders.push(namekoders);

        
    }

    arraykoders.forEach(function(item){

        var firstname = item.split(" ",1);
        console.log(firstname);

    });

}else{

    console.log("Se requiere al menos 1 nombre");

}


