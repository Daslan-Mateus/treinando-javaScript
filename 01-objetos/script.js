//Crie um objeto com os seus dados pessoais
const dadosPessoais = {
    nome: 'Daslan',
    sobrenome: 'Mesquita',
    idade: 24,
    cpf: '00011122233'

}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }


// Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;

  // Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
  const cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'Late'
        } else {
            return 'cachorro mudo'
        }
    }

  }
// Crie um objeto chamado carro com propriedades como marca, modelo e ano. Acesse as propriedades do objeto carro e imprima seus valores.
const carro2 = {
    marca: 'ford',
    modelo: 'fusion',
    ano: 2022,
}

// Crie um objeto chamado retângulo com propriedades largura e altura. Em seguida, crie um método que calcule a área do retângulo.
const retangulo = {
    largura: 4,
    altura: 5,
    area() {
        return this.largura * this.altura
    }
}
// Crie um objeto chamado aluno com propriedades como nome, notas e um método que calcule a média das notas.
const media = {
    nota1: 7.0,
    nota2: 8.0,
    nota3: 9.0,
    calculaMedia(){
        return (this.nota1 + this.nota2 + this.nota3)/3
    }
}

/* Sistema de Reservas de Hotéis
Crie um objeto Hotel que tenha propriedades como nome, localização, classificação, 
e um array de quartosDisponíveis. Implemente métodos para reservar um quarto, verificar a 
disponibilidade e listar as reservas existentes. */
const hotel = {
    nome: 'Daslan Mateus Alves de Mesquita',
    localizacao: 'Jaraguá do sul -SC',
    classificacao: 'Livre',
    quartosDisponiveis: [1, 2, 3, 425, 987],
}

 

/*

Na teoria dos números, um número abundante ou excessivo é aquele para o qual a soma de seus divisores próprios é maior que o próprio número. O inteiro 12 é o primeiro número abundante. Seus divisores próprios são 1, 2, 3, 4 e 6 para um total de 16 . O valor pelo qual a soma excede o número é a abundância . O número 12 tem abundância de 4 , por exemplo. Outros números abundantes iniciais são: 12, 18, 20, 24, 30, 36, 40, 42, 48, 54 etc. Existem infinitos números ímpares e pares abundantes . Como você já deve ter adivinhado, neste kata sua função pegará um número inteiro positivo h como entrada de intervalo e retornará um array/lista aninhado que conterá as seguintes informações-

O maior número ímpar ou par abundante disponível nesse intervalo
É abundância
Exemplos
Alguns exemplos nunca fazem mal a ninguém, certo???

abundant(15)  = [[12], [4]]
abundant(19)  = [[18], [3]]
abundant(100) = [[100], [17]]
abundant(999) = [[996], [360]]
Pontas
O problema envolve alguns números aleatórios bem grandes. Portanto, tente otimizar o desempenho do seu código tanto quanto possível. E sim, o argumento de entrada sempre será inteiro positivo. Portanto, não há necessidade de verificar lá.

Boa sorte!

const Test = require('@codewars/test-compat');

describe("Example Tests", function(){
  it("Simple Cases", function(){
    Test.assertSimilar(abundant(15),[[12],[4]],'Incorrect answer');
    Test.assertSimilar(abundant(19),[[18],[3]],'Incorrect answer');
    Test.assertSimilar(abundant(100),[[100],[17]],'Incorrect answer');
    Test.assertSimilar(abundant(999),[[996],[360]],'Incorrect answer');
  });
});


*/