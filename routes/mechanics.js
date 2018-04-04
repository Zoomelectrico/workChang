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

router.get('/replacements/:model', (req, res, next) => {
  MechanicController.getRepuestos(req.params.model, (err, replacements) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'repuestos encontrados',
        replacements: replacements
      });
    }
  });
});

router.post('/close-order', (req, res, next) => {
  MechanicController.cerrarOrden(req.body.id, err => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Orden Cerrada'
      });
    }
  });
});

router.post('/change-order', (req, res, next) => {
  MechanicController.actualizarOrden(req.body.id, req.body.orden, err => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Orden Actualizada'
      });
    }
  });
});

router.get('/order/:id', (req, res, next) => {
  MechanicController.getOrdenByID(req.params.id, (err, ro) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Orden encontrada',
        RepairOrder: ro
      });
    }
  });
});

router.get('/car/:serial', (req, res, next) => {
  MechanicController.getCarroBySerial(req.params.serial, (err, car) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      })
    } else {
      res.json({
        success: true,
        msg: 'Carro encontrado',
        car: car
      });
    }
  });
});

module.exports = router;