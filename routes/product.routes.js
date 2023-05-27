const express = require('express')
const router = express.Router()
const path = require('path')
const indexPage = path.join(__dirname, "../templates/index.html")

router.get("/", (req, res) => {
    res.status(200)
    res.type('html')
    res.sendFile(indexPage)
})

router.get("/products", (req, res) => {
    res.send("Hello product")
})

router.get("/product/:id", (req, res) => {
    const productId = req.params.id
    if(productId == 1) {
        res.sendFile(path.join(__dirname, "../templates/product1.html"))
    }
})

module.exports = router