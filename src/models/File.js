const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  file: {
    type: Blob,
    required: true,
  },
  ext: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3,
  },
});

module.exports = mongoose.model('File', fileSchema);
