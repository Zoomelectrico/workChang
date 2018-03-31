const express = require('express');
const converter = require('json-2-csv');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const QueryInterface = require('../controllers/QueryInterface');

router.post('/clientHistorical', (req, res, next) => {
  QueryInterface.clientHistorical(req.body.nationalID, (err, data) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      converter.json2csv(data, (err, csv) => {
        if(err) {
          res.json({
            success: false,
            msg: err.message,
            err: err
          });
        } else {
          let filePath = path.join(__dirname, `../temp/client-${req.body.nationalID}.csv`);
          fs.writeFile(filePath, csv, err => {
            if(err) {
              res.json({
                success: false,
                msg: err.message,
                err: err
              })
            } else {
              res.download(filePath, `client-${req.body.nationalID}.csv`);
            }
          });
        }
      });
    }
  });
});

router.post('/mechanicHistorical', (req, res, next) => {
  const date1 = req.body.date1;
  const date2 = req.body.date2;
  const nationalID = req.body.nationalID;
  QueryInterface.mechanicHistorical(date1, date2, nationalID, (err, data) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Todo Fino',
        data: data
      });
    }
  });
});

router.post('/carHistorical', (req, res, next) => {
  QueryInterface.carHistorical(req.body.licensePlate, (err, data) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Todo Fino',
        data: data
      });
    }
  });
});

router.post('/modelHistorical', (req, res, next) => {
  const date1 = req.body.date1;
  const date2 = req.body.date2;
  const model = req.body.model;
  QueryInterface.modelHistorical(date1, date2, model, (err, data) => {
    if(err) {
      res.json({
        success: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        success: true,
        msg: 'Todo Fino',
        data: data
      });
    }
  });
});

module.exports = router;