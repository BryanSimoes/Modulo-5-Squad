import express from 'express'

const app = express()

app.use(express.json())

import itemControllers from './src/controllers/itemcontrollers.js'
import doadorControllers from './src/controllers/doadorcontrollers.js'
import donatariocontrollers from './src/controllers/donatariocontrollers.js'

itemControllers.rotas(app)
doadorControllers.rotas(app)
donatariocontrollers.rotas(app)

export default app