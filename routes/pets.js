const express = require ('express');
const router = express.Router()

router.get ('/pets', (req, res) => res.send ('Lista de pets!'))
router.get ('/pets/:id', (req, res) => res.send ('Detalhes do pet: ' + req.params.id))
router.post ('/pets', (req, res) => res.send ('Cadastro de pet'))
router.put ('/pets/:id', (req, res) => res.send ('Atualização de pet:' + req.params.id))
router.delete ('/pets/:id', (req, res) => res.send ('Exclusão de pet' + req.params.id))

/*
GET - /pets - LISTAR todos os pets;
GET - /pets/:id - LISTAR um pet por seu ID; Ex: (/pets/1)
POST - /pets - CRIAR um novo pet; 
PUT - /pets/:id - ATUALIZAR um pet por seu ID; Ex: (/pets/1)
DELETE - /pets/:id - DELETAR um pet por ID; Ex: (/pets/1)
URI <-> endpoint - Normalmente o que fica após o domínio;
http://192.168.0.7:3000/pets
*/

module.exports = router;