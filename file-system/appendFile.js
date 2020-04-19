const fs = require('fs')

fs.appendFile('write.txt','\nAppend line',(error)=>{

    if(error){

        consol.error('Error al agregar el archivo')
        return
    }

   console.log('Archivo agregado')
})

