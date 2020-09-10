const mongoose = require('mongoose');

const actionFormSchema = new mongoose.Schema({
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Action',
    required: true,
  },
  businessProcessFormId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessForm',
    required: true,
  },

  inputValue: {
    type: String,
    required: true,
  },

  mandatory: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('ActionForm', actionFormSchema);
