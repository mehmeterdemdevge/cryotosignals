const express = require('express')
const app = express()

const { PORT} = require('./util/config')
const { connectToDatabase } = require('./util/db')

const signalsRouter = require('./controllers/signals')

app.use(express.json())

app.use('/api/signals', signalsRouter);
app.use('/api', (req,res)=>{
  res.send('iyi şanslar api')
})

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()