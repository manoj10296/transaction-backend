const mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
        required: true,
    },
    amount: {
      type: String,
      trim: true,
      required: true
    },
    runningBalance: {
      type: Number,
      default: 0
    },
    description: {
      type: String
    }
}, { timestamps: true });   //timestamps is used to save the time of any new entry being made in database


module.exports = mongoose.model("Transaction", transactionSchema);