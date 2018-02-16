const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.post('/client/CarRegister', (req, res, next) => {
  const car = {
    "brand": req.body.brand,
    "model": req.body.model,
    "year": req.body.year,
    "licensePlate": req.body.licensePlate,
    "serial": req.body.serial,
    "photoLink": req.body.photoLink,
    "OwnerID": req.params.id
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

module.exports = router;