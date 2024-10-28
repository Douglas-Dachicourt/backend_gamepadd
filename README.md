# GAMEPADD BACKEND - APPLICATION SERVER

<br>

<h1>DESCRIPTION</h1>

GAMEPADD's backend is an application server designed to handle authentication, user account creation, game collection management, and review publishing features. It is based on a RESTful architecture with MongoDB for data storage, and uses Node.js and Express for API development. This project is Douglas Dachicourt's first portfolio project, demonstrating skills in backend and database management.

## REQUIREMENTS :

- Node.js (lastest version by preference)
- NPM
- Nodemon
- MongoDB
- MongoDB Compass
- Postman (optional) to test endpoints

## INSTALLATION:

Please note that the following documentation considers only a localhost use.

<h3>1- Clone the repository:</h3>

```bash
git clone https://github.com/Douglas-Dachicourt/backend_gamepadd.git
```

<h3>2- Install depedencies : </h3>

```bash
npm install
```

<h3>3- Configure your environment variables </h3>

- Create a .env file and insert inside the following two lines:

```bash
PORT=3000
DB_URI=mongodb://localhost:27017/insert-name-of-your-db-here
```

## LAUNCH SERVER:

Use this command as it avoids server stopping or crashing :

```bash
npx nodemon
```

## PROJECT STRUCTURE

- **models/** : Define main schemas for database.
- **routes/** : Define API's endpoints.
- **middlewares/** : Contains a file to set authorization and validation for a user.
- **index.js** : Main file to launch the application (without using nodemon).
- **.env** : File to store environment variables.
- **.gitignore** : Specify files to not be pushed through GitHub.
- **package.json** : Settle depedencies and scripts of the project.
- **README.md** : Documentation of project.

## API ENDPOINTS (CRUD)

- SIGNUP ROUTE :

  - POST /user/signup: route that let a new user to register.
    <br/> _exemple of use (through Postman):_ send a json body this way:

  ```bash
  {
    "username": "your_username",
    "email": "your_email",
    "password": "your_password",
  }
  ```

- LOGIN ROUTE :

  - POST /user/login: route that login an existing user.
    <br/> _exemple of use (through Postman):_ send a json body this way:

  ```bash
  {
    "email": "your_email",
    "password": "your_password"
  }
  ```

- REVIEW ROUTES :

  - POST /games/:id/rewiew : route that let a registered user to leave a review.
    <br/> _exemple of use (through Postman):_ send a json body this way after configuring the path adress (do not forget the id of the game in params + add your 'bearer' token in the headers authorization):

  ```bash
  {
    "title": "your_title",
    "content": "your_content"
  }
  ```

  - GET /games/:id/rewiew : route that displays all reviews available for a specific game.

- COLLECTION ROUTES :

  - POST /games/:id/collection : route that let a registered user to add a game to a personal collection.
  - GET /games/:user/collection : route that displays all games saved by an authentified user in his collection.
  - DELETE /games/:id/collection : route that let a registered user to delete a game from his personal collection.

## MAIN PACKAGES USED:

- Express Server package: to run a basic server.
- Mongoose : to connect models and collections to the MongoDB database and interact with.
- SHA256 and Encase64 packages: to create and encrypt specific and sensibles datas such as 'hash'.
- uid2 package : to generate a random string key with a wanted length such as 'token' or 'salt'.

## LICENSE :

© Douglas Dachicourt - 2024 - Portfolio first project
