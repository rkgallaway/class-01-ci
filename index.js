'use strict';
require('dotenv').config();

const PORT = process.env.PORT || 3002;

const app = require('./server/app.js');

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
