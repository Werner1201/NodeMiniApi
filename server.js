const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicia o App
const app = express();
// Permissao para enviar arquivos JSON
app.use(express.json());

//Usando o cors
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb+srv://Admin:admin@nodejscluster-ewrur.mongodb.net/nodeapi?retryWrites=true', {useNewUrlParser:true});

// Require Model
requireDir('./src/models');

// "Criando" um Model
//const Product = mongoose.model('Product');

//Link Rotas
app.use('/api', require("./src/routes"));


app.listen(3001);