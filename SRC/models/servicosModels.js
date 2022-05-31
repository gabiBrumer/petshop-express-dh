const fs = require('fs');
const path = require('path');
const database = path.join('src', 'database', 'db.json');

const open = () => {
    let content = fs.readFileSync(database, 'utf8');
    const servico = JSON.parse(content);
    return servico;
}
const store = (db) => {
    const content = JSON.stringify(db, null, 4);
    fs.writeFileSync(database, content, 'utf8');
}

const servicoModels = {
    findAll: () => {
        const db = open ();
        return db.servicos
    },
    findById: (id) => {
        const db = open ();
        const servico = db.servicos.find(servico => {
            return servico.id == id
        })
        return servico;
    },
    save: (novoServico) => {
        const db = open ();
        db.servicos.push(novoServico)
        store(db)
    },
    update: (servicoUpdate, id) => {
        const db = open ();
        const index = db.servicos.findIndex(servico => {
            return servico.id == id
        })
        db.servicos[index] = servicoUpdate
        store (db)
    },
    destroy: (id) => {
        const db = open ();
        const index = db.servicos.findIndex(servico => {
            return servico.id == id
        })
        db.servicos.splice(index, 1)
        store (db)
    } 
}

module.exports = servicoModels;