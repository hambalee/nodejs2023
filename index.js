const express = require('express')
const app = express()
const router = require('./routes/product.routes')

app.use(router)

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})