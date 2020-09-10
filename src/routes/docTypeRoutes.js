const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const DocType = require('../models/DocType');

const error = require('../utils/error');

router.get('/doctype/:doctypeId', async (req, res) => {
  const { language } = req.headers;
  const { doctypeId } = req.params;

  DocType.findById(doctypeId)
    .then((doctype) => {
      res.json({ success: true, data: doctype });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/doctypes', (req, res) => {
  const { language } = req.headers;
  DocType.find()
    .then((doctypes) => {
      res.json({ success: true, data: doctypes });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.post('/doctype', async (req, res) => {
  const { language } = req.headers;
  const { kaz, rus, countryId } = req.body;
  const newDocType = new DocType({
    kaz,
    rus,
    countryId,
  });

  await newDocType
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) => {
      res.status(400).json({ success: false, error: error(400, language) });
    });
});

// router.put('/doctype', async (req, res) => {
//   const { language } = req.headers;
//   const { _id, kaz, rus, countryId } = req.body;
//   const filter = { _id };
//   const update = {
//     kaz,
//     rus,
//     countryId,
//   };

//   await DocType.findOneAndUpdate(filter, update, { new: true })
//     .then(() => res.json({ success: true }))
//     .catch((err) =>
//       res.status(400).json({ success: false, error: error(400, language) })
//     );
// });

module.exports = router;
