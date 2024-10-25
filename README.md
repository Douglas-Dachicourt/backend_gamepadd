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

- LOGIN ROUTE :
  - POST /user/login: route that login an existing user.
- SIGNUP ROUTE :
  - POST /user/signup: route that let a new user to register.
- REVIEW ROUTES :
  - POST /games/:id/rewiew : route that let a registered user to leave a review.
  - GET /games/:id/rewiew : route that displays all reviews available for a specific game.
- COLLECTION ROUTES :
  - POST /games/:id/collection : route that let a registered user to add a game to a personal collection.
  - GET /games/:user/collection : route that displays all games saved by an authentified user in his collection.

## TECH USED:

- Express Server package: to run a basic server.
- SHA256 and Encase64 packages: to create and encrypt specific and sensibles datas such as 'hash'.
- uid2 package : to generate a random string key with a wanted length such as token or salt.

## LICENSE :

© Douglas Dachicourt - 2024 - Portfolio first project
