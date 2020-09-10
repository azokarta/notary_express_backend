const mongoose = require('mongoose');

const tableColumnSchema = new mongoose.Schema({
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TableInfo',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TableColumnInfo', tableColumnSchema);
