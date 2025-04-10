# Conteúdo de Ensino: Valores Booleanos

## O que são Valores Booleanos?

Em JavaScript, os **valores booleanos** são um dos tipos de dados mais simples e fundamentais. Eles só podem ter dois valores possíveis: **`true`** (verdadeiro) e **`false`** (falso).

Booleanos são usados principalmente para tomar decisões, realizar comparações e controlar o fluxo do programa.

### Exemplo:
```javascript
let estaChovendo = true;
let temCarregador = false;

## Comparações e Operadores Relacionais

**Operadores Relacionais:**

Os operadores relacionais são usados para comparar valores. Quando uma comparação é feita, o JavaScript retorna um valor booleano (`true` ou `false`).

**Principais operadores:**

* `==`: Igualdade (compara apenas o valor, realizando conversão de tipo se necessário).
* `===`: Igualdade estrita (compara o valor e o tipo, sem conversão de tipo).
* `!=`: Diferença (compara apenas o valor, realizando conversão de tipo se necessário).
* `!==`: Diferença estrita (compara o valor e o tipo, sem conversão de tipo).
* `>`: Maior que.
* `<`: Menor que.
* `>=`: Maior ou igual a.
* `<=`: Menor ou igual a.

**Exemplo:**

```javascript
let idade = 20;
let maiorDeIdade = idade >= 18; // Retorna true
console.log(maiorDeIdade);
```

## Operadores Lógicos

Os operadores lógicos permitem combinar ou inverter valores booleanos:

* `&&` (**AND**): Retorna `true` se **ambas** as condições forem verdadeiras.
* `||` (**OR**): Retorna `true` se **pelo menos uma** das condições for verdadeira.
* `!` (**NOT**): Inverte o valor de uma condição. Se a condição for `true`, retorna `false`, e se for `false`, retorna `true`.

**Exemplo:**

```javascript
let temCarro = true;
let temCarteiraDeMotorista = false;
let podeDirigir = temCarro && temCarteiraDeMotorista; // false
console.log(podeDirigir); // Saída: false

let estaChovendo = true;
let temGuardaChuva = false;
let precisaDeGuardaChuva = estaChovendo || temGuardaChuva; // true
console.log(precisaDeGuardaChuva); // Saída: true

let usuarioLogado = false;
let acessoPermitido = !usuarioLogado; // true
console.log(acessoPermitido); // Saída: true
```

No primeiro exemplo, `podeDirigir` só será `true` se tanto `temCarro` quanto `temCarteiraDeMotorista` forem `true`.
No segundo exemplo, `precisaDeGuardaChuva` será `true` se `estaChovendo` for `true` ou se `temGuardaChuva` for `true` (ou ambos).
No terceiro exemplo, `acessoPermitido` será `true` porque o operador `!` inverte o valor de `usuarioLogado`, que é `false`.


## Exemplos Práticos

**Verificando Aumento Salarial:**

```javascript
let salarioAtual = 3000;
let aumento = 1000;
let recebeAumento = aumento > 500 && salarioAtual < 5000; // true
console.log(recebeAumento); // Saída: true
```

**Sistema de Autenticação:**

```javascript
let usuarioAutenticado = true;
let senhaCorreta = "senha123";
let senhaDigitada = "senha123";

if (usuarioAutenticado && senhaDigitada === senhaCorreta) {
  console.log("Acesso permitido"); // Saída: Acesso permitido
} else {
  console.log("Acesso negado");
}
```

**Sistema de Descontos em uma Loja:**

```javascript
let temDesconto = true;
let itemEmOferta = false;

if (temDesconto || itemEmOferta) {
  console.log("Desconto aplicado"); // Saída: Desconto aplicado
} else {
  console.log("Sem desconto disponível");
}
```

**Controle de Estoque:**

```javascript
let estoque = 10;
let pedido = 5;

if (estoque >= pedido) {
  console.log("Pedido autorizado"); // Saída: Pedido autorizado
} else {
  console.log("Estoque insuficiente");
}
```

Agora que você aprendeu sobre valores booleanos, operadores relacionais e lógicos, pode aplicar esses conceitos para resolver os desafios práticos. Vamos colocar esse conhecimento em prática!