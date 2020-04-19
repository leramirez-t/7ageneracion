const fs = require('fs')

const data = 'write.txt'

function readFilePromificada (data){

return new Promise((resolve,reject)=>{

    fs.readFile('write.txt','utf8',(error,data)=>{

        if(error){

            reject(error)
            return
        }
           resolve(data)

    })

})

}

async function FileReaded(){

    const documentState = await readFilePromificada(data)
    console.log('Archivo Leido')
}

FileReaded()
    .then(()=>{

        console.log('Archivo Leido Exitosamente')
    })

    .catch((error)=>{

        console.log('Error')

    })