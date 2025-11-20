const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved user ${name}, id: ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
customEmitter.emit('response','hayat',25)

