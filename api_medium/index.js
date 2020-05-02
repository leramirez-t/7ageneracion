const server = require('./src/server')
const db = require('./src/lib/db')

async function main(){
    await db.connect()
    console.log('-DB CONNECTED-')
    server.listen(8082, () => {
        console.log('SERVER IS RUNNING')
    })
}


    server.listen(8082,()=>{

          console.log('SERVER IS RUNNING')
    })