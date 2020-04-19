const http = require('http')

const server = http.createServer((request,response)=>{

   response.writeHead(200, {

        'Content-Type': 'text/html'
    })

response.write('HOLA MUNDO DESDE NODE HTTP')
response.end()

})

  /*  console.log('METHOD:',request.method)
    console.log('URL',request.url)

    if(request.url === '/hola'){

        response.write('<h1> HOLA MUNDO DESDE NODE HTPP </h1>')

    }

    if(request.url === '/adios'){

        response.write('<h1> ADIOS DESDE NODE HTPP </h1>')

    }
    
    response.end()

})*/

server.listen(8081) 