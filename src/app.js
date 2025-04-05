const express = require('express')
const app = express()
const port = 3000

// Importante para converter os dados que chegam no POST para JSON. Sem isso o body da requisição não aparece
app.use(express.json());

let data = {
	'Nomes' : []
}

app.get('/Nomes', (req, res) => {
	res.sendFile('views/index.html', { root: __dirname })
})

app.post('/Nomes', (req, res) => {
	
	// Normalmente, estes dados são eviados ao banco de dados, que nos retorna um ID
	// Vamos simular isso atribuindo ao ID o INDEX que o item terá no array
	
	let newNome = req.body
	newNome.id = 

	data.customers.push(newCustomer)
	res.status(201).json({"new_customer_id": newCustomer.id})
})

// app.get('/customers/:id', (req, res) => {
//     let idUsuario = req.params.id
//     //Retornar apenas o elemento da lista que tem o id solicitado
// })


// Essa é a forma de implementar este endpoint
app.get('/', (req, res) => {
	res.sendFile('views/index.html', { root: __dirname })
	})


// app.put('/customers/:id', (req, res) => {
//     let idUsuario = req.params.id
//     //Alterar dados do elemento da lista com id
// })


// app.delete('/customers/:id', (req, res) => {
//     let idUsuario = req.params.id
//     // Remover elemento da lista com id 
// })


app.listen(port, () => {
  console.log('Example app listening on port: ' + port)
})