const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const ManagerController = require('../controllers/ManagerController');
const MechanicController = require('../controllers/MechanicController');

router.get('/appointments', (req, res, next) => {
  ManagerController.getAppointments((err, appointments) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Citas pendientes',
        appointments: appointments
      });
    }
  });
});

router.get('/actives-orders', (req, res, next) => {
  ManagerController.getActivesOrders((err, activesOrders) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Ordenes de Reparacion activas',
        activesOrders: activesOrders
      });
    }
  });
});

router.post('/order-details', (req, res, next) => {
   const repairOrderID = req.body.repairOrderID;
   const mechanicID = req.body.mechanicID; 
   const carID = req.body.carID; 
  ManagerController.verDetallesReparacion(repairOrderID, mechanicID, carID, (err, data) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Detalles de la Orden de reparacion',
        detalles: data
      }); 
    }
  });
});

router.post('/create-RepairOrder', (req, res, next) => {
  const entryDate = (req.body.entryDate.year).toString()+'-'+(req.body.entryDate.month).toString()+'-'+(req.body.entryDate.day).toString(); 
  console.log(entryDate);
  const MechanicID = req.body.MechanicID;
  const AppointmentID = req.body.AppointmentID;
  ManagerController.introduceRepairOrder(entryDate, MechanicID, AppointmentID, (err, repairOrder) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Orden de Repacion creada',
        repairOrder: repairOrder
      });
    }
  });
});

router.get('/available-mechanics', (req, res, next) => {
  MechanicController.getMecanicosLibres((err, mechanics) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Mecanicos Disponibles',
        mechanics: mechanics
      });
    }
  });
});

module.exports = router;