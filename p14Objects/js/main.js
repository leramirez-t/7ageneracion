//crear una función que pida al usuario las propiedades nombre {name}, apellido{lastName}, edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos


let name = prompt("Nombre");
let lastName = prompt("lastNombre");
let age = prompt("Age");
let phone = prompt("Phone");

const userProperties = (name,lastName,age,phone) => {

var koderObject = {name,lastName,age,phone} 

    console.log(name,lastName,age,phone);

    
}
 
userProperties(name,lastName,phone,age);
