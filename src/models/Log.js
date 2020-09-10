const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TableInfo',
    required: true,
  },
  tableColumnId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TableColumnInfo',
    required: true,
  },

  oldValue: {
    type: String,
    required: false,
  },
  newValue: {
    type: String,
    required: false,
  },
  logDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  logTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LogType',
    required: true,
  },
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Action',
    required: false,
  },

  businessProcessTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProcessType',
    required: false,
  },
});

module.exports = mongoose.model('Action', actionSchema);
