const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.get('/sobre', homeController.sobre);
router.get('/servicos', homeController.servicos);
router.get('/login', homeController.login);
router.get('/cadastro', homeController.cadastro);
router.get('/contato', homeController.contato);
router.get('/registrar', homeController.create);
router.post('/registrar', homeController.store);
router.get('/adm/index', homeController.showAdm);

module.exports = router;

