import express from 'express';
import { initAppDependencies } from './app-dependencies';
import { getUsersList, getUserById } from './controllers/user';
import errorHandlingMiddleware from './lib/error-handling-middleware';

const app = express();
const PORT = 3000;
const deps = initAppDependencies();

app.get('/users', (req, res, next) => getUsersList(req, res, next, deps));
app.get('/users/:id', (req, res, next) => getUserById(req, res, next, deps));

app.use(errorHandlingMiddleware);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));
