import RoupaDAO from '../DAO/RoupaDAO.js'
import Roupa from '../models/roupa.js'



class roupaControllers {
    static rotas(app) {
        app.get('/Roupa', roupaControllers.listar)
        app.get('Roupaid/:id', roupaControllers.buscarPorID)
        app.post('/Roupa', roupaControllers.inserir)
        app.put('/roupa/id/:id', roupaControllers.atualizaRoupa)
        app.delete('/Roupa/id/:id', roupaControllers.deletarRoupa)
    }

    // GET para listar
    static async listar(req, res) {

        const roupa = await RoupaDAO.listar()

        res.status(200).send(roupa)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const roupa = await RoupaDAO.buscarPorID(req.params.id)

        if (!roupa) {

            res.status(404).send("Roupa não encontrado")
        }

        res.status(200).send(roupa)
    }



    // POST
    static async inserir(req, res) {
        const roupa = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            email: req.body.email,
            senha: req.body.email
        }

        if (!roupa || !roupa.nome || !roupa.CPF || !roupa.email || !roupa.senha) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await RoupaDAO.inserir(roupa)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "roupa criado com sucesso", "Novo roupa: ": roupa })
    }

    // PUT
    static async atualizaRoupa(req, res) {
        const id = await RoupaDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('roupa não encontrado')
            return
        }

        const roupa = new Roupa(req.body.nome, req.body.CPF, req.body.email, req.body.email)



        if (!roupa || !roupa.nome || !roupa.CPF || !roupa.email || !roupa.senha) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(roupa).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await RoupaDAO.atualizar(req.params.id, doador)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o roupa')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "roupa: ": roupa })

    }


    // DELETE
    static async deletarRoupa(req, res) {

        const roupa = await RoupaDAO.buscarPorID(req.params.id)

        if (!roupa) {
            res.status(404).send("Roupa não encontrado")
            return
        }

        const result = await RoupaDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'roupa não deletado' })
            return
        }

        res.status(200).send(result)

    }
}

export default roupaControllers;