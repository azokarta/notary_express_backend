const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
  },
  email: {
    type: String,
    required: false,
  },
  docId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doc',
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);
