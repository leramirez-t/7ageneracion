const fs = require('fs')



fs.rmdir('newfolder',(error)=>{

    if(error){

        console.error('No se pudo borrar la carpeta')
        return
    }
    console.log('Se borro la carpeta')

})