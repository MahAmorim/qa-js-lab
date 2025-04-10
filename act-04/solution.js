// Desafio 1 - Extraindo o Primeiro Nome
let nomeCompleto = "João da Silva";
let primeiroNome = nomeCompleto.split(" ")[0];
console.log(primeiroNome); // João

// Desafio 2 - Detectando a Palavra "QA"
let texto = "Estou aprendendo QA e JavaScript!";
if (texto.includes("QA")) {
  console.log("Este texto menciona QA!"); // Este texto menciona QA!
} else {
  console.log("Nenhuma referência a QA encontrada.");
}

// Desafio 3 - Corrigindo Formatação de Texto
let fraseDesorganizada = " ola MUNDO! ";
let fraseCorrigida = fraseDesorganizada.trim().toLowerCase();
console.log(fraseCorrigida.charAt(0).toUpperCase() + fraseCorrigida.slice(1)); // Ola mundo!

// Desafio 4 - Substituindo Termos em um Aviso
let aviso = "Atenção: problema detectado no sistema.";
let novoAviso = aviso.replace("problema", "atualização pendente");
console.log(novoAviso); // Atenção: atualização pendente detectada no sistema.

// Desafio 5 - Validando URLs
let url = "https://www.exemplo.com";
if (url.startsWith("https://") && url.endsWith(".com")) {
  console.log("URL válida!"); // URL válida!
} else {
  console.log("URL inválida!");
}

// Desafio 6 - Contando o Número de Palavras
let frase = "Eu amo programação";
let palavras = frase.split(" ");
console.log(palavras.length); // 4

// Desafio 7 - Encontrando a Palavra Mais Longa
let fraseLonga = "Eu amo aprender programação";
let palavrasLongas = fraseLonga.split(" ");
let palavraMaisLonga = palavrasLongas.reduce((a, b) => a.length > b.length ? a : b);
console.log(palavraMaisLonga); // programação

// Desafio 8 - Verificando Palíndromos
let palavra = "arara";
let ehPalindromo = palavra === palavra.split("").reverse().join("");
console.log(ehPalindromo); // true

// Desafio 9 - Formatando Número para Moeda
let numero = 1234.56;
let moeda = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(moeda); // R$ 1.234,56

// Desafio 10 - Juntando um Array de Palavras
let palavrasArray = ["Eu", "amo", "JavaScript"];
let fraseUnida = palavrasArray.join(" ");
console.log(fraseUnida); // Eu amo JavaScript

// Desafio 11 - Validando um Número de Telefone
let telefone = "(11) 98765-4321";
let regex = /^\(\d{2}\) \d{5}-\d{4}$/;
console.log(regex.test(telefone)); // true

// Desafio 12 - Invertendo uma String
let textoInvertido = "programação".split("").reverse().join("");
console.log(textoInvertido); // oãçargorp