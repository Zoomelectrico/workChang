const express = require('express');
const router = express.Router();
const MechanicController = require('../controllers/MechanicController');


router.post('/repair-orders', (req, res, next) => {
    MechanicController.getOrdenesReparacion(req.body.ID, (err, repairs) => {
      if (err) {
        res.json({
          success: false,
          msg: err.message,
          err: err
        });
      } else {
          console.log("sera aqui? ");
        res.json({
          success: true,
          msg: 'Ordenes de Reparacion del mecanico',
          repairs: repairs
        });
      }
    });
  });

  module.exports = router;