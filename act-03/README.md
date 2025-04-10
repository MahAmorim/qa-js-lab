# Ato 03: Valores Booleanos em JavaScript

## Descrição do Desafio

Bem-vindo ao terceiro dia do desafio! 🎉 Hoje vamos mergulhar em um dos conceitos mais fundamentais da programação: os **valores booleanos**. Eles representam apenas dois estados possíveis: **true (verdadeiro)** e **false (falso)**.

Os booleanos estão presentes em diversas partes da programação, como validações de login, controle de permissões, tomada de decisões em sistemas, entre outros.

Exemplo do mundo real:

- Está chovendo? → true ☔
- A bateria do celular acabou? → false 🔋
- Você já assistiu a esse curso? → true 🎥

Vamos aprender a usá-los? 🚀

---

## Objetivos do Desafio

1. **Entender os valores booleanos**: Como e quando usar **true** e **false**.
2. **Compreender operadores relacionais**: Aprender a comparar valores e gerar booleanos.
3. **Explorar operadores lógicos**: Como combinar valores booleanos para criar expressões mais complexas.

---

### Desafios Propostos

1. **Sensor de Temperatura 🌡️**  
   Crie um programa que analisa a temperatura do ambiente e exiba mensagens diferentes:
   - Se estiver abaixo de 10°C, mostre "Está muito frio! ❄️".
   - Se estiver entre 10°C e 25°C, mostre "Temperatura agradável. 😊".
   - Se estiver acima de 25°C, mostre "Está muito quente! 🔥".

2. **Controle de Acesso 🔑**  
   Imagine que você está desenvolvendo um sistema de login. Verifique se o usuário está cadastrado (variável `estaCadastrado`) e se o código de acesso do usuário é válido (variável `codigo`). Se ambos forem verdadeiros, exiba "Acesso permitido! ✅". Caso contrário, exiba "Acesso não permitido. Tente novamente. ❌".

3. **Verificador de Placar 🏆**  
   Um jogo retorna dois valores: `pontosJogador` e `pontosAdversario`. Crie uma lógica que:
   - Se `pontosJogador` for maior, exiba "Você venceu! 🏅".
   - Se `pontosAdversario` for maior, exiba "Você perdeu. 😢".
   - Se forem iguais, exiba "Empate! ⚖️".

4. **Lanchonete Digital 🍔**  
   Crie um sistema de pedidos onde o usuário pode escolher entre três opções de lanche digitando um número:
   - 1 → "Você escolheu um Hambúrguer"
   - 2 → "Você escolheu uma Pizza"
   - 3 → "Você escolheu um Sanduíche"
   Se for um número diferente desses, exiba "Opção inválida".

5. **Alerta de Bateria 🔋**  
   Crie uma variável `nivelBateria` (de 0 a 100) e exiba mensagens como:
   - "Bateria cheia! ⚡" se for maior que 80.
   - "Bateria moderada 🔋" se estiver entre 30 e 80.
   - "Bateria fraca! Conecte o carregador! ⚠️" se for menor que 30.

---

### Dicas:
- Utilize operadores **relacionais** (`==`, `===`, `>`, `<`, etc.) para comparar valores e gerar booleanos.
- Use **operadores lógicos** (`&&`, `||`, `!`) para combinar ou inverter valores booleanos.

Boa sorte e bora codar! 🚀