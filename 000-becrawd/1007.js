var input = require('fs').readFileSync('stdin', 'utf8') // "fs" módulo que fornece operações de I/O (Input/Output).
var lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())
let D = parseFloat(lines.shift())

let diferenca = (A * B - C * D)

console.log(`DIFERENCA = ${diferenca}`)