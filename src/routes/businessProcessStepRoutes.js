const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const BusinessProcessStep = require('../models/BusinessProcessStep');

const error = require('../utils/error');

router.get('/businessprocessstep/:businessprocessstepId', async (req, res) => {
  const { language } = req.headers;
  const { businessprocessstepId } = req.params;

  BusinessProcessStep.findById(businessprocessstepId)
    .then((businessprocessstep) => {
      res.json({ success: true, data: businessprocessstep });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/businessprocesssteps', (req, res) => {
  const { language } = req.headers;
  BusinessProcessStep.find()
    .then((businessprocesssteps) => {
      res.json({ success: true, data: businessprocesssteps });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.post('/businessprocessstep', async (req, res) => {
  const { language } = req.headers;
  const { kaz, rus, mandatory, sortBy, businessProcessTypeId } = req.body;
  //   console.log(kaz, rus, mandatory, sortBy, businessProcessTypeId);
  const newBusinessProcessStep = new BusinessProcessStep({
    kaz,
    rus,
    mandatory,
    sortBy,
    businessProcessTypeId,
  });

  await newBusinessProcessStep
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) => {
      res.status(400).json({ success: false, error: error(400, language) });
    });
});

module.exports = router;
