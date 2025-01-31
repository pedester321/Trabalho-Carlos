# Trabalho 02 - Componentização em React Native

## Alunos:

- **Pedro Rogério de Castro Fioravante**
- **Felipe de Melo Lemos**

---

### **Componentes**

Os arquivos dos componentes estão localizados na pasta `components`:

- `Topo.js`: Componente que representa a parte superior do layout.
- `Detalhe.js`: Componente responsável por exibir detalhes específicos do conteúdo.

---

### **Exemplo de Utilização**

Na pasta `screens`, o arquivo `AutoPecasScreen.js` contém um exemplo prático de como utilizar os dois componentes (`Topo.js` e `Detalhe.js`) em uma tela.

---

# Trabalho 03 - Refatorando a lista e criando o CustomButton

### **Modificações**

Os arquivos dos componentes estão localizados na pasta `components`:

- `Lista.js`: Refatoramos a lista de `Detalhes.js`.
- `CustomButton`: Botão reutilizável usado em `Detalhes.js`.

---

# Trabalho 04 - Colocando um TextInput na quantidade de peças

### **Modificações**

- `NumberKeeper.js`: Componente que mantem a quantidade digitada para cada peça.
- O total agora reflete a soma das quantidades de cada peça.

---

# Trabalho 05 - Tela de Resumo da compra

### **Modificações**

- `App.js`: Navegação entre a tela `AutoPecasScreen.js` e `SelectedProductsScreen.js`.
- `SelectedProductsScreen.js`: Tela para resumir os produtos selecionados.