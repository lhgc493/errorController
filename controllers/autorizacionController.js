var Usuario = require('../models/usuarioModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var body = require('body-parser');

exports.signup = async(req, res) => {

    try {
        body = req.body;
        var usuario = await Usuario.create({
            nombre: body.nombre,
            correo: body.correo,
            password: body.password,
            passwordConfirmar: body.passwordConfirmar
        });
        var token = jwt.sign({ id: usuario._id }, process.env.JWT_SEED, { expiresIn: process.env.JWT_EXP })
        res.status(400).json({
            ok: true,
            usuario: usuario,
            token: token
        })


    } catch (error) {
        res.status(200).json({
            ok: false,
            error: error,
            msj: 'nose puede'
        })
    }


}

exports.signin = async(req, res) => {


}