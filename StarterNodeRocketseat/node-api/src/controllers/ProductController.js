const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //listagem com paginação
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({},{ page, limit: 10 });

        return res.json(products);
    },
    //detalhes do produto
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    //cria novo registro novo no banco
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    //atualiza um registro do banco
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(product);
    },
    //deleta o registro do banco
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};