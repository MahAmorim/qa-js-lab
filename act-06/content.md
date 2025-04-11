# Conteúdo de Ensino: Arrays em JavaScript

## O que é um Array?

Um **array** é uma coleção ordenada de elementos que podem ser de qualquer tipo: números, strings, booleanos, objetos ou até outros arrays!

### Exemplos do Mundo Real de Arrays:
- Uma lista de tarefas pendentes.
- Os nomes dos funcionários de uma empresa.
- Os itens de um carrinho de compras.

### Como Criar Arrays no JavaScript

#### 1️⃣ Arrays Simples

```javascript
let numeros = [1, 2, 3, 4, 5];
```

## 2️⃣ Arrays Mistos (diferentes tipos de dados)

Arrays em JavaScript podem conter elementos de diferentes tipos de dados.

```javascript
let mix = [1, "Texto", true, null];
console.log(mix); // Saída: [1, "Texto", true, null]
```
Neste exemplo, o array mix contém um número, uma string, um booleano e o valor null.

## 3️⃣ Criando um Array Vazio

```javascript
let vazio = [];
vazio.push("Novo Item");
console.log(vazio); // Saída: ["Novo Item"]
```

Neste exemplo, um array vazio chamado vazio é criado. Em seguida, o método push() é usado para adicionar a string "Novo Item" ao final do array.

## Métodos Essenciais para Trabalhar com Arrays

O JavaScript oferece diversos métodos poderosos para manipular arrays de forma eficiente. Aqui estão alguns dos métodos mais fundamentais e úteis:

* **`push(elemento1, elemento2, ...)`**: Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.

    ```javascript
    let frutas = ["maçã", "banana"];
    frutas.push("laranja");
    console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
    ```

* **`shift()`**: Remove o **primeiro** elemento do array e retorna esse elemento removido. Este método modifica o comprimento do array e desloca todos os outros elementos para um índice menor.

    ```javascript
    let frutas = ["maçã", "banana", "laranja"];
    let primeiraFruta = frutas.shift();
    console.log(primeiraFruta); // Saída: "maçã"
    console.log(frutas);      // Saída: ["banana", "laranja"]
    ```

* **`splice(índiceDeInício, quantidadeDeDeleção, item1, item2, ...)`**: Permite remover ou substituir elementos existentes e/ou adicionar novos elementos em qualquer posição do array. Retorna um array contendo os elementos deletados (se houver).

    * **Remover elementos**:
        ```javascript
        let frutas = ["maçã", "banana", "laranja", "manga"];
        let removidos = frutas.splice(1, 2); // Remove 2 elementos a partir do índice 1
        console.log(removidos); // Saída: ["banana", "laranja"]
        console.log(frutas);    // Saída: ["maçã", "manga"]
        ```

    * **Substituir elementos**:
        ```javascript
        let frutas = ["maçã", "banana", "laranja"];
        frutas.splice(1, 1, "morango"); // Remove 1 elemento no índice 1 e insere "morango"
        console.log(frutas); // Saída: ["maçã", "morango", "laranja"]
        ```

    * **Adicionar elementos**:
        ```javascript
        let frutas = ["maçã", "laranja"];
        frutas.splice(1, 0, "banana"); // Não remove nada (0), insere "banana" no índice 1
        console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
        ```

* **`slice(índiceDeInício, índiceDeFim)`**: Extrai uma seção do array original e retorna um **novo array** contendo os elementos extraídos. O array original não é modificado. O `índiceDeFim` é opcional e não inclusivo (o elemento neste índice não é incluído). Se omitido, `slice()` extrai até o final do array.

    ```javascript
    let frutas = ["maçã", "banana", "laranja", "manga", "uva"];
    let citricas = frutas.slice(2, 4); // Extrai do índice 2 até o índice 3
    console.log(citricas); // Saída: ["laranja", "manga"]
    let todasMenosPrimeira = frutas.slice(1); // Extrai do índice 1 até o final
    console.log(todasMenosPrimeira); // Saída: ["banana", "laranja", "manga", "uva"]
    console.log(frutas); // Saída: ["maçã", "banana", "laranja", "manga", "uva"] (original não modificado)
    ```

* **`join(separador)`**: Converte todos os elementos do array em uma única string. O `separador` opcional especifica uma string a ser usada para separar cada elemento na string resultante. Se omitido, os elementos são separados por uma vírgula (`,`).

    ```javascript
    let frutas = ["maçã", "banana", "laranja"];
    let stringDeFrutas = frutas.join(", ");
    console.log(stringDeFrutas); // Saída: "maçã, banana, laranja"

    let stringComHifen = frutas.join("-");
    console.log(stringComHifen); // Saída: "maçã-banana-laranja"
    ```    