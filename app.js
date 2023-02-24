//Importando os packages
import express from 'express'
import cors from 'cors'

//instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())
app.use(cors())

// Adicionando a rota para a página inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao nosso projeto em NODE.JS!');
  });

// importando os controllers
import itemControllers from './src/controllers/itemcontrollers.js'
import doadorControllers from './src/controllers/doadorcontrollers.js'
import donatariocontrollers from './src/controllers/donatariocontrollers.js'

itemControllers.rotas(app)
doadorControllers.rotas(app)
donatariocontrollers.rotas(app)

export default app