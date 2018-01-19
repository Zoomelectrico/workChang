const express = require('express');
const router = express.Router();

router.get('/registro', (req, res, next) => {
  res.send('REGISTRO');
});

router.get('/autenticacion', (req, res, next) => {
  res.send('Autenticacion');
});

router.get('/perfil', (req, res, next) => {
  res.send('perfil');
});

router.get('/validacion', (req, res, next) => {
  res.send('Validacion');
});

module.exports = router;