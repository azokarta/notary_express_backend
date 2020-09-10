const mongoose = require('mongoose');

const actionStatusSchema = new mongoose.Schema({
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ActionStatus', actionStatusSchema);
