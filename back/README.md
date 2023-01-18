# Node.js and Express – JWT Authentication with JSONWebToken & JSON file store

This project exposes the necessary endpoints that the Bibliotheca app uses to retrieve data. User data and their book list are stored in json file using node-json-db package.

## Project setup

```
npm install
```

### Run

```
npm start
```

### Tests

```
npm test
```

Four tests were added as an example of the test types that could be defined (see tests folder).
One of them checks that a user can add duplicate books.

## Installed packages

- bcryptjs: A bcrypt library for NodeJS. This module enables storing of passwords as hashed passwords instead of plaintext.
- jsonwebtoken: JSON Web Token is an open standard for securely transferring data between parties using a JSON object. This module stores user tokens that allow the backend to authorize requests from the client application.
- node-json-db: The tool to store users' data into JSON files.
- jest: JavaScript testing framework.
- prettier: Project code formatter.
- husky and lint-staged: They will automatically format supported files in a pre-commit hook before committing them.

## Endpoints

### User authentication

- POST /api/auth/login - check whether the user provided valid credentials, in such case, a token is generated.
  That token should be part of all the requests the user sends to the api.
- POST /api/auth/register - create a new user.

### Characters

- GET /api/books - retrieve the list of books for a given user.
- GET /api/books/:bookId - retrieve a book in the user list given its id.
- POST /api/books - add a book to the user's book list.
- DELETE /api/books/:bookId - remove a book from the user's book list.
- POST /api/books/:bookId - edit the book with `bookId` from the user's book list.

## Middleware

Every request sent to books endpoints should include a valid token.
JWT manages and verifies user token. Requests with invalid token are rejected.
