// Crie uma função para verificar se um valor é Truthy
function ehVerdadeiro(valor) {
    return Boolean(valor)
}

// Crie uma função matemática que retorne o perímetro de um quadrado // lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return lado = lado + lado + lado + lado
}

// Crie uma função que retorne o seu nome completo // ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return nome +" " + sobrenome
}
// Crie uma função que verifica se um número é par
function ehParImpar(num){
    if(num % 2 === 0) {
            return 'Par'
    } else  {
        return 'Impar'
    }
} 
// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipo(valor){
    return typeof(valor)
}

// addEventListener é uma função nativa do JavaScript // o primeiro parâmetro é o evento que ocorre e o segundo o Callback 
// utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log("Daslan")
})
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    var faltaPaises;
    return `Ainda faltam ${faltaPaises = totalPaises - paisesVisitados} países para visitar`;
  }

  function jaVisitei(paisesVisitados) {
    var totalPaises = 200;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }

  precisoVisitar(20);
  jaVisitei(20);