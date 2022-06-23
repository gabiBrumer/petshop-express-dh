const db = require ('../database/db.json');
const {v4: geradorDeId} =  require ('uuid');

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
    },
    create: (req, res) => {
        res.render('home/registro')
    },
    store: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);

        if(errors.isEmpty()) {
            let content = fs.readFileSync("./db.json", "utf8");
            const db = JSON.parse(content);
    
            const { nome, email, senha } = req.body;
    
            const usuario = {id: geradorDeId(), nome, email, senha }
    
            db.usuarios.push(usuario);
            content = JSON.stringify(db);
    
            fs.writeFileSync("./db.json", content);
    
            return res.redirect("/adm/servicos");
        }

        return res.render("home/registro", {listaDeErros: errors.errors, old: req.body})    
    },
    showAdm: (req, res) => {
        res.render('adm/')
    }
}

module.exports = homeController;