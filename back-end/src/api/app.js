const express = require('express');
const UserController = require('./controllers/user.controller');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/test', UserController.getUsers);

module.exports = app;
