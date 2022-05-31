const servicoModels = require('../models/servicosModels');
const { v4: geratorId } = require('uuid');
const path = require('path');
const fs = require('fs-extra');

const servicosController = {
    show: (req, res) => {
        const servicos = servicoModels.findAll()
        res.render('./adm/servicos/servicos', {servicos, title: "Servicos"})
    },
    index: (req, res) => {
        const servico = servicoModels.findById(req.params.id)
        res.render('./adm/servicos/index', {servico, title: "Visualizar"})
    },
    showCreate: (req, res) => {
        res.render('./adm/servicos/cadastro', {title: "Cadastrar"})
    },
    create: (req, res) => {
        const {nome, preco, descricao} = req.body;
        const imagem = req.file.filename;
        const novoServico = {id: geratorId(), nome, preco, imagem, descricao}
        servicoModels.save(novoServico)
        res.redirect('/servicos/adm/servicos/')
    },
    update: (req, res) => {
        if (req.file == true) {
            const {id} = req.params;
            const {nome, preco, descricao} = req.body;
            const imagem = req.file.filename;
            const servicoUpdate = {id, nome, preco, imagem, descricao}
            servicoModels.update(servicoUpdate, id)
        } else {
            const {id} = req.params;
            const {nome, preco, imagem, descricao} = req.body;
            const servicoUpdate = {id, nome, preco, imagem, descricao}
            servicoModels.update(servicoUpdate, id)
        }
        res.redirect('/servicos/adm/servicos/')
    },
    showUpdate: (req, res) => {
        const {id} = req.params;
        const servico = servicoModels.findById(id)
        res.render('./adm/servicos/atualizar', {title: "Atualizar", servico})
    },
    delete: (req, res) => {
        const {id} = req.params;
        const servico = servicoModels.findById(id)
        const localArquivo = path.resolve('public', 'img', 'imagemServicos', servico.imagem) 
        fs.remove(localArquivo, err => {
            if (err) return console.error(err)
            console.log('success!')
          })
        servicoModels.destroy(id)
        res.redirect('/servicos/adm/servicos')
    }
}

module.exports = servicosController;