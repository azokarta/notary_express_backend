const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  businessProcessTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessType',
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  waers: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
});

module.exports = mongoose.model('Price', priceSchema);
