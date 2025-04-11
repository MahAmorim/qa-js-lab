// Desafio 1 - Contando Múltiplos de 3
for (let i = 3; i <= 30; i += 3) {
    console.log(i);
  }
  
  // Desafio 2 - Exibindo uma Lista de Produtos
  let produtos = ["Arroz", "Feijão", "Carne", "Leite", "Ovos"];
  for (let i = 0; i < produtos.length; i++) {
    console.log(`${i + 1} - ${produtos[i]}`);
  }
  
  // Desafio 3 - Filtrando Números Menores que 50
  let numeros = [10, 25, 30, 45, 50, 60, 70, 80];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 50) {
      console.log(numeros[i]);
    }
  }
  
  // Desafio 4 - Simulando um Relógio
  for (let i = 10; i >= 0; i--) {
    if (i === 0) {
      console.log("Hora de começar!");
    } else {
      console.log(i);
    }
  }
  
  // Desafio 5 - Fatorial de um Número
  let numero = 5;
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(fatorial); // 120
  
  // Desafio 6 - Sorteando um Número Secreto
  let numeroSecreto;
  do {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto);
  } while (numeroSecreto !== 7);
  
  // Desafio 7 - Sequência de Fibonacci
  let a = 0, b = 1, fibonacci = [];
  while (b <= 100) {
    fibonacci.push(b);
    let temp = a + b;
    a = b;
    b = temp;
  }
  console.log(fibonacci);
  
  // Desafio 8 - Verificando Números Primos
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log(isPrime(7)); // true
  console.log(isPrime(10)); // false
  
  // Desafio 9 - Contando Letras em uma String
  let palavra = "banana";
  let letra = "a";
  let contador = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
      contador++;
    }
  }
  console.log(contador); // 3
  
  // Desafio 10 - Tabuada
  let numeroTabuada = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
  }
  
  // Desafio 11 - Invertendo um Número
  let numeroInvertido = 1234;
  let numeroString = numeroInvertido.toString();
  let numeroInvertidoStr = "";
  for (let i = numeroString.length - 1; i >= 0; i--) {
    numeroInvertidoStr += numeroString[i];
  }
  console.log(parseInt(numeroInvertidoStr)); // 4321
  
  // Desafio 12 - Soma dos Dígitos de um Número
  let numeroParaSomar = 1234;
  let soma = 0;
  while (numeroParaSomar > 0) {
    soma += numeroParaSomar % 10;
    numeroParaSomar = Math.floor(numeroParaSomar / 10);
  }
  console.log(soma); // 10