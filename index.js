const http = require('http')

const server = http.createServer(function (req, res) {
    const path = req.url
    console.log("path is " + path);
    if (path === '/home') {
        res.write("<h1>Hello Home</h1>")
        res.end()
    } else {
        res.statusCode = 200;
        res.end("<h1>404 page not found</h1>")
    }
})

server.listen(3001, () => {
    console.log('start server port 3001');
})