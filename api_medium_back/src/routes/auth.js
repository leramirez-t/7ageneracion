const express = require('express')

const medium = require('../usecases/medium')

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await medium.login(email, password)

    response.json({
        succes: true,
        message: 'loged in',
        data: {
            token
        }
    })

  } catch (error) {
        response.status(400),
        response.json({
            succes: false,
            error: error.message
        })
  }
})

module.exports = router
