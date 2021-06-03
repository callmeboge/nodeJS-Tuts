const _ = require('lodash'); //useful to manipulate object, array , string , number etc data.

var multiDimensionArray = [0,[1,2],[3,[4,[5,[6,7],[8,9,[10,11,12,[13]]]]]]];
//convert to flattenArray
var flattenArray = _.flatten(multiDimensionArray)

console.log('Hai, my name is LaBoge')
console.log('flatten array here : ' + flattenArray)