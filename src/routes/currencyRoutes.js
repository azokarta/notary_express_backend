const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Currency = require('../models/Currency');

const error = require('../utils/error');

router.get('/currency/:currencyId', async (req, res) => {
  const { language } = req.headers;
  const { currencyId } = req.params;

  Currency.findById(currencyId)
    .then((currency) => {
      res.json({ success: true, data: currency });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/currencies', (req, res) => {
  const { language } = req.headers;
  Currency.find()
    .then((currencies) => {
      res.json({ success: true, data: currencies });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

// router.post('/currency', async (req, res) => {
//   const { language } = req.headers;
//   const { kaz, rus, waers } = req.body;

//   const newCurrency = new Currency({
//     kaz,
//     rus,
//     waers,
//   });

//   await newCurrency
//     .save()
//     .then(() => res.json({ success: true }))
//     .catch((err) => {
//   res.status(400).json({ success: false, error: error(400, language) })
//     });
// });

// router.put('/currency', async (req, res) => {

//   const { language } = req.headers;
//   const { _id, kaz, rus, waers } = req.body;

//   const filter = { _id };
//   const update = {
//     kaz,
//     rus,
//     waers,
//   };

//   await Currency.findOneAndUpdate(filter, update, { new: true })
//     .then(() => res.json({ success: true }))
//     .catch((err) =>
//   res.status(400).json({ success: false, error: error(400, language) })
//     );
// });

// router.delete('/currency/:currencyId', async (req, res) => {

//   const { language } = req.headers;
//   const { currencyId } = req.params;

//   await Currency.findByIdAndRemove(currencyId)
//     .then(() => res.json({ success: true }))
//     .catch((err) =>
//   res.status(400).json({ success: false, error: error(400, language) })
//     );
// });

module.exports = router;
