const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Jane Nam',
        Imagem: 'https://classic.exame.com/wp-content/uploads/2022/08/Wandinha.jpg?quality=70&strip=info&w=743',
        minibio: 'Estudante de programação '
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)