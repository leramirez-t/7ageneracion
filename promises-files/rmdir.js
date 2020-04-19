const fs = require('fs')

const data = 'carpetaPrueba'

/*fs.rmdir('carpetaPrueba',(error)=>{

    if(error){
        console.error(error)
        return
    }
    console.log('Tu directorio ha sido eliminado')
})*/

function rmdirPromificada(data){

    return new Promise((resolve,reject)=>{

        fs.rmdir(data,(error)=>{

            reject(error)
            return
        })
        resolve(data)
    })
}

async function callRmdirProm(){

    const deleteDirectory = await rmdirPromificada(data)
    console.log('Su directorio esta siendo eliminado')
}
callRmdirProm()
    .then(()=>{
        console.log('Su directorio fue eliminado')
    })
    .catch((error)=>{
        console.log('Error al eliminar directorio seleccionado',error)
    })