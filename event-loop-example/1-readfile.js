const { readFile } = require ('fs')

console.log('started first task');
readFile('./content/first.txt','utf8', (err,result) => {
    if (err) {
        console.log(err)
        console.log('gagal menyelesaikan task');        
        return
    }
    console.log(result);
    console.log('completed the first task')    
})
console.log('next task')