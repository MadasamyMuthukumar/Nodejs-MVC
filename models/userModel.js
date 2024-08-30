const fs = require('fs')
const path = require('path')
exports.getUser = (email) => {

    const bufferUsers = fs.readFileSync(path.join(__dirname, '..', 'data', 'user.json'))
    const user = JSON.parse(bufferUsers) //converting buffer data to json object

    const filteredUser = user.filter((user) => user.email === email)
    if (filteredUser.length > 0) {
        return filteredUser[0]
    }
    return null
}