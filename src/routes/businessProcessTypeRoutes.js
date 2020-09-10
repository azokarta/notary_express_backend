const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const BusinessProcessType = require('../models/BusinessProcessType');

const error = require('../utils/error');

router.get('/businessprocesstype/:businessprocesstypeId', async (req, res) => {
  const { language } = req.headers;
  const { businessprocesstypeId } = req.params;

  BusinessProcessType.findById(businessprocesstypeId)
    .then((businessprocesstype) => {
      res.json({ success: true, data: businessprocesstype });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/businessprocesstypes', (req, res) => {
  const { language } = req.headers;
  BusinessProcessType.find()
    .then((businessprocesstypes) => {
      res.json({ success: true, data: businessprocesstypes });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.post('/businessprocesstype', async (req, res) => {
  const { language } = req.headers;
  const { kaz, rus } = req.body;
  const newBusinessProcessType = new BusinessProcessType({
    kaz,
    rus,
  });

  await newBusinessProcessType
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) => {
      res.status(400).json({ success: false, error: error(400, language) });
    });
});

module.exports = router;
