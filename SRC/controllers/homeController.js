const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira view'
        res.render ('home');
    },
    sobre: (req, res) => {
        res.render ('home/sobre')
    },
    servicos: (req, res) => {
        const servico = [
            {
                nome: 'Banho e tosa',
                preco: 'R$ 50,00',
                imagem: "https://www.petlove.com.br/images/breeds/227696/profile/original/perfil-coelho.jpg?1597789099",
                descricao: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit'
            },
            {
                nome: 'consulta veterinária',
                preco: 'R$ 250,00',
                imagem: "https://super.abril.com.br/wp-content/uploads/2017/10/porquinho.png",
                descricao: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit'  
            },
            {
                nome: 'vacinação',
                preco: 'R$ 120,00',
                imagem: "https://i2.wp.com/gatinhobranco.com/wp-content/uploads/2020/04/vitrine-do-bem-gatos-Photo-by-Stratman.jpg?fit=800%2C515",
                descricao: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit' 
            }
        ]
        res.render ('home/servicos', {servico})
    }
}

module.exports = homeController;