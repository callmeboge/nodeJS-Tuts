//Using NPM (Node Package Manager) terinstall bersama dengan nodeJS.
//NPM memanggil kode yang bisa digunakan kembali dari package/dependency.
//Package adalah sebuah folder yang mengandung kode javascript.

//Semua package/module/dependency di host pada website npmjs.com

// Alasan menggunakan node package manager 
//1. Dapat menggunakan module yang dibuat untuk beberapa project
//2. Dapat menggunakan module / maupun solusi yang dibuat oleh developer yang lain.
//3. Dapat membagikan module dibuat dengan komunitas.
//4. Module popular merupakan module yang telah mendapat review, download, ready to use, tested, security imporved 
//5. kontribusi untuk menuliskan solusi pada package yang terdapat bug didalamnya

//Contras
//6. Tidak Quality control pada npmjs.com host sehingga developer dapat mengupload module sesukanya.

//npm terinstall bersama dengan nodeJS sehingga dapat digunakan global
//how to check: in console / or integrated console typing 
// npm --version    - options to show version of npm installed in your machine

// Local Dependency - Hanya menginstall module/dependency untuk project-project tertentu
// command: npm i / install <packageName>

// Global dependency - Menginstall module/dependency untuk digunakanan pada semua project.
//command: npm install -g / global <packageName> or sudo npm install -g / global <packageName>

//Note: Cara initialisasi project npm / nodeJS package manager
//package.json file (important)(berisikan informasi penting mengenai package yang dibuat. salah satu informasi pentingnya adalah property dependency)
//property dependency berisikan module-module yang juga digunakan pada project yang sedang dibuat

//manual approach, dengan membuat file package.json pada directory akar/ top level directory
//npm init, Membuat property project dengan mode intereaktif jawab permintaan dari system.
// npm init -y, membuat property project dengan mode automasi yes sesuai dengan property bawaan system npm.

//note:
//menghapus dependency dengan menggunakan nuclear approach, menghapus directri dalam node_modules, delete package-lock.json
// npm uninstall package

package.json (berisikan informasi penting tentang package, salah satunya informasi dependency yang dibutuhkan pada package)

cara buat:
bisa dengan cara manual pada root repository
bisa dengan cara npm init (Kita akan diminta respon untuk verifikasi informasi serta menambahkan informasi)

bisa dengan cara npm init -y (mengisi informasi package secara otomatis - default) hasilnya sama dengan npm init

internal module/built-in module
menggunakan third party module/ module/package/dependency  pihak ketiga /external module:
`npm install -g <packageNaem> -S -D `
ket:
intall / i      - untuk menginstall module/dependency ke nodejs package
-g / global     - flag yang digunakan install package secara global sehingga package dapat digunakan pada project lainnya
<packageName>   - nama paket yang akan di install biasa pola nama diikuti @ untuk menentukan versi yang akan diinstall
-S / --save     - dependency yang di install disimpan sebagai dependency production yang akan digunakan saat build 'production
-D / --save-dev - dependency yang di isntall disimpan sebagai dependency development yang hanya akan digunakan pada phase developemnt

Note: Saat menginstall package dengan `npm install` maka ada beberapa package yang berdiri sendiri (Lodash) dan ada pula package yang membutuhkan dependency lainnya agar package tersebut dapat digunakan  (bootstrap => popperjs & jquer).
Setelah proses npm install selesai maka akan terbentuk folder/file package.json & package-lock.json (npm v5 to top) dan folder node_modules yang berisikan package yang diinstall



