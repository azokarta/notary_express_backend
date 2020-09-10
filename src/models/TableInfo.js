const mongoose = require('mongoose');

const tableInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TableInfo', tableInfoSchema);
