const mongoose = require('mongoose');

const docFormSchema = new mongoose.Schema({
  docId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doc',
    required: true,
  },
  docTypeFormId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DocTypeForm',
    required: true,
  },

  inputValue: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('DocForm', docFormSchema);
