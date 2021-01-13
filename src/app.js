const express = require('express');
require('../db/config');

const router = require('../src/router/router');

const PORT = process.env.PORT || 3500;
const app = express();

//  register json & router
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Your RestFull Api server is runnig on Port ${PORT}, http://localhost:${PORT}`));