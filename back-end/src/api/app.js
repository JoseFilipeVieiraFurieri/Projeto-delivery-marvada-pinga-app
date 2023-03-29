const express = require('express');
const cors = require('cors');
const { userRouter, productRouter, imageRouter } = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/images', imageRouter);

module.exports = app;
