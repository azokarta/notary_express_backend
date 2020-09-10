const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  shkzg: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1,
  },
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Action',
    required: false,
  },
  paymentTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'paymentType',
    required: false,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  info: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Payment', paymentSchema);
