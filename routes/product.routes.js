const express = require('express')
const router = express.Router()
const path = require('path')
const indexPage = path.join(__dirname, "../templates/index.html")

router.get("/", (req, res) => {
    res.status(200)
    res.type('html')
    res.sendFile(indexPage)
})

router.get("/product", (req, res) => {
    res.send("Hello product")
})

module.exports = router