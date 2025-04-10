// Desafio 1 - Sensor de Temperatura
let temperatura = 30;
if (temperatura < 10) {
  console.log("Está muito frio! ❄️");
} else if (temperatura >= 10 && temperatura <= 25) {
  console.log("Temperatura agradável. 😊");
} else {
  console.log("Está muito quente! 🔥");
}

// Desafio 2 - Controle de Acesso
let estaCadastrado = true;
let codigo = "1234";

if (estaCadastrado && codigo === "1234") {
  console.log("Acesso permitido! ✅");
} else {
  console.log("Acesso não permitido. Tente novamente. ❌");
}

// Desafio 3 - Verificador de Placar
let pontosJogador = 100;
let pontosAdversario = 80;

if (pontosJogador > pontosAdversario) {
  console.log("Você venceu! 🏅");
} else if (pontosJogador < pontosAdversario) {
  console.log("Você perdeu. 😢");
} else {
  console.log("Empate! ⚖️");
}

// Desafio 4 - Lanchonete Digital
let escolha = 1;

switch (escolha) {
  case 1:
    console.log("Você escolheu um Hambúrguer");
    break;
  case 2:
    console.log("Você escolheu uma Pizza");
    break;
  case 3:
    console.log("Você escolheu um Sanduíche");
    break;
  default:
    console.log("Opção inválida");
}

// Desafio 5 - Alerta de Bateria
let nivelBateria = 50;

if (nivelBateria > 80) {
  console.log("Bateria cheia! ⚡");
} else if (nivelBateria >= 30) {
  console.log("Bateria moderada 🔋");
} else {
  console.log("Bateria fraca! Conecte o carregador! ⚠️");
}