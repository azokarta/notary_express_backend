const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
  waers: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3,
  },
});

module.exports = mongoose.model('Country', countrySchema);
