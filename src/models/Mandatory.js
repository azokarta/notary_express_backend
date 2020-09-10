const mongoose = require('mongoose');

const mandatorySchema = new mongoose.Schema({
  mandatoryId: {
    type: Number,
    required: true,
  },
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Mandatory', mandatorySchema);
