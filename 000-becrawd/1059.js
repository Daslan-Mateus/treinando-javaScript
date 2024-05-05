

var input = require('fs').readFileSync('stdin', 'utf8') // "fs" módulo que fornece operações de I/O (Input/Output).
var lines = input.split('\n');

let num = parseInt(lines.shift())

let N = 1

while(N <= 100) {
    if(N % 2 == 0 ) {
        console.log(N)
    }
 N++
}

