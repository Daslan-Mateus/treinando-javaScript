// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let campeao = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

/*for (var i = 0; i < campeao.length; i ++) {
    console.log(`O Brasil foi campeão noo ano de ${campeao[i]}`)
}*/

campeao.forEach(function(ano){
    console.log(`O Brasil foi campeão no ano de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
    if (frutas[i] === "Pera") {
        console.log(frutas[i])
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var fruta = frutas[frutas.length -1]
console.log(fruta)
