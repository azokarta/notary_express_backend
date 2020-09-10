const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Country = require('../models/Country');

router.get('/country/:countryId', async (req, res) => {
  const { countryId } = req.params;

  Country.findById(countryId)
    .then((country) => {
      res.json({ success: true, data: country });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/countries', (req, res) => {
  Country.find()
    .then((countries) => {
      res.json({ success: true, data: countries });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

// router.post('/country', async (req, res) => {
//   const { kaz, rus, waers } = req.body;

//   const newCountry = new Country({
//     kaz,
//     rus,
//     waers,
//   });

//   await newCountry
//     .save()
//     .then(() => res.json({ success: true }))
//     .catch((err) => {
//       res.status(400).json({ success: false, error: error(400, language) })
//     });
// });

// router.put('/country', async (req, res) => {
//   const { _id, kaz, rus, waers } = req.body;

//   const filter = { _id };
//   const update = {
//     kaz,
//     rus,
//     waers,
//   };

//   await Country.findOneAndUpdate(filter, update, { new: true })
//     .then(() => res.json({ success: true }))
//     .catch((err) =>
//       res.status(400).json({ success: false, error: error(400, language) })
//     );
// });

// router.delete('/country/:countryId', async (req, res) => {
//   const { countryId } = req.params;

//   await Country.findByIdAndRemove(countryId)
//     .then(() => res.json({ success: true }))
//     .catch((err) =>
//       res.status(400).json({ success: false, error: error(400, language) })
//     );
// });

module.exports = router;
