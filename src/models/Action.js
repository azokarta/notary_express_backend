const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  businessProcessTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessType',
    required: true,
  },

  startedDate: {
    type: Date,
    required: true,
  },
  endedDate: {
    type: Date,
    required: false,
  },
  actionStatusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ActionStatus',
    required: true,
  },
});

module.exports = mongoose.model('Action', actionSchema);
