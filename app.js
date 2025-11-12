const _ =require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

const user = {name: 'Danu', address: {city: 'Surabaya'}}
const copyUser = _.cloneDeep(user)

copyUser.address.city = 'Bandung'
copyUser.name = 'Hayat'
console.log(user);
console.log(copyUser);
console.log(user.name, copyUser.address.city)



