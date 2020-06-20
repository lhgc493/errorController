var express = require('express');
var usuarioController = require('../controllers/usuarioController');
var autorizacionController = require('../controllers/autorizacionController');
var router = express.Router();

router.route('/signin').post(autorizacionController.signin);
router.route('/signup').post(autorizacionController.signup);
router.route('/')
    .get(usuarioController.usuarioGet)
    .post(usuarioController.usuarioPost);
router.route('/:id')
    .get(usuarioController.usuarioFindById)
    .patch(usuarioController.usuarioUpdate)
    .delete(usuarioController.UsuarioDelete);


module.exports = router;