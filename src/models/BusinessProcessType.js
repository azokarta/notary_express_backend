const mongoose = require('mongoose');

const businessProcessTypeSchema = new mongoose.Schema({
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  'BusinessProcessType',
  businessProcessTypeSchema
);
