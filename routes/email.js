const express = require('express');
const router = express.Router();
const e = require('../controllers/EmailController');

router.post('/contact', (req, res, next) => {
  e.contactEmail(req.body.email, req.body.msg ,req.body.name, (err, info) => {
    if(err) {
      res.json({
        success: false,
        err: err,
        msg: err.message
      });
    } else {
      res.json({
        success: true,
        msg: 'Hemos registrado su comentario',
        info: info
      });
    }
  });
});

module.exports = router;