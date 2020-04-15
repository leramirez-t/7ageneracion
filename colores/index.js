//String.prototype.sayHi = () => 'hola'

const colors = require('colors/safe')
const moment = require('moment')

const name = 'eduardo'
const time = moment().format('LTS')

//console.log(colors.green(name.sayHi()))

console.log(colors.green(name))

console.log(colors.rainbow(`Hola ${name} tu hora es ${time}`))

/*
'hola eduardo son las hora'
*/

