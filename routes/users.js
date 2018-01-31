const express = require('express');
const passport = require('passport');
const  jwt = require('jsonwebtoken');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/registro', (req, res, next) => {
  console.log(req.body);
  let user = {
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    aptoCasa: req.body.aptoCasa,
    calle: req.body.calle,
    ciudad: req.body.ciudad,
    estado: req.body.estado
  };
  Usuario.addUser(user, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed'});
    } else {
      res.json({success: true, msg: 'Fine'});
    }
  });
});

router.post('/autenticacion', (req, res, next) => {
  res.send('Autenticacion');
});

router.get('/perfil', (req, res, next) => {
  res.send('perfil');
});

module.exports = router;