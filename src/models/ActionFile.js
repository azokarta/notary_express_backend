const mongoose = require('mongoose');

const actionFileSchema = new mongoose.Schema({
  spras: {
    type: String,
    required: false,
  },
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Action',
    required: true,
  },
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    required: true,
  },
});

module.exports = mongoose.model('ActionFile', actionFileSchema);
