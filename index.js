const express = require ('express');
const app = express();
const homeRouter = require ('./src/routes/homeRouter');
const petsRouter = require('./src/routes/petsRouter');
const servicosRouter = require('./src/routes/servicosRouter');

const methodOverride = require('method-override')
app.use(methodOverride("_method"));

app.set('view engine', 'ejs'); //Padrão express que já configura a pasta views;
app.set ('views', 'src/views'); // Quando queremos mudar o nome da pasta;
app.use(express.static('public'))

app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);

app.use((req, res) => {
    return res.status(404).render ('not-found', {error: 'Página não encontrada!'})
})

app.listen(3000, () => console.log ('Rodando...'))

/*
GET - /pets - LISTAR todos os pets;
GET - /pets/:id - LISTAR um pet por seu ID; Ex: (/pets/1)
POST - /pets - CRIAR um novo pet; 
PUT - /pets/:id - ATUALIZAR um pet por seu ID; Ex: (/pets/1)
DELETE - /pets/:id - DELETAR um pet por ID; Ex: (/pets/1)
URI <-> endpoint - Normalmente o que fica após o domínio;
http://192.168.0.7:3000/pets
*/