const express = require('express')
const app = express()

const { PORT} = require('./util/config')
const { connectToDatabase } = require('./util/db')

const signalsRouter = require('./controllers/signals')

app.use(express.json())



app.use('/', (req,res)=>{
  res.send('iyi şanslar')
})
app.use('/api/signals', signalsRouter);

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()