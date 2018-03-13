const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const AdministratorController = require('../controllers/AdministratorController');

router.get('/replacements', (req, res, next) => {
  AdministratorController.getAllReplacements((err, replacements) => {
    if (err) {
      res.json({ success: false, msg: err.message, err: err})
    } else {
      res.json({
        success: true,
        msg: 'Repuestos encontrados',
        replacements: replacements
      });
    }
  });
});

router.post('/searchByPartNumber', (req, res, next) => {
  console.log("este es el numero" + req.body.partNumber);
  AdministratorController.searchReplacementByPartNumber(req.body.partNumber, (err, replacement) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Usuario encontrado',
        replacement: replacement
      });
    }
  });
});

router.post('/new-Replacement', (req, res, next) => {
  const replacement = {
    partNumber: req.body.partNumber,
    name: req.body.name,
    brand: req.body.brand,
    inStock: req.body.inStock,
    forModel: req.body.forModel
  };
  AdministratorController.insertReplacement(replacement, (err, replacement) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Repuesto insertado con exito',
        replacement: replacement
      });
    }
  })
});

router.post('/modify-Replacement', (req, res, next) => {
  const replacement = {
    partNumber: req.body.partNumber,
    name: req.body.name,
    brand: req.body.brand,
    inStock: req.body.inStock,
    forModel: req.body.forModel
  };
  AdministratorController.modifyReplacement(replacement, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Modificación del repuesto correcta',
        replacement: replacement
      });
    }
  })
});

router.post('/users/change-role', (req, res, next) => {
  AdministratorController.changeRole(req.body.nationalID, req.body.newRole, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Rol cambio con exito',
        user: user
      });
    }
  })
});


module.exports = router;
