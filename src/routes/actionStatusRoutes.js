const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const ActionStatus = require('../models/ActionStatus');

const error = require('../utils/error');

router.get('/actionstatus/:actionStatusId', async (req, res) => {
  const { language } = req.headers;
  const { actionStatusId } = req.params;

  ActionStatus.findById(actionStatusId)
    .then((actionStatus) => {
      res.json({ success: true, data: actionStatus });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

router.get('/actionstatuses', (req, res) => {
  const { language } = req.headers;
  ActionStatus.find()
    .then((actionstatuses) => {
      res.json({ success: true, data: actionstatuses });
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: error(400, language) })
    );
});

// router.post('/actionstatus', async (req, res) => {
//   const { language } = req.headers;
//   const { kaz, rus, waers } = req.body;

//   const newActionStatus = new ActionStatus({
//     kaz,
//     rus,
//   });

//   await newActionStatus
//     .save()
//     .then(() => res.json({ success: true }))
//     .catch((err) => {
//       res.status(400).json({ success: false, error: error(400, language) });
//     });
// });

module.exports = router;
