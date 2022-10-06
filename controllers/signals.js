const router = require('express').Router()

const { Signal } = require('../models')

router.get('/', async (req, res) => {
  const signals = await Signal.findAll({ order: [['date', 'DESC']]})
  res.json({status:"ok",signals:signals})
})

router.post('/', async (req, res) => {
  let obj = {...req.body, date:Date.now()}
  try {
    const signal = await Signal.create(obj)
    res.status(201).json(obj)
  } catch(error) {
    return res.status(400).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const signal = await Signal.findByPk(req.params.id)
  if (signal) {
    res.json(signal)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', async (req, res) => {
  const signal = await Signal.findByPk(req.params.id)
  if (signal) {
    await signal.destroy()
  }
  res.status(204).end()
})

router.put('/:id', async (req, res) => {
  const signal = await Signal.findByPk(req.params.id)
  if (signal) {
    //note.important = req.body.important
    //await note.save()
    res.json({status:"ok",signal:signal})
  } else {
    res.status(404).end()
  }
})

module.exports = router