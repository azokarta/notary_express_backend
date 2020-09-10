const mongoose = require('mongoose');

const businessProcessStepSchema = new mongoose.Schema({
  businessProcessTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessType',
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
  mandatory: {
    type: Number,
    required: true,
  },
  sortBy: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  'BusinessProcessStep',
  businessProcessStepSchema
);
