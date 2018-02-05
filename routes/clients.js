const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.post('./askAppoiment', (req, res, next) => {
  ClientController.askAppoiment(req.body.cardID, (err, appoiment) => {
    if (err) { 
      console.error(err); 
    } else {
      res.send(appoiment); 
    }
  });
});