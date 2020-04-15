const fs = require('fs')

/*fs.writeFile('write_1.txt','Realizando prueba de escritura','utf8',(error)=>{

    if(error){

        console.error('No se pudo escribir mensaje')
        return
    }

    console.log('Su mensaje ha sido escrito')

        fs.mkdir('newfolder',(error)=>{

            if(error){

                console.error('Su carpeta no fue creada')
                return
            }
            console.log('Su carpeta fue creada')
        })

        fs.readdir('newfolder',(error)=>{

            if(error){

                console.error('No se pudo leer la carpeta')
                return
            }
            console.log('La carpeta se leyo con exito')

        })
        fs.readFile('newfolder',(error)=>{

            if(error){

                console.error('El ')
                return
            }
            console.log('El archivo fue eliminado')
        })
})*/

let foldetToDelete = 'newfolder';

fs.readdir(foldetToDelete,'utf8',(error,files)=>{

    if(error){

        console.error('Tu archivo fue leido',error)
        return
    }
    console.log(files)

    files.forEach((item)=>{

        console.log(item)
        let pathFile = `${foldetToDelete}/${item}`
        console.log(pathFile)
        fs.unlink(pathFile,(error)=>{

            if(error){

                console.error(error)
                return
            }
            console.log(item)
        })
        
    })
    fs.rmdir(foldetToDelete,(error)=>{

        if(error){
            console.error(error)
            return
        }
            console.log('se borro tu directorio')
    })
    
})



