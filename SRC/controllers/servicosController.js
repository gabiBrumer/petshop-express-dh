const servicoModels = require('../models/servicosModels');
const { v4: geratorId } = require('uuid');
const path = require('path');
const fs = require('fs-extra');

const servicosController = {
    show: (req, res) => {
        // Usando a lógica que criamos na models que nos possibilita "Encontrar"/mostrar todos os serviços:
        const servicos = servicoModels.findAll()
        res.render('./adm/servicos/servicos', {servicos, title: "Servicos"})
    },
    index: (req, res) => {
        // Usando o método que criamos na models de encontrar atráves de um ID: Fazendo uma requisição através do parâmetro passando o id:
        const servico = servicoModels.findById(req.params.id)
        res.render('./adm/servicos/index', {servico, title: "Visualizar"})
    },
    // Para mostrar a criação:
    showCreate: (req, res) => {
        res.render('./adm/servicos/cadastro', {title: "Cadastrar"})
    },
    // Para criar:
    create: (req, res) => {
        // Criando uma propriedade, preco, descrição fazendo a requisição de nosso body (Banco de dados):
        const {nome, preco, descricao} = req.body;
        // Criando uma constante para requerir uma imagem:
        const imagem = req.file.filename;
        // Criando um novo serviço, passando o gerador de ID para gerar um novo ID, e as propriedades existentes:
        const novoServico = {id: geratorId(), nome, preco, imagem, descricao}
        //Salvando essas novas informações em nosso banco de dados:
        servicoModels.save(novoServico)
        res.redirect('/servicos/adm/servicos/')
    },
    // Para atualizar:
    update: (req, res) => {
        // Fazendo uma comparação através da requisição de nosso arquivo e se for verdadeiro...:
        if (req.file == true) {
            // Se for verdadeiro, desestruturando nosso id passamos ele como parâmetro:
            const {id} = req.params;
            // Fazemos a requisição de nossas propriedades através de seu "corpo":
            const {nome, preco, descricao} = req.body;
            // Fazemos a requisição de um "arquivo" através de seu nome:
            const imagem = req.file.filename;
            // Passamos o que gostaríamos de atualizar, no caso as propriedades:
            const servicoUpdate = {id, nome, preco, imagem, descricao}
            // Atualizamos nosso servicoModels através da nova varíavel passando como parâmetro seu id:
            servicoModels.update(servicoUpdate, id)
        } else {
            const {id} = req.params;
            const {nome, preco, imagem, descricao} = req.body;
            const servicoUpdate = {id, nome, preco, imagem, descricao}
            servicoModels.update(servicoUpdate, id)
        }
        res.redirect('/servicos/adm/servicos/')
    },
    // Para mostrar a atualização:
    showUpdate: (req, res) => {
        // Novamente fazemos a requisição do ID passando o como parâmetro:
        const {id} = req.params;
        // Fazemos um find para atualizar o serviço através de seu id:
        const servico = servicoModels.findById(id)
        res.render('./adm/servicos/atualizar', {title: "Atualizar", servico})
    },
    // Para deletar:
    delete: (req, res) => {
        // Novamente passando fazendo a requsição do id, passando o como parâmetro em uma desestruturação:
        const {id} = req.params;
        // Fazemos um find para encontrar o serviço através de seu id:
        const servico = servicoModels.findById(id)
        // Converte uma string de caminho em uma path, passando o local onde queremos remover o objeto:
        const localArquivo = path.resolve('public', 'img', 'imagemServicos', servico.imagem)
         // Usando o método file system para remover:
        fs.remove(localArquivo, err => {
            if (err) return console.error(err)
            console.log('success!')
          })
          // Deletando a propriedade através de seu id: 
        servicoModels.destroy(id)
        res.redirect('/servicos/adm/servicos')
    }
}

module.exports = servicosController;