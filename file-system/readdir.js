const fs = require('fs')



fs.readdir('newfolder',(error)=>{

    if(error){
        console.error('No se pudo leer el directorio')
        return
    }
    console.log('Se leyo el directorio correctamente')
})