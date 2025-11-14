const http = require ('http')

const server = http.createServer((req, res) => {
    console.log('req event');
    res.end('hai')    
})

server.listen(5000, ()=>{
    console.log('Server Listening on port: 5000...');
    
})