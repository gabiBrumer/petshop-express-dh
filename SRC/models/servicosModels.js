// Requerindo o pacote file system:
const fs = require('fs');

// Requerindo o pacote path (caminho):
const path = require('path');

// Trazendo o caminho do arquivo do banco de dados:
const database = path.join('src', 'database', 'db.json');

// Constante para abrir o banco de dados:
const open = () => {
    // Costante para se ler os arquivos que estão no banco de dados:
    let content = fs.readFileSync(database, 'utf8');
    // Para ser ler o arquivo JSON em string:
    const servico = JSON.parse(content);
    // Retornando a variável que lemos:
    return servico;
}
// Constante que criamos para armazenar, onde estamos passando o banco de dados como callback (armazenamento):
const store = (db) => {
    // Constante que estamos convertendo o arquivo lido JSON em string:
    const content = JSON.stringify(db, null, 4);
    // Escrevendo o arquivo JSON no arquivo do banco de dados:
    fs.writeFileSync(database, content, 'utf8');
}

// Constante padrão que estamos criando para facilitar o trabalho do controller:
const servicoModels = {
    // Método para encontrar todos os arquivos:
    findAll: () => {
        // Passando como parâmetro a constante que criamos para se abrir o banco de dados:
        const db = open ();
        // Retornando o banco de dados, objeto "serviços":
        return db.servicos
    },
    // Método que criamos para encontrar uma propriedade específica:
    findById: (id) => {
        // Novamente abrimos o banco de dados:
        const db = open ();
        // Usando o arquivo db objeto serviços um find em nossa propeidade serviços para se encontrar um serviço específico:
        const servico = db.servicos.find(servico => {
            return servico.id == id
        })
        // Retornarmos o serviço que queremos:
        return servico;
    },
    // Método para salvamos esse novo serviço:
    save: (novoServico) => {
        // Novamente abrimos nosso banco de dados:
        const db = open ();
        // Usando o arquivo db, objeto damos um "empurrão" nesse novo serviço que encontramos para armazena-lo em nosso banco:
        db.servicos.push(novoServico)
        // Salvando em nosso banco de dados:
        store(db)
    },
    // Método que criamos para atualizarmos um serviço, passamos como parâmetro o serviço e seu id:
    update: (servicoUpdate, id) => {
        // Constante para abrir banco de dados:
        const db = open ();
        // Constante que criamos para atualizar um objeto através de seu Index usando findIndex:
        const index = db.servicos.findIndex(servico => {
            // Validando que o id desse serviço que estamos atualizando for o mesmo id do serviço salvo no db:
            return servico.id == id
        })
        // Passando o arquivo bd e seriço como propriedade e index como referência salvando-o:
        db.servicos[index] = servicoUpdate
        // Salvando informações:
        store (db)
    },
    // Método que criamos para deletar um serviço:
    destroy: (id) => {
        // Abrindo o banco de dados novamente:
        const db = open ();
        // Fazendo o mesmo procedimento do método acima encontando-o através do seu index:
        const index = db.servicos.findIndex(servico => {
            // Retornando o serviço comparando o com o id do existente:
            return servico.id == id
        })
        // Passando o arquivo bd e serviço como propriedade e utilizando o método splice que remove um objeto através do index, passando a quantidade que gostaria de remover:
        db.servicos.splice(index, 1)
        // Salvando-o:
        store (db)
    } 
}

module.exports = servicoModels;