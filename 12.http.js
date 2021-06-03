//http built-in module merupakan module/package/dependency yang digunakan untuk setup web server dengan javascript. Penggunaan tingkat lanjut digunakan bersama dengan express.js (tetap sama), dan untuk membangun restful API yang kompleks

// method 
// 1. res.write() method digunakan untuk menampilkan output pada html document output stream.
// 2. res.end() method digunakan untuk menyelesaikan proses request dengan mengembalikan nilai. Argumen sebagai nilai respon yang dikembalikan server.

//Note:
// Harus menggunakan flow control if () ... else if() untuk contoh kasus seperti dibawah. 
// Apabila tidak maka error akan terjadi, 'Err stream Write After END' (Work on MXLINUX 19.x)

const http = require('http');

const server = http.createServer((req, res) => {
    if( req.url === '/'){
        res.end('<h1>Hi, iam Index Page</h1>');
    } else if( req.url === '/about'){
        res.end('Ini adalah halaman about')
    }
    else {
        res.end(`<div><h3>Ops Halaman yang ada tuju tidak tersedia</h3><p>Sed veritatis aut ex non est molestiae nostrum impedit. Sunt quo aut quod porro impedit maiores.</p><a href="/">Back To Home</a></div>`)   
    }
})

//listen web server in port
server.listen(9393)