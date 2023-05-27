const express = require('express')
const app = express()
const path = require('path')
const indexPage = path.join(__dirname, "templates/index.html")

app.get("/", (req, res)=> {
    res.status(200)
    res.type('html')
    res.sendFile(indexPage)
})

app.get("/product", (req, res) => {
    res.send("Hello product")
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})