// Desafio 1 - Classificando idades
let idade = 20;
if (idade < 13) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// Desafio 2 - Sistema de notas escolares
let nota = 85;
if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70) {
  console.log("Aprovado com B");
} else {
  console.log("Reprovado");
}

// Desafio 3 - Escolhendo um destino de viagem com switch
let destino = 1;
switch (destino) {
  case 1:
    console.log("Destino: Praia");
    break;
  case 2:
    console.log("Destino: Montanha");
    break;
  case 3:
    console.log("Destino: Campo");
    break;
  default:
    console.log("Destino desconhecido");
}

// Desafio 4 - Verificação de login
let senhaCorreta = "senha123";
let senhaDigitada = "senha123";
if (senhaCorreta === senhaDigitada) {
  console.log("Acesso permitido");
} else {
  console.log("Senha incorreta");
}

// Desafio 5 - Calculadora de Impostos
function calcularImposto(renda) {
  let imposto;
  
  if (renda < 2000) {
    imposto = renda * 0.05;
  } else if (renda >= 2000 && renda <= 5000) {
    imposto = renda * 0.1;
  } else {
    imposto = renda * 0.15;
  }

  return imposto;
}

console.log(calcularImposto(4500)); // Imposto a ser pago

// Desafio 6 - Estações do Ano
function estacaoDoAno(mes) {
  switch(mes) {
    case 12:
    case 1:
    case 2:
      console.log("Verão");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Outono");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Inverno");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Primavera");
      break;
    default:
      console.log("Mês inválido");
  }
}

estacaoDoAno(7); // Inverno

// Desafio 7 - Verificação de condições compostas
let idadeUsuario = 25;
let possuiCNH = true;

if (idadeUsuario >= 18 && possuiCNH) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir.");
}
