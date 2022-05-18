const express = require ('express');
const app = express();
const homeRouter = require ('./src/routes/homeRouter');
const petsRouter = require('./src/routes/petsRouter');

app.set('view engine', 'ejs'); //Padrão express que já configura a pasta views;
// app.set ('views', './views'); // Quando queremos mudar o nome da pasta;

app.use(homeRouter);
app.use(petsRouter);

app.listen(3000, () => console.log ('Rodando na porta 3000'))

/*
GET - /pets - LISTAR todos os pets;
GET - /pets/:id - LISTAR um pet por seu ID; Ex: (/pets/1)
POST - /pets - CRIAR um novo pet; 
PUT - /pets/:id - ATUALIZAR um pet por seu ID; Ex: (/pets/1)
DELETE - /pets/:id - DELETAR um pet por ID; Ex: (/pets/1)
URI <-> endpoint - Normalmente o que fica após o domínio;
http://192.168.0.7:3000/pets
*/