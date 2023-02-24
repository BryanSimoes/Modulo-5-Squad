import DoadorDAO from '../DAO/DoadorDAO.js'
import Doador from '../models/doador.js'



class doadorControllers {
    static rotas(app) {
        app.get('/Doador', doadorControllers.listar)
        app.get('/Doadorid/:id', doadorControllers.buscarPorID)
        app.post('/Doador', doadorControllers.inserir)
        app.put('/doador/id/:id', doadorControllers.atualizaDoador)
        app.delete('/Doador/id/:id', doadorControllers.deletarDoador)
    }

    // GET para listar
    static async listar(req, res) {

        const doador = await DoadorDAO.listar()

        res.status(200).send(doador)

    }

    // GET para buscar
    static async buscarPorID(req, res) {
        const doador = await DoadorDAO.buscarPorID(req.params.id)

        if (!doador) {

            res.status(404).send("Doador não encontrado")
        }

        res.status(200).send(doador)
    }



    // POST
    static async inserir(req, res) {
        const doador = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            email: req.body.email,
            senha: req.body.email
        }

        if (!doador || !doador.nome || !doador.CPF || !doador.email || !doador.senha) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await DoadorDAO.inserir(doador)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Doador criado com sucesso", "Novo doador: ": doador })
    }

    // PUT
    static async atualizaDoador(req, res) {
        const id = await DoadorDAO.buscarPorID(req.params.id)
        if (!id) {
            res.status(404).send('Doador não encontrado')
            return
        }

        const doador = new Doador(req.body.nome, req.body.CPF, req.body.email, req.body.email)



        if (!doador || !doador.nome || !doador.CPF || !doador.email || !doador.senha) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(doador).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await DoadorDAO.atualizar(req.params.id, doador)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o doador')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Doador: ": doador })

    }


    // DELETE
    static async deletarDoador(req, res) {

        const doador = await DoadorDAO.buscarPorID(req.params.id)

        if (!doador) {
            res.status(404).send("Doador não encontrado")
            return
        }

        const result = await DoadorDAO.deletar(req.params.id)

        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Doador não deletado' })
            return
        }

        res.status(200).send(result)

    }
}

export default doadorControllers;