import app from './app.js'

// escolhendo a port em que o servidor será aberta
const port = 3000

//abrindo servidor da porta escolhida
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}/`)
});