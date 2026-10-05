require('dotenv').config()
const http = require('http')
const { homeView, acercaView, notFoundView } = require('./views')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    if (!res) return

    const url = (req.url || '/').split('?')[0]
    const currentPort = process.env.PORT || 4000

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(homeView(currentPort))
    } else if (url === '/acerca') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(acercaView(currentPort))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(notFoundView())
    }
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 4000

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})
