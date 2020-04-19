const fs = require('fs')

const data = 'write.txt'

/*fs.appendFile('write.txt','\nAgregando Texto','utf8',(error)=>{

    if(error){
        console.error('Error al ingresar texto',error)
        return
    }
    console.log('Ingresando Informacion Exitosamente')

})*/

function appendPromificada(data){

    fs.appendFile(data,'\nAgregando Texto','utf8',(error)=>{

        return new Promise ((resolve,reject)=>{

            if(error){
                reject(error)
                return
            }
            resolve(data)
        })
        
    })
}

async function fileEdit(){

    const loadingChange = await appendPromificada(data)
    console.log('El archivo ha sido editado')
}
fileEdit()
    .then(()=>{
        console.log('Texto Ingresado, favor de revisar archivo editado')
    })
    .catch((error)=>{

        console.log('Error al editar archivo',error)

    })

