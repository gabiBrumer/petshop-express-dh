const express = require ('express');
const router = express.Router();
const servicoController = require('../controllers/servicosController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.resolve('public', 'img', 'imagemServicos');
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imageName = Date.now() + file.originalname;
        callback(null, imageName);
    }
})

const fileUpload = multer({storage});

router.get('/servicos/adm/servicos', servicoController.show);
router.get('/servicos/adm/visualizar/:id', servicoController.index)

router.get('/servicos/adm/cadastrar', servicoController.showCreate);
router.post('/servicos/adm/cadastrar',fileUpload.single("imagem"),servicoController.create);

router.get('/servicos/adm/atualizar/:id', servicoController.showUpdate);
router.put('/servicos/adm/atualizar/:id', fileUpload.single("imagem"),servicoController.update);

router.delete('/servicos/adm/delete/:id', servicoController.delete); 

module.exports = router;