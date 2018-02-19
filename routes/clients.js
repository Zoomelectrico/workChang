const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.post('/CarRegister', (req, res, next) => {
  const car = {
    "brand": req.body.brand,
    "model": req.body.model,
    "year": req.body.year,
    "licensePlate": req.body.licensePlate,
    "serial": req.body.serial,
    "photoLink": req.body.photoLink,
    "active": req.body.active,
    "OwnerID": req.body.OwnerID
  };
  ClientController.carRegister(car, (err, car) => {
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
      res.send({ success: false, msg: err });
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
  ClientController.getCars(req.body.ClientID, (err, cars) => {
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

module.exports = router;