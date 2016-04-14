import express from 'express'

const router = new express.Router()

router.get('/api/get-stuff', (req, res) => {
  res.json({
    stuff: 'your stuff sir'
  })
})

export default router
