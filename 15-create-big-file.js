const {writeFileSync} = require('fs')
for (let i = 0; i < 100000; i++){
    writeFileSync('./content/big.txt',`GET DATA ${i}\n`, {flag: 'a'})
}