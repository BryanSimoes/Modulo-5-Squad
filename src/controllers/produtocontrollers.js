import ProdutoDAO from '../DAO/ProdutoDAO.js'
import Produto from '../models/produto.js'



class produtoControllers {
    static rotas(app) {
        app.get('/Produto', produtoControllers.listar)
        app.get('/Produtoid/:id', produtoControllers.buscarPorID)
        app.post('/Produto', produtoControllers.inserir)
        app.put('/Produto/id/:id', produtoControllers.atualizaProduto)
        app.delete('/Produto/id/:id', produtoControllers.deletarProduto)
    }

    // GET para listar
    static async listar(req, res) {

        const produto = await ProdutoDAO.listar()

        res.status(200).send(produto)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const produto = await ProdutoDAO.buscarPorID(req.params.id)

        if (!produto) {

            res.status(404).send("produto não encontrado")
        }

        res.status(200).send(produto)
    }



    // POST
    static async inserir(req, res) {
        const produto = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            email: req.body.email,
            senha: req.body.email
        }

        if (!produto || !produto.nome || !produto.CPF || !produto.email || !produto.senha) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await ProdutoDAO.inserir(produto)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Produto criado com sucesso", "Novo produto: ": produto })
    }

    // PUT
    static async atualizaProduto(req, res) {
        const id = await ProdutoDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Produto não encontrado')
            return
        }

        const produto = new Produto(req.body.nome, req.body.CPF, req.body.email, req.body.email)



        if (!produto || !produto.nome || !produto.CPF || !produto.email || !produto.senha) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(produto).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await ProdutoDAO.atualizar(req.params.id, produto)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o produto')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "produto: ": produto })

    }


    // DELETE
    static async deletarProduto(req, res) {

        const produto = await ProdutoDAO.buscarPorID(req.params.id)

        if (!produto) {
            res.status(404).send("produto não encontrado")
            return
        }

        const result = await DoadorDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'produto não deletado' })
            return
        }

        res.status(200).send(result)

    }
}

export default produtoControllers;