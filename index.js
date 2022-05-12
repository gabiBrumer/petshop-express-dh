const express = require ('express');
const app = express();
const petsRouter = require('./routes/pets')

app.use(petsRouter);

// Rotas dos serviços;

app.get ('/', (req, res) => {
    res.send('Hello World!')    
})

app.listen(3000, () => console.log ('Rodando na porta 3000'))