// Desafio 1 - Invertendo um Texto
function inverterTexto(texto) {
    return texto.split('').reverse().join('');
  }
  console.log(inverterTexto("Olá Mundo!"));  // "!odnuM álO"
  
  // Desafio 2 - Verificando Múltiplos de 5
  function verificarMultiploDeCinco(numero) {
    return numero % 5 === 0;
  }
  console.log(verificarMultiploDeCinco(25));  // true
  console.log(verificarMultiploDeCinco(7));   // false
  
  // Desafio 3 - Encontrando o Maior Número em um Array
  function maiorNumero(array) {
    return Math.max(...array);
  }
  console.log(maiorNumero([10, 20, 5, 40, 15]));  // 40
  
  // Desafio 4 - Verificando a Presença de uma Letra em um Nome
  function verificarLetra(nome) {
    return nome.toLowerCase().includes('a');
  }
  console.log(verificarLetra("João"));  // true
  console.log(verificarLetra("Carlos")); // false
  
  // Desafio 5 - Formatando um CPF
  function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  console.log(formatarCPF("12345678901"));  // "123.456.789-01"
  
  // Desafio 6 - Contando Vogais em uma Palavra
  function contarVogais(palavra) {
    let contador = 0;
    palavra = palavra.toLowerCase();
    for (let letra of palavra) {
      if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
        contador++;
      }
    }
    return contador;
  }
  console.log(contarVogais("JavaScript"));  // 3
  