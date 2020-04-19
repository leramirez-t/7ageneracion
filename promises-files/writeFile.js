const fs = require('fs')

const data = 'write.txt'

function writePromificada(data){

    return new Promise((resolve,reject)=>{

        fs.writeFile(data,'Hola desde node','utf8',(error)=>{

            if(error){
              
                reject(error)
                return
            }
            
            resolve(data)
        })

    })

}

async function createFile(){

    const FileCreated = await writePromificada (data)
    console.log('Archivo Creado') 

}
createFile()

    .then(()=>{

        console.log('Archivo Finalizado')
    })

    .catch((error)=>{

        console.error('Error'.error)
    })

