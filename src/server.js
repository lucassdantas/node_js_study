import http from 'node:http'
const users = []
const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/users'){
        return res.send('get')
    }
    if(method === 'POST' && url === '/users'){
        return res.send("post")
    }


    return res.send('nothing')
})

server.listen(3333)