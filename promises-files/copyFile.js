const fs = require('fs')

const data = 'write.txt'
const data2 = 'copy.txt'

/*fs.copyFile('write.txt','copy.txt',(error)=>{

    if(error){

        console.error('No se pudo copiar el archivo',error)
        return
    }
    console.log('Archivo copiado')
})*/

function copyPromificada(data){

    return new Promise((resolve,reject)=>{

        fs.copyFile(data,data2,(error)=>{

            if(error){
                reject(error)
                return
            }
            resolve(data2)

        })

    })
}

async function fileCopy (){

    const fileCreated = await copyPromificada(data)
    console.log('El archivo ha sido copiado')

}

fileCopy()
    .then(()=>{

        console.log('Archivo Copiado Exitosamente')

    })
    .catch((error)=>{

        console.log('Error al copiar el archivo',error)
    })