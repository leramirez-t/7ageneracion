const fs = require('fs')

const data = 'carpetaPrueba'

/*fs.mkdir('carpetaPrueba',(error)=>{

    if(error){
        console.error('Error al crear nueva carpeta')
        return
    }
    console.log('Se ha creado nueva carpeta')
})*/

function mkdirPromificada(data){


    fs.mkdir(data,(error)=>{

        return new Promise((resolve,reject)=>{

            if(error){
                reject(error)
                return
            }
            resolve(data)
        })

    })
}

async function callMkdirProm(){

    const newFolder = await mkdirPromificada(data)
    console.log('Se esta creando tu carpeta')
}

callMkdirProm()
    .then(()=>{
        console.log('Tu carpeta ha sido creada')
    })
    .catch((error)=>{
        console.log('Error al crear tu carpeta',error)
    })