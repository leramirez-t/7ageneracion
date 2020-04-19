const fs = require('fs')

const data = 'carpetaPrueba'

/*fs.readdir('carpetaPrueba',(error)=>{

    if(error){
        console.error
        return
    }
    console.log('Tu carpeta ha sido leida')
})*/

function readdirPromificada(data){

    return new Promise((resolve,reject)=>{

        fs.readdir(data,(error)=>{

            if(error){

                reject(error)
                return
            }
            resolve(data)
        })
    })
}

async function callReaddirProm(){

    const readFolder = await readdirPromificada(data)
    console.log('Se esta leyendo su carpeta')
}
callReaddirProm()
    .then(()=>{
        console.log('Se ha leido tu carpeta')
    })
    .catch((error)=>{
        console.log('Error al leer tu carpeta',error)
    })