const mongoose = require('mongoose');

const actionDetailSchema = new mongoose.Schema({
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Action',
    required: true,
  },

  businessProcessStepId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessStep',
    required: true,
  },

  approveId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Approvement',
    required: false,
  },

  actionDetailDate: {
    type: Date,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('ActionDetail', actionDetailSchema);
