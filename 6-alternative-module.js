// if use default export maka semua export yang lain akan di ignore
const num = 93
module.exports = { num }

const person = {
    name: 'Arumi Nesya Amelia'
}

module.exports.ArumiPerson = person

module.exports.genks = ['genk1', 'genk2', 'genk3']