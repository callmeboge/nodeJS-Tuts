//fs --filesystem-- built-in module --sync

const { readFileSync, writeFileSync } = require('fs');

console.log('first')
const first = readFileSync('./content/first.txt', 'utf8');
console.log(first)

console.log('second')
const second = readFileSync('./content/second.txt', 'utf8');
console.log(second)

console.log('third')
writeFileSync('./content/sync-result.txt', `This is file is combinasi : ${first + second}`, {flag: 'a'})