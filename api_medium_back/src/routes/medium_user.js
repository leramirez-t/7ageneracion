const express = require('express')
const medium = require('../usecases/medium_user')
const auth = require('../middlewares')

const router = express.Router()


router.post('/users/signup', auth, async (request, response) => {
    try {
      const newmediumuser = await medium.signup(request.body)
      response.json({
        success: true,
        message: 'user registered',
        data: {
          koder: newmediumuser
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