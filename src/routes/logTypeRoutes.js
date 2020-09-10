const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const LogType = require('../models/LogType');

const error = require('../utils/error');

router.get('/logtype/:_id', async (req, res) => {
  const { language } = req.headers;
  const { _id } = req.params;

  LogType.findById(_id)
    .then((logtype) => {
      res.json({ success: true, data: logtype });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/logtypes', (req, res) => {
  const { language } = req.headers;
  LogType.find()
    .then((logtypes) => {
      res.json({ success: true, data: logtypes });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.post('/logtype', async (req, res) => {
  const { language } = req.headers;
  const { kaz, rus } = req.body;

  const newLogType = new LogType({ kaz, rus });

  await newLogType
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) => {
      res.status(400).json({ success: false, error: error(400, language) });
    });
});

// router.put('/logtype', async (req, res) => {
//   const { language } = req.headers;
//   const { _id, kaz, rus } = req.body;
//   const filter = { _id };
//   const update = {
//     kaz,
//     rus,
//   };

//   await LogType.findOneAndUpdate(filter, update, { new: true })
//     .then(() => res.json({ success: true }))
//     .catch((err) =>
//       res.status(400).json({ success: false, error: error(400, language) })
//     );
// });

module.exports = router;
