const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/about')
        res.end('The about page')
    else if (req.url === '/contact')
        res.end('The contact page')
    else if (req.url === '/')
        res.end('The home page')
    else {
        res.writeHead(404)
        res.end('page not found')
    }
})
server.listen(3000)