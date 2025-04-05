const express = require('express')
const app = express()
const port = 3000

// Para receber dados no formato JSON
app.use(express.json())

let pessoas = {
  Nomes: []
}

// Rota GET para exibir o formulário
app.get('/Nomes', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

// Rota POST para receber um nome e salvar
app.post('/Nomes', (req, res) => {
  const nome = req.body.nome
  console.log('Nome recebido:', nome)

  // Simular geração de ID como o índice no array
  const id = pessoas.Nomes.length

  // Criar objeto com nome e ID
  const novoNome = { id: id, nome: nome }

  // Adicionar ao array
  pessoas.Nomes.push(novoNome)

  // Responder com status 201 e o ID gerado
  res.status(201).json({ novo_nome_id: novoNome.id })
})

app.listen(port, () => {
	console.log('Example app listening on port: ' + port)
  })