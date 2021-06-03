//path built-in module
// load spesified method from path module
// const { ... , ... } = require('path')

const path = require('path') //full load module

// separator
const separator = path.sep
console.log( separator )

//filepath - get normal path of file join in the string
const filePath = path.join('/content', 'sub-content', 'test.txt');
console.log(filePath); //output: /content/sub-content/test.txt

//basename - get last portion of given path
const basename = path.basename(filePath)
console.log(basename);

//resolve - get info of absolute path
const absolutePath = path.resolve(__dirname, 'content', 'sub-content', 'test.txt')
console.log(absolutePath); ///home/alihdaya/nodejsTuts/content/sub-content/test.txt
