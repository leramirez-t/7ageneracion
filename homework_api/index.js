const express = require('express')
const fs = require('fs')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))
const server = express()
server.use(express.json())

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


server.post('/mentores',(request,response)=>{
    const newKoder ={

        name:request.body.name,
        generation: request.body.generation
    }

    kodemia.koders.push(newKoder),

    response.json({

        message:"new mentor",
        data: {
            koders: newKoder
        }
    })

})

server.listen(8081, ()=>{

    console.log('Server is running')
})