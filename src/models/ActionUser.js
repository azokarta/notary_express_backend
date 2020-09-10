const mongoose = require('mongoose');

const actionUserSchema = new mongoose.Schema({
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Action',
    required: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  payer: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('ActionUser', actionUserSchema);
