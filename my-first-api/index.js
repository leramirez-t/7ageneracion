const express = require('express')
const fs = require('fs')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))
const server = express()
server.use(express.json())//middleware, es una funcion que va enmedio, esta entre punto final (endpoint) y punto inicial

// endpoint :  la combinacion de un metodo y una ruta
// metodo : metodos HTTP - get,post, delete, put , patch
// ruta : strings que denotan recursos en nuestro servidor

server.get('/', (request,response)=>{

    response.json({

        message:'My first API is running'
    })
})

server.get('/kodemia',(req,res)=>{

    res.json({

        message:'All the koders',
        data: {
                kodemia: kodemia.koders
              }
    })
})


/*server.post('/koders',(request,response)=>{
    const newKoder ={

        name:request.body.name,
        generation: request.body.generation
    }

    kodemia.koders.push(newKoder),

    response.json({

        message:"new koder",
        data: {
            koders: newKoder
        }
    })

})*/


server.post('/koders',(request,response)=>{

    const newKoder = {

        name: request.body.name,
        generation: request.body.generation
    }
    kodemia.koders.push(newKoder)

    response.json({

        message: 'new koder added',
        data: {
            koder: newKoder
        }
    })
})

server.get('/kodersID/:index', (request, response) =>{
    const{index} = request.params
    response.json({
        message: `koder ${index}`,
        data: {
            koders: kodemia.koders[index-1]
        }
    })
})

server.listen(8081, ()=>{

    console.log('Server is running')
})