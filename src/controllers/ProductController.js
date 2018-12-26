const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Rota de Listagem
    async index(req, res) {
        // Para pegar um parametro GET eh necessario usar o codigo abaixo
        const { page = 1 } = req.query; // Utiliza-se o Page = 1 para definir rota padrao caso nao haja retorno da requisicao
        //Essa linha diz que soh poderah executar o return
        const products = await Product.paginate({}, {page, limit: 10}); // Atraves do Paginate fica mais facil retornar muitos registros
        // No primeiro {} eh onde ficaria as condicoes de SQL WHERE entre outros
        // O segundo indica a pagina atual e o tamanho(numero de registros q podem aparecer por pagina)
        // Quando conseguir achar algum product
        return res.json(products);
    },

    // Rota de Detalhe de Um produto
    async show(req, res){
        const product = await Product.findById(req.params.id);
      
        return res.json(product);
    },
    // Rota de Criacao ou Armazenamento
    async store(req, res){
        // Criacao 
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Rota de Alteracao ou Update
    async update(req, res){
        // Pega o Id dos parametros da Rota no routes e atualiza pelos valores no req.body do metodo store
        // Utilizando o Objeto com "new : true" eh para dizer que o objeto a ser atribuido a variavel product deve ser o atualizado e nao anterior 
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    //Rota de Exclusao ou Delete
    async destroy(req, res){
       await Product.findByIdAndRemove(req.params.id);

       return res.send();
    },
}