const mongoose = require('mongoose');

const docTypeFormSchema = new mongoose.Schema({
  docTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DocType',
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
  inputType: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('DocTypeForm', docTypeFormSchema);
