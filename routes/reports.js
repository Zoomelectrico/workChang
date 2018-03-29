const express = require('express');
const json2csv = require('json2csv');
const fs = require('fs');
const router = express.Router();
const QueryInterface = require('../controllers/QueryInterface');

router.get('/clientHistorical/:id', (req, res, next) => {
  QueryInterface.clientHistorical(req.params.id, (data) => {
    try {
      const fields = [];
      let csv = json2csv({ data: data, fields: fields });
      fs.writeFile(`Reporte_${req.body.nombre}`, (csv, err) => {
        res.sendfile();
      });
    } catch(err) {
      console.error(err);
    }
  });
});

module.exports = router;