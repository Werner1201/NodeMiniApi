const express = require('express');
const routes = express.Router();

//Importar o objeto de Controlador de Produto
const ProductController = require('./controllers/ProductController');

//Primeira Rota de Listagem de Produtos
routes.get('/products', ProductController.index);

// Rota de Detalhe de 1 Produto
routes.get('/products/:id', ProductController.show)

//Rota de Criacao de Registro
routes.post('/products', ProductController.store);

//Rota de Alteracao 
routes.put('/products/:id', ProductController.update);

//Rota de Exclusao
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;