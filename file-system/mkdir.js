const fs = require('fs')



fs.mkdir('newfolder',(error)=>{

    if(error){
        console.error('No se pudo crear la carpeta')
        return
    }
    console.log('La carpeta newfolder fue creada')


})