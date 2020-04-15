const fs = require('fs')

fs.copyFile('write.txt','write_copy.txt','utf8',(error)=>{

    if(error){

        console.error('No se pudo copiar el archivo',error)
       return
    }
    console.log('se realizo copia de write.txt en write_copy')
})