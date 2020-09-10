const mongoose = require('mongoose');

const logTypeSchema = new mongoose.Schema({
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('LogType', logTypeSchema);
