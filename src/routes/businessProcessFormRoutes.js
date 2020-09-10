const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const BusinessProcessForm = require('../models/BusinessProcessForm');

const error = require('../utils/error');

router.get('/businessProcessForm/:businessProcessFormId', async (req, res) => {
  const { language } = req.headers;
  const { businessProcessFormId } = req.params;

  BusinessProcessForm.findById(businessProcessFormId)
    .then((businessProcessForm) => {
      res.json({ success: true, data: businessProcessForm });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/businessProcessForms', (req, res) => {
  const { language } = req.headers;
  BusinessProcessForm.find()
    .then((businessProcessForms) => {
      res.json({ success: true, data: businessProcessForms });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.post('/businessProcessForm', async (req, res) => {
  const { language } = req.headers;
  const { kaz, rus, businessProcessStepId, sortBy, inputType } = req.body;
  const newBusinessProcessForm = new BusinessProcessForm({
    kaz,
    rus,
    businessProcessStepId,
    sortBy,
    inputType,
  });

  await newBusinessProcessForm
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) => {
      res.status(400).json({ success: false, error: error(400, language) });
    });
});

module.exports = router;
