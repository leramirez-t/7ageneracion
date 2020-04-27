const mongoose = require('mongoose')

const user = 'luisramirez'
const password = 'redx2741'
const host = '7mageneracion-urzyo.mongodb.net'
const bdName = 'kodemia'

const url = `mongodb+srv://${user}:${password}@${host}/${bdName}?retryWrites=true&w=majority`

const koderSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2
    },
    generation:{
        type: Number,
        required:true,
        min: 1
    },
    gender:{
        type:String,
        enum:['m','f','n']
    },
    isActive: {

        type: Boolean,
        required: true
    },
    date: {

        type: Date,
        required: true,
        default: new Date()
    },
    extra: {
        type: Object
    },
    courses: {
        type: [Object],
        unique: true
    }

})

mongoose.connect( url ,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>{
        console.log('SE CONECTO, TODO CHIDO')
        const koder = mongoose.model('koders', koderSchema)
        //QUERY
        /*koder.find({generation:7})
            .then((koders) =>{

                console.log('koders:',koders)
            })
            .catch((error)=>{

                console.error('ERROR EN LA CONSULTA',error)
            })*/

            //CREACION DE UN DOC
        /*const newKoder = new koder({ name : 'nuevo koder', generation: 7, gender: 'n'})
        
        newKoder.save()
            .then(()=>{
                console.log('new koder creado')
            })
            .catch(error=>{
                console.log('error al crear',error)
            })*/ 
            
        const newKoder = koder.create({name:'shortcurt', generation:7,gender:'n'})
            .then(()=>console.log('new koder creado'))
            .catch((error)=>console.error('error al crear:',error))    

    })
    .catch((error)=>{

        console.log('ERROR EN CONNECT:',error)

    })

