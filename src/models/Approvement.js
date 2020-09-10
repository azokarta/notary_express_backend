const mongoose = require('mongoose');

const approvementSchema = new mongoose.Schema({
  approveDate: {
    type: Date,
    required: true,
  },
  approveStatusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ApproveStatus',
    required: true,
  },
});

module.exports = mongoose.model('Approvement', approvementSchema);
