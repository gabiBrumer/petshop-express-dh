const db = require ('../database/db.json')

const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira view'
        res.render ('home', {title: "Home"});
    },
    sobre: (req, res) => {
        res.render ('home/sobre')
    },
    servicos: (req, res) => {
        const servico = db.servicos;
        res.render ('home/servicos', {servico})
    },
    login: (req, res) => {
        res.render('home/login')
    },
    cadastro: (req, res) => {
        res.render('home/cadastro', {title: "Cadastrar"})
    },
    contato: (req, res) => {
        res.render('home/contato')
    }
}

module.exports = homeController;