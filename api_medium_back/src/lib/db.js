const mongoose = require('mongoose')

const DB_USER = 'luisramirez'
const DB_PASSWORD = 'redx2741'
const DB_HOST = '7mageneracion-urzyo.mongodb.net'
const DB_NAME = 'medium'

// https://google.com
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect(){
    return mongoose.connect( url, { useNewUrlParser:true,useUnifiedTopology:true } )
}

module.exports = {

    connect
}