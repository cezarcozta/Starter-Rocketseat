const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir')

//iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

//rota raiz
app.use('/api', require('./src/routes'));

app.listen(3001);