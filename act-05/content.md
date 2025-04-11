# Conteúdo de Ensino: Laços de Repetição em JavaScript

## O que são Loops?

Os **loops** (ou laços de repetição) são estruturas de controle que permitem executar um trecho de código repetidamente, enquanto uma condição for verdadeira. Eles são fundamentais para evitar repetição manual de código e tornam o processo de automação muito mais eficiente.

### Exemplos do Mundo Real de Loops:
- Passar por todos os contatos do WhatsApp e enviar uma mensagem automática.
- Contar quantos produtos existem no carrinho de um e-commerce.
- Repetir um teste de login até que o usuário insira a senha correta.

---

## Tipos de Loops no JavaScript

### 1️⃣ O Loop `for`

O **loop `for`** é ideal quando sabemos quantas vezes queremos repetir o código.

Exemplo de sintaxe:

```javascript
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador);
}
```

**Explicação:**

* `contador = 1`: Define o ponto inicial da variável `contador` com o valor 1.
* `contador <= 5`: Esta é a condição de continuação do loop. O bloco de código dentro do loop será executado repetidamente enquanto o valor da variável `contador` for menor ou igual a 5. Assim que `contador` se tornar maior que 5, a condição se torna falsa e o loop termina.
* `contador++`: Esta é a instrução de incremento. A cada vez que o bloco de código dentro do loop é executado, o valor da variável `contador` é aumentado em 1. Isso garante que, eventualmente, a condição `contador <= 5` se torne falsa e o loop termine, evitando um loop infinito.

## 2️⃣ O Loop `while`

O loop `while` repete um bloco de código enquanto a condição especificada for verdadeira.

**Exemplo de sintaxe:**

```javascript
let numero = 1;
while (numero <= 5) {
  console.log(numero);
  numero++;
}
```

**Explicação:**

* A variável `numero` é inicializada com o valor 1.
* O loop continua executando o bloco de código dentro de suas chaves `{}` enquanto a condição `numero <= 5` for verdadeira.
* Após cada iteração do loop, a instrução `numero++` aumenta o valor da variável `numero` em 1. Isso garante que, eventualmente, a condição se torne falsa e o loop termine.

## 3️⃣ O Loop `do...while`

O loop `do...while` é semelhante ao loop `while`, mas com uma diferença crucial: ele garante que o bloco de código dentro do loop seja executado **pelo menos uma vez**, antes que a condição seja verificada.

**Exemplo de sintaxe:**

```javascript
let contador = 1;
do {
  console.log(contador);
  contador++;
} while (contador <= 5);
```

**Explicação:**

* A variável `contador` é inicializada com o valor 1.
* O bloco de código dentro das chaves `{}` do `do` é executado **uma vez**.
* Após a primeira execução, a condição especificada no `while (condição)` é verificada. Se a condição for verdadeira, o bloco de código dentro do `do` é repetido. Caso contrário, o loop termina.

## Controlando a Execução dos Loops

### Parando um Loop com `break`

A instrução `break` é usada para interromper imediatamente a execução de um loop (`for`, `while`, `do...while`) e transferir o controle do programa para a próxima instrução após o loop.

**Exemplo:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Sai do loop quando i for igual a 5
  console.log(i);
}
```
**Explicação:**

* Este é um loop `for` que normalmente iteraria de 0 até 9.
* Dentro do loop, há uma condição `if (i === 5)`.
* Quando o valor de `i` atinge 5, a condição se torna verdadeira e a instrução `break` é executada.
* A execução do loop é interrompida imediatamente neste ponto.
* O programa continua a executar qualquer código que venha após o fechamento do loop `for`.

**Saída do exemplo:**
0
1
2
3
4

Observe que o número 5 e os números subsequentes (6, 7, 8, 9) não são impressos porque o loop foi terminado prematuramente pelo `break`.

### Pulando Iterações com `continue`

A instrução `continue` é usada dentro de um loop (`for`, `while`, `do...while`) para pular a execução da iteração atual e passar imediatamente para a próxima iteração do loop. Qualquer código restante dentro do bloco de código da iteração atual que segue o `continue` é ignorado.

**Exemplo:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Pula os números pares
  console.log(i); // Exibe apenas números ímpares
}
```
**Explicação:**

* Este é um loop `for` que itera de 0 até 9.
* Dentro do loop, a condição `if (i % 2 === 0)` verifica se o valor de `i` é par (o operador `%` retorna o resto da divisão; se o resto da divisão por 2 for 0, o número é par).
* Se `i` for par, a instrução `continue` é executada. Isso faz com que a iteração atual seja imediatamente interrompida, e o programa passa para a próxima iteração do loop (incrementando `i` e verificando a condição do loop novamente).
* Se `i` for ímpar (a condição `i % 2 === 0` for falsa), a instrução `console.log(i)` é executada, exibindo o número ímpar no console.


**Saída do exemplo:**
1
3
5
7
9

Como você pode ver, apenas os números ímpares são impressos, pois as iterações onde `i` era par foram puladas pela instrução `continue`.