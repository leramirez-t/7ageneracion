const express = require('express')
const medium = require('../usecases/medium')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/post', async (request, response) => {
  try {
    const usecases = await medium.getAll()
    response.json({
      message: 'all medium users',
      data: {
        medium: usecases
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/post', async (request, response) => {
  try {
    const newmediumpost = await medium.create(request.body)
    response.json({
      success: true,
      message: 'mediumpost created',
      data: {
        medium: newmediumpost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
