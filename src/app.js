const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let pessoas = {
  Nomes: []
}


const data = {
  integrantes: [
    { nome: 'Fulano da Silva' },
    { nome: 'Ciclano Sauro' }
  ]
}


app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})


app.get('/Nomes', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})


app.post('/Nomes', (req, res) => {
  const nome = req.body.nome
  console.log('Nome recebido:', nome)

  const id = pessoas.Nomes.length
  const novoNome = { id: id, nome: nome }

  pessoas.Nomes.push(novoNome)

  res.status(201).json({ novo_nome_id: novoNome.id })
})


app.get('/Nomes/lista', (req, res) => {
  res.json(pessoas)
})


app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log('Servidor rodando em: http://localhost:' + port)
})
