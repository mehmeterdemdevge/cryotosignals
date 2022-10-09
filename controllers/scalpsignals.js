const router = require('express').Router()

const { Scalpsignal } = require('../models')

router.get('/', async (req, res) => {
  const {premium} = req.query;
  const signals = await Scalpsignal.findAll({ 
    limit: 25,
    where:{
      premium:premium
    },

    order: [['date', 'DESC']]})
  res.json({status:"ok",signals:signals})
})

router.post('/', async (req, res) => {
  if (
    !body.assetType||
    !body.premium ||
    !body.entryPoint ||
    !body.stopLoss|
    !body.takeProfit
    

  ) {
    return res.status(400).send({msg:"Bad request someting missing"});
  }
  let obj = {...req.body, date:Date.now()}
  try {
    const signal = await Scalpsignal.create(obj)
    res.status(201).json(obj)
  } catch(error) {
    return res.status(400).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const signal = await Scalpsignal.findByPk(req.params.id)
  if (signal) {
    res.json(signal)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', async (req, res) => {
  const signal = await Scalpsignal.findByPk(req.params.id)
  if (signal) {
    await signal.destroy()
  }
  res.status(204).end()
})

router.put('/:id', async (req, res) => {
  const signal = await Scalpsignal.findByPk(req.params.id)
  if (signal) {
    //note.important = req.body.important
    //await note.save()
    res.json({status:"ok",signal:signal})
  } else {
    res.status(404).end()
  }
})

module.exports = router