const homeController = {
    index: (req, res) => {
        res.render ('home');
    },
    login: (req, res) => {
        res.render ('')
    }
}

module.exports = homeController;