const express = require('express')
const medium = require('../usecases/medium')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/post', (request, response, next) => {
    console.log('middleware en GET/medium')
    next()
  
  }, async (request, response) => {
    try {
      const usecases = await medium.getAll()
      response.json({
        message: 'all medium users',
        data: {
          medium: allmediumpost
        }
      })
    } catch (error) {
      response.json({
        success: false,
        error: error.message
      })
    }
  })

  router.post('/post', auth, async (request, response) => {
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
  
      const errorsArray = Object.entries(error.errors).map(([key, value]) => {
          return { [key]: value.message }
        })
  
      response.json({
        success: false,
        error: error.message,
        error: error.errors,
        errorsArray
      })
    }
  })

  module.exports = router