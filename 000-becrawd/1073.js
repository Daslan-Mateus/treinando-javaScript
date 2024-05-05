

var input = require('fs').readFileSync('stdin', 'utf8') // "fs" módulo que fornece operações de I/O (Input/Output).
var lines = input.split('\n');

let num = parseInt(lines.shift())

for (i = 1; i <= num ; i++ ) {
    if (i % 2 == 0) {
        console.log(`${i}^2 = ${Math.pow(i, 2)}`)
    }
}