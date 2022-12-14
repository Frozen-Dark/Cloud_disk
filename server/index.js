require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const authRouter = require('./routes/auth.routes')
const PORT = process.env.PORT || 6000
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


const app = express()

app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate() // Подключаеться к бд
        await sequelize.sync() // Сверяет состояние бд с схемой данных
        app.listen(PORT, () => console.log(`Сервер запущен на порте: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()