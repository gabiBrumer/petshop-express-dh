const petController = {
    index: (req, res) => res.send ('Lista de pets'),
    create: (req, res) => res.send ('Criação do pet'),
    show: (req, res) => res.send ('Detalhes do pet: ' + req.params.id),
    update: (req, res) => res.send ('Atualização de pet:' + req.params.id),
    destroy: (req, res) => res.send ('Exclusão de pet' + req.params.id),
}

module.exports = petController;

/* index: Listar - GET;
create: criar - POST;
show: mostrar - GET;
update: atualizar - PUT;
destroy: deletar - DELETE;
*/

/* C - Create (Criar (create)) - Get;
R - Reading (listar (index)) - Get;
U - Update (Atualizar ) - Post;
D - Delete (Deletar) - Delete;
*/