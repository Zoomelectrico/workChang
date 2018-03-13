const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const UserController = require('../controllers/UserController');

router.post('/register', (req, res, next) => {
  const user = {
    "nationalID": req.body.nationalID,
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "username": req.body.username,
    "password": req.body.password,
    "addressLine1": req.body.addressLine1,
    "addressLine2": req.body.addressLine2,
    "city": req.body.city,
    "type": req.body.type 
  };
  UserController.registerUser(user, (err, user) => {
    if (err) {
      res.json({success: false, msg: err.message });
    } else {
      res.json({success: true, msg: 'El usuario ha sido creado de manera exitosa'});
    }
  });
});

router.post('/auth', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password; 

  User.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    UserController.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({data: user}, 'yoursecret', {
          expiresIn: 604800
        });
        res.json({
          success: true,
          token: token,
          user: user
        });
      } else {
        return res.json({success: false, msg: 'Las contraseñas no coinciden'});
      }
    });
  });
});

router.post('/searchClient', (req, res, next) => {
  console.log(req.body.userID);
  UserController.searchClient(req.body.userID, (err, client) => {
    if (err) {
      res.send({ success: false, msg: err });
    } else { 
      res.send({
        success: true,
        msg: 'Cliente encontrado',
        client: client
      });
    }     
  });
});

router.get('/get-workers', (req, res, next) => {
  UserController.getAllWorkers((err, users) => {
    if (err) {
      res.json({ success: false, msg: err.message, err: err})
    } else {
      res.json({
        success: true,
        msg: 'Usuarios encontrados',
        users: users
      });
    }
  });
});

router.post('/searchUsersByID', (req, res, next) => {
  UserController.searchUser(req.body.userID, (err, users) => {
    if (err) {
      res.json({ success: false, msg: err.message, err: err})
    } else {
      res.json({
        success: true,
        msg: 'Usuarios encontrados',
        users: users
      });
    }
  });
});

//modificar usuario
router.post('/modify-User', (req, res, next) => {
  const user = {
    ID: req.body.ID,
    nationalID: req.body.nationalID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    type: req.body.type
  };
  UserController.modifyData(user, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Modificación del usuario correcta',
        user: user
      });
    }
  })
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;