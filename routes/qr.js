const express = require('express');
const router = express.Router();
const QRController = require('../controllers/QRController');

router.post('/', (req, res, next) => {
  const qr = req.body.qr;
  QRController.uploadQR(qr, (err, data) => {
    if(err) {
      res.json({
        sucess: false,
        msg: err.message,
        err: err
      });
    } else {
      res.json({
        sucess: true,
        msg: 'QR has been Uploaded',
        data: data
      });
    }
  });
});


module.exports = router;