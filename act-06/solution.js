// Desafio 1 - Criando e Modificando um Array
let animais = ["Cachorro", "Gato", "Coelho"];
animais.push("Pássaro");  // Adiciona no final
animais.shift();  // Remove o primeiro
console.log(animais);  // ["Gato", "Coelho", "Pássaro"]

// Desafio 2 - Exibindo Itens de um Array
let frutas = ["Maçã", "Pera", "Uva", "Banana"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Desafio 3 - Extraindo Elementos com slice()
let numeros = [100, 200, 300, 400, 500];
let extrair = numeros.slice(0, 3);  // Extrai os três primeiros números
console.log(extrair);  // [100, 200, 300]

// Desafio 4 - Removendo e Substituindo Elementos
let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
dias.splice(3, 1, "Dia Livre");  // Substitui "Quarta-feira" por "Dia Livre"
console.log(dias);  // ["Domingo", "Segunda-feira", "Terça-feira", "Dia Livre", "Quinta-feira", "Sexta-feira", "Sábado"]


// Desafio 5 - Convertendo um Array em Texto
let cores = ["Azul", "Verde", "Vermelho"];
let coresTexto = cores.join(", ");  // Transforma em string separada por vírgulas
console.log(coresTexto);  // "Azul, Verde, Vermelho"

// Desafio 6 - Invertendo um Array
let arrayInvertido = [1, 2, 3, 4, 5];
let invertido = [];
for (let i = arrayInvertido.length - 1; i >= 0; i--) {
  invertido.push(arrayInvertido[i]);
}
console.log(invertido);  // [5, 4, 3, 2, 1]

// Desafio 7 - Filtrando Números Pares
let numerosArray = [1, 2, 3, 4, 5, 6];
let pares = numerosArray.filter(num => num % 2 === 0);
console.log(pares);  // [2, 4, 6]

// Desafio 8 - Encontrando o Maior Número em um Array
let maiorNumero = [10, 20, 5, 40, 15].reduce((max, num) => num > max ? num : max, -Infinity);
console.log(maiorNumero);  // 40

// Desafio 9 - Calculando a Média de Números
let numerosParaMedia = [10, 20, 30, 40];
let media = numerosParaMedia.reduce((total, num) => total + num, 0) / numerosParaMedia.length;
console.log(media);  // 25

// Desafio 10 - Verificando se um Array é Igual a Outro
function arraysIguais(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(arraysIguais([1, 2, 3], [1, 2, 3]));  // true
console.log(arraysIguais([1, 2, 3], [1, 2, 4]));  // false

// Desafio 11 - Agrupando Elementos de um Array em Objetos
let pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "José", idade: 55 }
];

let agrupado = pessoas.reduce((acc, pessoa) => {
  let faixaEtaria = pessoa.idade <= 18 ? "0-18" : pessoa.idade <= 30 ? "19-30" : pessoa.idade <= 50 ? "31-50" : "51+";
  if (!acc[faixaEtaria]) acc[faixaEtaria] = [];
  acc[faixaEtaria].push(pessoa);
  return acc;
}, {});

console.log(agrupado);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Desafio 12 - Verificando se um Item Existe
let comidas = ["Pizza", "Hamburguer", "Sushi"];
rl.question("Digite uma comida: ", (comidaProcurada) => {
  if (comidas.includes(comidaProcurada)) {
    console.log("Comida encontrada!");
  } else {
    console.log("Comida não encontrada.");
  }

  // Fechando a interface readline após a interação
  rl.close(); // Isso faz o programa continuar após a interação
});