const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const ManagerController = require('../controllers/ManagerController');

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

router.post('/create-RepairOrder', (req, res, next) => {
  const entryDate = moment({
    y: req.body.entryDate.year,
    M: req.body.entryDate.month,
    d: req.body.entryDate.day
  });
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

module.exports = router;