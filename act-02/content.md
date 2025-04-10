# Conteúdo de Ensino: Estruturas Condicionais em JavaScript

## O que são Estruturas Condicionais?

As **estruturas condicionais** permitem que seu programa escolha entre diferentes caminhos com base em valores e regras. Elas são fundamentais para que o código tome decisões dinâmicas.

Em JavaScript, as estruturas condicionais permitem que você execute diferentes blocos de código com base em certas condições. As principais estruturas condicionais são:

1.  **`if` e `else`**: Para executar código se uma condição for verdadeira ou falsa.
2.  **`if` e `else if`**: Para testar múltiplas condições em sequência.
3.  **`switch`**: Para comparar um valor com várias possibilidades (cases).
4.  **Operador Ternário**: Uma forma concisa de escrever uma estrutura `if/else` simples.


---

## `if` e `else`

Se a condição dentro dos parênteses do `if` for avaliada como `true`, o código dentro do bloco `{}` do `if` é executado. Caso contrário, o código dentro do bloco `{}` do `else` (se houver) é executado.

```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

## `if` e `else if`

Quando você precisa verificar mais de uma condição, pode usar `else if`. Isso permite testar diferentes possibilidades em ordem. O primeiro bloco de código cuja condição for verdadeira será executado. Se nenhuma das condições for verdadeira, o bloco `else` (se presente) será executado.

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70) {
  console.log("Aprovado com B");
} else {
  console.log("Reprovado");
}
```
Se `nota >= 90`, o código dentro do primeiro `if` é executado.
Se a primeira condição for falsa, o `else if` verifica a próxima condição (`nota >= 70`).
Se nenhuma condição for verdadeira, o `else` é executado.

## `switch`

O `switch` é ideal quando você tem várias opções para um valor específico. Ele compara um valor contra diferentes `case` e executa o bloco de código correspondente.

```javascript
let cor = "vermelho";

switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "amarelo":
    console.log("Atenção!");
    break;
  case "verde":
    console.log("Pode seguir!");
    break;
  default:
    console.log("Cor inválida!");
}
```

O `switch` verifica o valor de `cor` e, quando encontra um `case` correspondente, executa o código dentro daquele bloco.
O `break` impede que o código continue a verificar os outros `case` após encontrar um valor correspondente. Sem o `break`, a execução "cairia" para o próximo `case`.
O `default` é como um `else`, sendo executado caso nenhum dos `case` seja atendido.

## Operador Ternário

O operador ternário é uma maneira compacta de escrever uma estrutura `if` simples. Sua sintaxe é:

```javascript
condição ? valor_se_verdadeiro : valor_se_falso;
```
```javascript
let idade = 18;
let podeVotar = idade >= 18 ? "Pode votar" : "Não pode votar";
console.log(podeVotar); // Saída: Pode votar
```
O operador ternário avalia a condição (`idade >= 18`) e retorna o `valor_se_verdadeiro` (à esquerda do `:`) se a condição for `true`. Caso contrário, retorna o `valor_se_falso` (à direita do `:`).

**Dicas:**

* Use o operador ternário quando você tiver apenas uma linha de código para cada condição. Se o código dentro de cada condição for mais complexo, prefira usar `if` e `else`.
* O operador ternário é ideal para condições simples e diretas, geralmente para atribuir um valor a uma variável.

## Exemplos Práticos

**Verificando se um número é positivo ou negativo:**

```javascript
let numero = -5;
let resultado = numero >= 0 ? "Positivo" : "Negativo";
console.log(resultado); // Saída: Negativo
```

**Sistema de Categorias de um Jogo:**

```javascript
let pontos = 1200;

if (pontos >= 1000) {
  console.log("Categoria A"); // Saída: Categoria A
} else if (pontos >= 500) {
  console.log("Categoria B");
} else {
  console.log("Categoria C");
}
```


**Usando `switch` para escolher um plano de assinatura:**

```javascript
let plano = "Premium";

switch (plano) {
  case "Basic":
    console.log("Plano Básico");
    break;
  case "Premium":
    console.log("Plano Premium"); // Saída: Plano Premium
    break;
  case "VIP":
    console.log("Plano VIP");
    break;
  default:
    console.log("Plano desconhecido");
}
```

**Verificando se um usuário pode acessar um site:**

```javascript
let idade = 16;
let acesso = idade >= 18 ? "Acesso permitido" : "Acesso negado";
console.log(acesso); // Saída: Acesso negado
```

## Dicas Finais:

* `if` e `else` são ótimos para situações simples com duas alternativas.
* `else if` é útil quando você precisa verificar múltiplas condições mutuamente exclusivas.
* Use `switch` quando estiver lidando com múltiplas opções para uma única variável, tornando o código mais legível em comparação com vários `if/else if`.
* O operador ternário é compacto e útil para expressões condicionais simples em uma única linha.

Agora você tem uma base sólida para entender e aplicar estruturas condicionais em JavaScript! Pratique com diferentes exemplos para solidificar seu conhecimento.