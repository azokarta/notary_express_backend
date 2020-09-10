const mongoose = require('mongoose');

const approveStatusSchema = new mongoose.Schema({
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ApproveStatus', approveStatusSchema);
