const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.resolve('dist')))

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
})