const mongoose = require('mongoose');

const paymentTypeSchema = new mongoose.Schema({
  rus: {
    type: String,
    required: true,
  },
  kaz: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PaymentTypeSchema', paymentTypeSchema);
