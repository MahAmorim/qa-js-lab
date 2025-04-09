# Ato 1: Configurando o ambiente e entendendo variáveis

## Objetivo

Neste primeiro desafio, vamos configurar o ambiente de desenvolvimento e aprender sobre variáveis em JavaScript. Este é um passo essencial para quem está começando no JavaScript, pois variáveis são a base para manipulação de dados e lógica de programação.

## 1. Configurando o Ambiente

### Instalar o Node.js
O **Node.js** permite que você execute JavaScript diretamente no seu computador, sem depender de um navegador. Isso é útil para testes automatizados e outros cenários.

- Acesse o site oficial: [nodejs.org](https://nodejs.org)
- Baixe a versão LTS (Long Term Support).
- Durante a instalação, marque a opção **"Adicionar ao PATH"**.
- Teste a instalação no terminal com o comando `node -v`.

### Instalando o VS Code
O **Visual Studio Code** é um excelente editor de código para JavaScript.

- Baixe o VS Code: [code.visualstudio.com](https://code.visualstudio.com)
- Instale a extensão **Code Runner** no VS Code para rodar seu código facilmente.
  - No VS Code, acesse a aba de **Extensões** e busque por **Code Runner**.
  - Instale a extensão desenvolvida por **Jun Han**.

---

## 2. Entendendo Variáveis

### O que são variáveis?
Variáveis são espaços na memória onde podemos armazenar dados para utilizá-los ao longo do código. São como caixas que guardam valores, e podemos acessar e alterar esses valores sempre que necessário.

### Tipos de Dados
No JavaScript, você pode armazenar diferentes tipos de dados:
- **Number**: Números inteiros ou de ponto flutuante.
- **String**: Sequências de caracteres (texto).
- **Boolean**: Valores `true` ou `false`.
- **Array**: Listas de dados.
- **Object**: Estruturas para armazenar dados compostos.


### Declaração de Variáveis
Em JavaScript, podemos declarar variáveis usando:
- `let`: Para variáveis cujo valor pode ser alterado.
- `const`: Para variáveis cujo valor não pode ser alterado.
- `var`: Uma forma mais antiga de declarar variáveis. Hoje, é recomendado evitar o uso de `var`.


---

## 3. Exemplos

### Declarando uma variável
```javascript
let nome = "João";
const idade = 30;

let numero = 10; // Número
let saudacao = "Olá, Mundo!"; // String
let estaChovendo = true; // Booleano
let filmesFavoritos = ["Matrix", "Inception", "Interstellar"]; // Array
let carro = {marca: "Toyota", modelo: "Corolla", ano: 2020}; // Objeto

