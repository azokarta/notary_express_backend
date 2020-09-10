const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Mandatory = require('../models/Mandatory');

const error = require('../utils/error');

router.get('/mandatory/:_id', async (req, res) => {
  const { language } = req.headers;
  const { _id } = req.params;

  Mandatory.findById(_id)
    .then((mandatory) => {
      res.json({ success: true, data: mandatory });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/mandatories', (req, res) => {
  const { language } = req.headers;
  Mandatory.find()
    .then((mandatories) => {
      res.json({ success: true, data: mandatories });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

// router.post('/mandatory', async (req, res) => {
//   const { language } = req.headers;
//   const { kaz, rus, mandatoryId } = req.body;

//   const newMandatory = new Mandatory({ mandatoryId, kaz, rus });

//   await newMandatory
//     .save()
//     .then(() => res.json({ success: true }))
//     .catch((err) => {
//       res.status(400).json({ success: false, error: error(400, language) });
//     });
// });

module.exports = router;
