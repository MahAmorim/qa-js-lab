# Ato 07: Funções em JavaScript

## O Que São Funções?

Funções são blocos de código que realizam uma tarefa específica e podem ser reutilizadas ao longo do programa. Elas ajudam a modularizar o código, tornando-o mais organizado e fácil de manter.

**Exemplos no Mundo Real:**

* Uma função que calcula o desconto em um produto.
* Uma função que valida um número de CPF.
* Uma função que exibe uma saudação personalizada para o usuário.

No JavaScript, funções podem ser criadas de diversas maneiras, o que permite flexibilidade na forma como o código é estruturado.

## Tipos de Funções em JavaScript

### 1. Função Tradicional (Function Declaration)

A função tradicional é a forma mais comum de se criar funções em JavaScript. Ela é declarada usando a palavra-chave `function` seguida de seu nome, parênteses para os parâmetros (que podem ser vazios) e um bloco de código delimitado por chaves `{}`.

A principal vantagem das funções tradicionais (declarations) é que elas são elevadas (hoisted) para o topo de seu escopo. Isso significa que você pode chamar a função antes de sua definição no código.

**Exemplo:**

```javascript
function saudacao(nome) {
  console.log("Olá, " + nome);
}

saudacao("João");  // Exibe "Olá, João"
```

### 2. Função Anônima (Function Expression)

As funções anônimas são funções que não possuem um nome formal. Em JavaScript, elas são frequentemente criadas e atribuídas a variáveis. Ao contrário das function declarations, function expressions não são hoisted, o que significa que você deve definí-las antes de poder chamá-las.

As funções anônimas são particularmente úteis quando você precisa passar uma função como argumento para outra função (callbacks) ou quando você deseja criar funções que são usadas apenas em um contexto específico.

**Exemplo:**

```javascript
const saudacao = function(nome) {
  console.log("Olá, " + nome);
};

saudacao("Maria");  // Exibe "Olá, Maria"
```

Neste exemplo, uma função anônima que recebe um parâmetro `nome` e imprime uma saudação é criada e atribuída à constante `saudacao`. Posteriormente, essa constante é usada para chamar a função, passando o argumento "Maria". A saída será "Olá, Maria". A função em si não tem um nome próprio; ela é referenciada através da variável `saudacao`.

### 3. Arrow Function (ES6)

A **arrow function** (função de seta) foi introduzida no ECMAScript 6 (ES6) e oferece uma sintaxe mais concisa para escrever funções em JavaScript. Elas são particularmente úteis para funções pequenas e simples, como aquelas usadas em callbacks. Além da sintaxe reduzida, as arrow functions também possuem um comportamento diferente em relação ao `this`, que pode ser vantajoso em certos cenários.

**Exemplo:**

```javascript
const saudacao = (nome) => console.log("Olá, " + nome);

saudacao("Carlos");  // Exibe "Olá, Carlos"
```

**Sintaxe e Variações:**

* **Parâmetros:**
    * Se houver apenas um parâmetro, os parênteses podem ser omitidos:
        ```javascript
        const dobrar = numero => numero * 2;
        console.log(dobrar(5)); // Saída: 10
        ```
    * Se não houver parâmetros, você precisa usar parênteses vazios:
        ```javascript
        const mensagem = () => "Olá!";
        console.log(mensagem()); // Saída: Olá!
        ```
    * Para múltiplos parâmetros, use parênteses:
        ```javascript
        const somar = (a, b) => a + b;
        console.log(somar(3, 4)); // Saída: 7
        ```

* **Corpo da Função:**
    * Se o corpo da função contiver apenas uma expressão, você pode omitir as chaves `{}` e a palavra-chave `return`. O resultado da expressão será implicitamente retornado:
        ```javascript
        const quadrado = numero => numero * numero;
        ```
    * Se o corpo da função contiver múltiplas declarações ou instruções, você precisa usar chaves `{}` e a palavra-chave `return` para retornar um valor:
        ```javascript
        const calcularArea = (largura, altura) => {
          const area = largura * altura;
          return area;
        };
        console.log(calcularArea(5, 10)); // Saída: 50
        ```

As arrow functions proporcionam uma sintaxe mais limpa e concisa, tornando o código JavaScript mais legível, especialmente quando se trabalha com funções de ordem superior (funções que recebem outras funções como argumentos ou retornam funções).

## Parâmetros e Retornos em Funções

### 1. Funções com Parâmetros

Funções podem receber **parâmetros**, que são variáveis listadas dentro dos parênteses na definição da função. Esses parâmetros atuam como "espaços reservados" para os valores que serão passados para a função quando ela for chamada (os chamados **argumentos**). Os valores passados como argumentos podem então ser utilizados dentro do corpo da função para realizar as operações desejadas.

**Exemplo:**

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3));  // Exibe 8
```

### 2. Funções Sem Retorno

Nem toda função em JavaScript precisa retornar um valor explicitamente. Algumas funções são projetadas para executar uma ação ou uma série de ações, como modificar variáveis globais, exibir informações no console ou interagir com elementos da página web, sem a necessidade de produzir um valor de volta para o código que as chamou.

Se uma função não contém uma instrução `return` ou se a instrução `return` é usada sem especificar um valor, a função implicitamente retorna o valor `undefined`.

**Exemplo:**

```javascript
function mostrarMensagem() {
  console.log("Este é um exemplo de função sem retorno");
}

mostrarMensagem();  // Exibe a mensagem no console
```

### 3. Funções Aninhadas

Em JavaScript, é possível definir uma função dentro do corpo de outra função. Essa estrutura é conhecida como **função aninhada** ou **função interna**. A função externa é chamada de função pai ou função envolvente.

As funções aninhadas têm algumas propriedades interessantes:

* **Escopo:** A função interna tem acesso às variáveis declaradas no escopo da função externa (incluindo os parâmetros da função externa). Isso é conhecido como **closure**.
* **Organização:** O aninhamento de funções pode ajudar a organizar o código, encapsulando funcionalidades que são específicas para a função externa.
* **Privacidade:** As funções internas não podem ser acessadas diretamente de fora da função externa. Isso pode ser útil para criar funções auxiliares que não devem ser parte da interface pública da função externa.

**Exemplo:**

```javascript
function saudacaoCompleta(nome) {
  function saudacaoSimples() {
    console.log("Olá, " + nome);
  }
  saudacaoSimples();
}

saudacaoCompleta("Pedro");  // Exibe "Olá, Pedro"
```

## Exemplos Práticos

Aqui estão alguns exemplos práticos para ilustrar o uso de funções em JavaScript:

**1. Função para verificar se um número é primo:**

```javascript
function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimo(2));   // Saída: true
console.log(isPrimo(10));  // Saída: false
console.log(isPrimo(17));  // Saída: true
```

**Explicação:**

* A função `isPrimo` recebe um `numero` como parâmetro.
* Primeiro, ela verifica se o `numero` é menor ou igual a 1. Se essa condição for verdadeira, a função retorna `false`, pois números menores ou iguais a 1 não são considerados primos.
* Em seguida, a função inicia um loop `for` que itera de 2 até a raiz quadrada inteira do `numero`. A otimização de verificar apenas até a raiz quadrada se baseia no fato de que se um número composto `n` tem um divisor maior que sua raiz quadrada, ele também deve ter um divisor menor que sua raiz quadrada.
* Dentro do loop, para cada valor de `i`, a função verifica se o `numero` é divisível por `i` usando o operador módulo (`%`). Se o resultado de `numero % i` for 0, significa que `i` é um divisor de `numero`, e portanto, o `numero` não é primo. Nesse caso, a função retorna `false`.
* Se o loop completo for executado sem encontrar nenhum divisor (ou seja, a condição `numero % i === 0` nunca foi verdadeira), isso significa que o `numero` não tem divisores além de 1 e ele mesmo. Portanto, a função retorna `true`, indicando que o `numero` é primo.

2. Função para contar quantas vezes uma letra aparece em uma palavra:

```javascript
function contarLetra(palavra, letra) {
  let contador = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLowerCase() === letra.toLowerCase()) {
      contador++;
    }
  }
  return contador;
}

let texto = "JavaScript é divertido";
let char = "a";
let quantidade = contarLetra(texto, char);
console.log(`A letra "${char}" aparece ${quantidade} vezes em "${texto}"`); // Saída: A letra "a" aparece 2 vezes em "JavaScript é divertido"

let texto2 = "Banana";
let char2 = "n";
let quantidade2 = contarLetra(texto2, char2);
console.log(`A letra "${char2}" aparece ${quantidade2} vezes em "${texto2}"`); // Saída: A letra "n" aparece 2 vezes em "Banana"
```

## Conclusão

As funções são elementos fundamentais na programação JavaScript, permitindo a criação de código **modular** e altamente **reutilizável**. Ao encapsular blocos de código que realizam tarefas específicas, as funções ajudam a **organizar** seu projeto, tornando-o mais **eficiente** e significativamente mais **fácil de entender**, manter e depurar.

Com o uso de funções, você pode realizar tarefas complexas com **mínima repetição de código**, promovendo uma estrutura mais limpa e lógica em suas aplicações. A capacidade de definir parâmetros e retornar valores aumenta ainda mais a flexibilidade e o poder das funções.

Agora que você possui uma compreensão sólida sobre o que são funções, os diferentes tipos (tradicionais, anônimas e arrow functions), como trabalhar com parâmetros e retornos, e a utilidade das funções aninhadas, o próximo passo crucial é a **prática**. Experimente criar suas próprias funções para resolver diferentes problemas e familiarize-se com as diversas formas de utilizá-las em seus projetos JavaScript. Quanto mais você praticar, mais intuitivo e natural se tornará o uso de funções, elevando a qualidade e a organização do seu código.