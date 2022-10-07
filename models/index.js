const Signal = require('./signal')
const Scalpsignal= require('./scalpsignal')

Signal.sync({ alter: true })
Scalpsignal.sync({alter:true})

module.exports = {
  Scalpsignal,
  Signal
}