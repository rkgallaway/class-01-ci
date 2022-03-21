'use strict';

const express = require('express');

const app = express();//singleton

app.get('/hello', (request, response, next) => {
  response.send('Hello World');
});

module.exports = app;
