const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Banco de dados em memória
let pessoas = {
  Nomes: []
}

// Dados fixos dos integrantes
const data = {
  integrantes: [
    { nome: 'Fulano da Silva' },
    { nome: 'Ciclano Sauro' }
  ]
}

// ✅ NOVA ROTA: exibir index.html também na raiz "/"
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

// Rota GET: exibir formulário HTML
app.get('/Nomes', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

// Rota POST: receber e salvar um novo nome
app.post('/Nomes', (req, res) => {
  const nome = req.body.nome
  console.log('Nome recebido:', nome)

  const id = pessoas.Nomes.length
  const novoNome = { id: id, nome: nome }

  pessoas.Nomes.push(novoNome)

  res.status(201).json({ novo_nome_id: novoNome.id })
})

// Rota GET: retornar todos os nomes cadastrados
app.get('/Nomes/lista', (req, res) => {
  res.json(pessoas)
})

// Rota GET: retornar lista fixa de integrantes
app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log('Servidor rodando em: http://localhost:' + port)
})
