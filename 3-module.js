//commonjs, menganggap semua file adalah module
//module, mengenkapsulasi code sehingga hanya membagikan yang ingin dibagikan saja

// Opsi. import module dengan assign property objek
// const {Asma, arumi} = require('./4-variable')
// console.log(arumi, Asma);

//import module dengan assign ke variable
const sayHi = require('./5-utils')
const names = require('./4-names')
const set = require('./6-alternative-module')
require('./7-function-invoke')

//function invoke
sayHi('Laboge')
sayHi(names.arumi)
sayHi(names.Asma)


console.log( require('./5-utils') );
console.log(set)