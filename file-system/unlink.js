const fs = require('fs')

fs.unlink('write.txt',(error)=>{

    if(error){

        console.error('Error al Eliminar el archivo')
        return
    }
    console.log('Archivo Eliminado')
})