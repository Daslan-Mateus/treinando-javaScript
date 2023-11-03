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