const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  waers: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3,
  },

  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Balance', balanceSchema);
