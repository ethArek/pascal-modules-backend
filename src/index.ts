import express from 'express';
import { initAppDependencies } from './app-dependencies';
import { getUsersList } from './controllers/user';

const app = express();
const PORT = 3000;
const deps = initAppDependencies();

app.get('/users', (req, res) => getUsersList(req, res, deps));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));
