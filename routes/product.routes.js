const express = require('express')
const router = express.Router()
const path = require('path')
const indexPage = path.join(__dirname, "../templates/home.html")
const notFoundPage = path.join(__dirname, "../templates/404.html")

function homepage(req, res) {
    res.status(200)
    res.type('html')
    res.sendFile(indexPage)
}

function notFound(req, res) {
    res.status(404)
    res.type('html')
    res.sendFile(notFoundPage)
}

router.get("/", homepage)
router.get("/home", homepage)

router.get("/products", (req, res) => {
    res.send("Hello product")
})

router.get("/product/:id", (req, res) => {
    const productId = req.params.id
    if (productId) {
        // res.sendFile(path.join(__dirname, `../templates/product${productId}.html`))
        res.sendFile(path.join(__dirname, `../templates/${productId}`))
    }
})

router.get("*", notFound)

module.exports = router