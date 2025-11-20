var http = require('http')
var fs = require ('fs')

http.createServer(function(req,res){
   
    //using fs
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    //using readstream
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

server.listen(5000)