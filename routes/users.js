const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

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
  User.addUser(user, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed'});
    } else {
      res.json({success: true, msg: 'Fine'});
    }
  });
});

router.post('/autenticacion', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({data: user}, 'yoursecret', {
          expiresIn: 604800
        });
        res.json({
          success: true,
          token: `Bearer ${token}`,
          user: {
            id: user.ID,
            nombre: `${user.nombre} ${user.apellido}`,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong Password'});
      }
    });
  });
});

router.get('/perfil', (req, res, next) => {
  res.send('perfil');
});

module.exports = router;