 /*var bementors=[

    "Brenda Gonzalez",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
    
 ]


array.forEach(element => {
    
}); 

*/



//Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado
//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"


/*-------ALGORITMO------------- */

//1.-DECLARAR FUNCION basicOperation Y ASIGNARLE SUS PARAMETROS 
//    (operation,val1,val2)
//2.-DELCARAR FUNCION FLECHA POSTERIORMENTE DE HABER DECLARADO 
//    LA FUNCION DEL PUNTO ANTERIOR.
//  2.1.-ABRIR LLAVES ({) 
//3.- DECLARAR CONDICION if
//  3.1.- DECLARAR PARAMETROS DE CONDICION if (operation == "suma")
//  3.2.- ABRIR LLAVES DE DE CONDICION if ({) 
//4.-DECLARAR OBJETO console Y UTILIZAR EL METODO log
//  4.1.-ASIGNAR COMO PARAMETRO LA CADENA DE TEXTO PARA EL METODO log
//      INDICANDO QUE LA OPERACION ES UNA SUMA
//5.-DECLARAR OBJETO console Y UTILIZAR EL METODO log
//6.-ASIGNAR COMO PARAMETRO LA CADENA DE TEXTO PARA EL METODO log
//      INDICANDO QUE EL RESULTADO DE LA OPERACION Y CONCATENAR LA SUMA
//      DE val1+val2
//7.-DECLARAR UN else if
//  7.1.-ASIGNAR PARAMETROS (REPETIR PASO 3, SERA PARA OPERACION resta)      
//8.-REPETIR TODOS LOS PASOS DE DECLARACION DEL 4 AL 6 PARA LA OPERACION
//9.- VOLVER A REALIZAR LOS MISMOS PASOS PERO PARA LAS OPERACIONES 
//        divicion y multiplicacion
//10.-DECLARAR else
//  10.1.-ABRIR LLAVES ({)
//  10.2.-DECLARAR OBJETO console Y UTILIZAR EL METODO log
//  10.3.-ASIGNAR COMO PARAMETRO LA CADENA DE TEXTO PARA EL METODO log
//      INDICANDO QUE LA OPERACION NO ESTA REGISTRADA
//  10.4.-CERRAR LLAVE DE ELSE
/*-------------------------------*/
 

const basicOperation= (operation, val1,val2) =>{


    if(operation=="suma"){

        console.log("Tu operacion es una suma");
        console.log("Tu resultado es: ", val1+val2);

    }else if(operation=="resta"){

        console.log("Tu operacion es una resta");
        console.log("Tu resultado es: ", val1-val2);

    }else if(operation=="multi"){

        console.log("Tu operacion es una multiplicacion");
        console.log("Tu resultado es: ", val1*val2);


    }else if(operation=="divi"){

        console.log("Tu operacion es una multicion");
        console.log("Tu resultado es: ", val1/val2);

    }else{

        console.log("Tu opcion no esta registrada");
       
    }

    
    
}

