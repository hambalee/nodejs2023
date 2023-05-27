const http = require('http')

const server = http.createServer(function (req, res) {
    res.write("Hello odds node js naja")
    res.end()
})

server.listen(3001)