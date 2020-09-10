const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  docTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DocType',
    required: true,
  },
  docNumber: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  docValidThru: {
    type: Date,
    required: false,
  },
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    required: true,
  },
});

module.exports = mongoose.model('Doc', docSchema);
