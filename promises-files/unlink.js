const fs = require('fs')

const data = 'copy.txt'

fs.unlink('copy.txt',(error)=>{

    if(error){
        console.error('El archivo no pudo ser eliminado',error)
        return
    }
    console.log(data)
})

function unlinkPromificada(data){

    fs.unlink(data,(error)=>{

        return new Promise((resolve,reject)=>{

            if(error){
                reject(error)
                return
            }
            resolve(data)
        })

    })
}

async function callUnlinkProm(){

    const deleteFile = await unlinkPromificada(data)
    console.log('Su archivo esta siendo eliminado')
}

callUnlinkProm()
    .then(()=>{
        console.log('Su archivo fue eliminado')
    })
    .catch((error)=>{
        console.log('Error al borrar archivo',error)
    })