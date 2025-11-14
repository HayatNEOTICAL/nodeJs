const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if (req.url === '/about'){
        //blocking code
        for(let i = 0; i<1000; i = i+10){
            for(let j = 0; j<1000; j++){
                console.log(`${i} & ${j}`);
            }
        }
        res.end('About Page')
    }
    else res.end(`<h1> Oops can't reach this website </h1>
        <a href="/">back home </>`)
})

server.listen(5000,()=>{
    console.log('server is listening on port: 5000...');
    
})