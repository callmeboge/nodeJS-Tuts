// Benefit Menggunakan async await function
// 

//fetch is async
// fetch('http://127.0.0.1:5501/content/data/data.json')
//     .then( res => res.json() )
//     .then( data => console.log(data) )


console.log('Hello this chapter about async - await');
console.log('first');
console.log('second');

const getData = async () => {
    //async func always return promise. Jadi, bisa gunakan banyak promises
    const res = await fetch('content/data/data.json') //wait resolve then assign to res variable
    const result = await res.json() //wait resolve then assign to result variable

    return result
}

getData().then(data => {
    console.log(data)
})

console.log('third');
console.log('fourth');