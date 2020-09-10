const mongoose = require('mongoose');

const businessProcessFormSchema = new mongoose.Schema({
  businessProcessStepId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessStep',
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

  sortBy: {
    type: Number,
    required: true,
  },
  inputType: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model(
  'BusinessProcessForm',
  businessProcessFormSchema
);
