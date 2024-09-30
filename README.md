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

Esse projeto pode ser facilmente expandido para adicionar mais funcionalidades, como autenticação de usuários, paginação, ou integração com uma API real para persistência de dados.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

