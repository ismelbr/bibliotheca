# Bibliotheca application with React

This project contains the code for the Bibliotheca web application.
It is built in ReactJS and MUI. MUI provides style to the application.
One test was added as an example of test that could be added (`see App.test.js`).

## Project setup

```
npm install
```

## Available Scripts

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Installed packages

- axios: A promise-based HTTP Client in both the browser and Node.js to send requests to the back api.
- react-redux: State management library for react.
- reduxjs/toolkit: Simplify common use cases like store setup, creating reducers, immutable update logic.
- react-router-dom: Enable us to implement dynamic routing in a web app.
- mui: An open-source React component library that implements Google's Material Design.
- testing-library: A library for testing React applications.
- husky and lint-staged: They will automatically format supported files in a pre-commit hook before committing them.
- craco: An easy and comprehensible configuration layer for create-react-app. This way we can set logo in enviroment variables without modifying webpack.config.js.
- prettier: Project code formatter.
- redux-mock-store: A mock store for testing Redux async action creators and middleware.

## Routes

- /signin - Render component that allows the user to log in or create a new user.
- /home - App homepage. Just the menu navigation of the app.
- /books - Render the list of user's books.
- /books/:bookId - Render the detail of a specific book.
- /newbook- Render the component that allows the user to add a new book to the list.
- /password- Render the component that allows the user modified her password.

## Pages

- homepage: The user is able to navigate to the different menu navigation options. It shows a quote from Don Quixote.
- book list: The user can update and delete books from her list in this page.
- book detail: The user can edit the title of a given book in her book list.
- new book: The user can add a new book to her list. Duplicate book title are not valid.
  This validation is checked in the client and server side.
- password: The user can modify her password on this page.

## Store

The application state includes 2 slides: `auth` and `books`.
The former contains the info about the logged user and the second one includes her book lists.
(check `/store` folder for extra info)

## Custom Hooks

- useAuth: reusable functions to handle application state about the user.
- useBook: reusable functions to handle application state about user's books.
