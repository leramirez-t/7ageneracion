const fs = require('fs')

fs.readFile('write.txt','utf8',(error,data)=>{

    if(error){

        console.error('Fallo la lectura del archivo', error);
        return
    }
    console.log('El archivo contiene : ', data)
})