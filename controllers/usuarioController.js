var Usuario = require('../models/usuarioModel');

var jwt = require('jsonwebtoken');
var body = require('body-parser');

exports.usuarioGet = async(req, res) => {

    var usuario = await Usuario.find();
    res.status(200).json({
        ok: true,
        usuario: usuario,

    })


}
exports.usuarioPost = async(req, res) => {
    body = req.body;

    var usuario = await Usuario.create(body);
    var token = jwt.sign({ id: usuario._id }, process.env.JWT_SEED, { expiresIn: process.env.JWT_EXP })
    res.status(200).json({
        ok: true,
        usuario: usuario,
        token: token
    })

}
exports.usuarioFindById = async(req, res, next) => {

    var id = req.params.id;
    var usuario = await Usuario.findById(id);

    if (!usuario) {

    }

    res.status(200).json({
        ok: true,
        usuario: usuario
    })


}
exports.usuarioUpdate = async(req, res, next) => {
    body = req.body;
    var id = req.params.id;
    var usuario = await Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true });

    res.status(200).json({
        ok: true,
        usuario: usuario
    })
}
exports.UsuarioDelete = async(req, res) => {
    var id = req.params.id;
    var usuario = await Usuario.findByIdAndDelete(id);



    res.status(200).json({
        ok: true,
        usuario: null
    })


}