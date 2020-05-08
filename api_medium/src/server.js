const express = require('express')
const mediumRouter = require('./routes/medium')
const authRouter = require('./routes/auth')
const authMiddleware = require('./middlewares/auth')
const app = express()

app.use(express.json())

app.use('/medium', mediumRouter)
app.use('/auth', authRouter)


app.get('/medium', async (request, response) => {
const allusermedium = await mediumRouter.getAll()
    response.json({
        message: 'All usersmedium',
        data: {
            medium: allusermedium
        }
    })
})

module.exports = app