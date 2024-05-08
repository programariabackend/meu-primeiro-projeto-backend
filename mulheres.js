const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'jane nam',
        imagem: 'https://classic.exame.com/wp-content/uploads/2022/08/Wandinha.jpg?quality=70&strip=info&w=743',
        minibio: 'aluna da programaria',
    
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    }, 
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
]

function mostraMulheres(request, response) {

    response.json(mulheres)
    
    }


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)