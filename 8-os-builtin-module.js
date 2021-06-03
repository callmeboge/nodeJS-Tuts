// Built-in Modules NodeJS
// OS module        - get info about current os
// path module      - get info about path of file / dir
// fs module        - get info about filesystem
// http module      - create web server httpd

// load specific method of os module
// const { ... , ... } = require('os')
const os = require('os') // full import

//load user info of os
const userInfo = os.userInfo()
console.log( userInfo )

//load uptime method
console.log(`System uptime is ${os.uptime()} seconds`)

//currentOS
const currentOS = {
    name: os.type(),
    arsitek: os.arch(),
    platform: os.platform(),
    release: os.release(),
    totalMemory : os.totalmem(),
    freeMemoery: os.freemem(),

}

console.log( currentOS )