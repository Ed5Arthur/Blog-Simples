# Blog-Simples

SOBRE O PROJETO E INICIALIZAÇÃO:

### Resumo do Projeto: Gerenciador de Posts com React e Day.js

Este projeto é um **gerenciador de posts** criado com **React**, utilizando a API **JSONPlaceholder** para simular operações de CRUD (Create, Read, Update, Delete) em posts. A biblioteca **Day.js** foi integrada ao projeto para lidar com a formatação de datas.

#### Funcionalidades Principais:

1. **Listagem de Posts**: Os posts são buscados de uma API (https://jsonplaceholder.typicode.com/posts) e exibidos em uma lista.
2. **Adicionar Post**: O usuário pode adicionar novos posts através de um formulário. O novo post é enviado para a API usando o método HTTP **POST**.
3. **Editar Post**: O usuário pode editar o título de um post existente. A alteração é salva usando o método HTTP **PUT**.
4. **Excluir Post**: O usuário pode deletar um post da lista, e a remoção é feita na API usando o método HTTP **DELETE**.
5. **Exibição de Data**: Utilizando o **Day.js**, cada post exibe a data de criação formatada de maneira legível (ex: `DD/MM/YYYY HH:mm`).
6. **Carregamento**: Exibe uma mensagem de "Carregando" enquanto os posts estão sendo buscados da API.

#### Estrutura do Projeto:

- **Componentes**:
  - `App.js`: Componente principal que controla o estado da aplicação e gerencia a lógica de carregamento, criação, edição e exclusão de posts.
  - `PostList.js`: Exibe a lista de posts.
  - `PostItem.js`: Exibe cada post individualmente, permitindo edição e exclusão.
  - `PostForm.js`: Formulário para adicionar novos posts.
  - `Header.js` e `Footer.js`: Cabeçalho e rodapé do aplicativo.
  - `Loading.js`: Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados.
- **CSS Modularizado**: Cada componente tem seu próprio arquivo CSS para estilização, garantindo um design simples e organizado.

#### Tecnologias Utilizadas:

- **React**: Biblioteca JavaScript para construir a interface do usuário.
- **Day.js**: Biblioteca para manipulação e formatação de datas.
- **Fetch API**: Utilizada para realizar requisições HTTP (GET, POST, PUT, DELETE).
- **JavaScript Moderno**: Utilização de **hooks** como `useState` e `useEffect` para gerenciar o estado e ciclo de vida dos componentes.

#### Exemplo de Funcionalidades:

- Ao abrir o app, os primeiros 10 posts são carregados e exibidos com a data atual formatada.
- O usuário pode adicionar novos posts com um título e vê-los instantaneamente na lista.
- Ao clicar em "Editar", o usuário pode modificar o título do post e salvar as alterações.
- O botão "Excluir" remove o post da lista e da API.

#### Benefícios:

- **Simples e modular**: O projeto é organizado em pequenos componentes reutilizáveis, facilitando a manutenção e expansão.
- **Ciclo de vida dos componentes**: O uso de `useEffect` permite carregar os dados de maneira assíncrona, e `useState` gerencia os estados de cada post.
- **Day.js**: Garante uma manipulação fácil e eficiente de datas, melhorando a experiência visual do usuário.

## Como Executar o Projeto

1. Clone o repositório:  
   `git clone https://github.com/seu-usuario/nome-do-repositorio.git`

2. Instale as dependências:  
   `npm install`

3. Execute o projeto:  
   `npm start`

4. Abra no navegador:  
   `http://localhost:3000`


Esse projeto pode ser facilmente expandido para adicionar mais funcionalidades, como autenticação de usuários, paginação, ou integração com uma API real para persistência de dados.
