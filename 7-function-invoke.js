// function invoke
// data dapat tereksport secara otomatis tanpa module.export dan invoke function walaupun tanpa assign ke variable. Saat proses require() maka file terbungkus function require dan check semua kode. Jika, terdapat function invoke maka fungsi tersebut akan dijalankan dan ditampilkan pada module yang import.

const num1=9, num2=1;
function tambahNilai(){
    console.log(`Nilai hasil tambah adalah ${num1 + num2}`) 
}

//otomatis invoke/show in other module that import this module
tambahNilai()