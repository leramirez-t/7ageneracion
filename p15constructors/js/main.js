var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]


const createKoder = (dataMatrix)=>{

    dataMatrix.array.forEach(element => {
        
    });

}

var koder = {

    name:"Israel",
    lastName:"Salinas Martínez",
    phone:"5543788096",
    birtDate:"27-09-1989"

}


//getShortenedData => DCM-ddmmaa
//output "DCM-141195" 

kodersMatrix.forEach((arrayPersonalInfo)=>{

    console.log(kodersMatrix);



})


/*

var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]
//función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"
const evaluateArray = (arrayToEvaluate) => {
    if( Array.isArray(arrayToEvaluate) ) {
        console.log("la variable si es un array")
        alert(`Tu variable sí es un array y contiene ${arrayToEvaluate.length} items`)
    } else {
        alert("la variable no es un array")
    }
}
//función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con la primer palabra en uppercase
const alphabeticSort = (arrayToSort) => {
    let sortedArray = arrayToSort.sort()
    return sortedArray
}
const firstWordToUppercase = (arrayToTransform) => {
    let upperCasedArray = [];
    arrayToTransform.forEach((item)=>{
        let firstWord = item.split(" ")[0];
        let secondWord = item.split(" ")[1]
        let uppercased = firstWord.toUpperCase();
        upperCasedArray.push(`${uppercased} ${secondWord}`)
    })
    return upperCasedArray
}
const transformArray = (arrayToTransform) => {
    let sortedArray = alphabeticSort(arrayToTransform)
    let upperCasedArray = firstWordToUppercase(sortedArray)
    console.log(upperCasedArray)
}
//función que reciba un array, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
const printSomeChars = (arrayToPrint, charLimit) => {
    arrayToPrint.forEach((item) => {
        let shortenedString = item.substring(0,charLimit)
        console.log(shortenedString)
    })
}
//función que reciba una cantidad (número), este número será la cantidad de veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales
const getNumberOfKoders = () => {
    let numberOfKoders = parseInt(prompt("cuántos koders deseas registrar?"))
    return numberOfKoders
}
const getKodersNames = ()=>{
    let i;
    let kodersArray = [];
    let kodersToRegister = getNumberOfKoders();
    console.log(kodersToRegister)
    if(isNaN(kodersToRegister)){
        alert("por favor ingresa un número");
        getKodersNames();
    } else {
        for (i=0; i < kodersToRegister; i++){
            let koderName = prompt("Ingresa el nombre del koder");
            console.log(koderName)
            kodersArray.push(koderName)
        }
    }
    console.log(kodersArray)
}





*/