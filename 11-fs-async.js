//fs --filesystem-- built-in module --async

const { readFile, writeFile } = require('fs');

console.log('first')
readFile('./content/first.txt','utf8', (err, result) => {

    if (err) {
        console.log(err)
        return;
        
    }

    const first = result
    console.log(first)

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return ;
            
        }
    
        const second = result
        console.log(second);


        writeFile('./content/async-result.txt',`Here is gabungan sebagai async : ${first + second}`, {flag: 'a'}, (err) => {
            if (err) {
                console.log(err)
                return ;
            }

            console.log('success create async file');
        })
        
    } )


});

console.log('second')
console.log('third')