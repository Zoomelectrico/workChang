const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.post('/modify', (req, res, next) => { 
    const user = {
      ID: req.body.ID,
      nationalID: req.body.nationalID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      city: req.body.city,
    };
    ClientController.modifyData(user, (err, user) => {
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

router.post('/CarRegister', (req, res, next) => {
  const carData = {
    "brand": req.body.brand,
    "model": req.body.model,
    "year": req.body.year,
    "licensePlate": req.body.licensePlate,
    "serial": req.body.serial,
    "photoLink": req.body.photoLink,
    "active": req.body.active,
    "OwnerID": req.body.OwnerID
  };
  ClientController.carRegister(carData, (err, car) => {
    if (err) {
      res.json({ success: false, msg: 'Car Registration Fail' });
    } else {
      res.json({ 
        success: true,
        car: car,
        msg: 'All Goog'  
      });
    }
  });  
});

router.post('/askAppoiment', (req, res, next) => {
  ClientController.askAppoiment(req.body.serial, (err, appoiment) => {
    if (err) {
      res.send({ success: false, msg: err.message });
    } else {
      res.json({
        success: true,
        appoiment: appoiment,
        msg: 'Just Fine'
      });
    }
  }); 
});

router.post('/Cars', (req, res, next) => {
  ClientController.getCars(req.body.OwnerID, (err, cars) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({
        success: true,
        cars: cars,
        msg: 'Fuck Yeah'
      });
    }
  })
});

router.post('/search-nationalID', (req, res, next) => {
  ClientController.findByNationalID(req.body.nationalID, (err, user) => {
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
        user: user
      });
    }
  });
});

router.post('/desactive-cars', (req, res, next) => {
  const carSerial = req.body.carSerial;
  ClientController.desactiveCars(carSerial, (err, car) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Carro desactivado correctamente',
        car: car
      });
    }
  });
});

router.get('/all-appoiments/:id', (req, res, next) => {
  ClientController.getAksedAppointments(req.params.id, (err, appoiments) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Citas Encontradas',
        appoiments: appoiments
      });
    }
  });
});

module.exports = router;