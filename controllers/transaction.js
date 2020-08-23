const Transaction  = require('../models/transaction')

exports.createTransaction = (req, res) => {
  console.log(req)
  const transaction = new Transaction(req.body);
  transaction.save((err, transaction) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to create category in DB",
      });
    }
    res.json({ transaction });
  });
};


exports.getAllTransactions = (req, res) => {
  Transaction.find().sort({createdAt: 'descending'}).exec((err, transaction) => {
    if (err) {
      return res.status(400).json({
        error: "hello",
      });
    }
    console.log(res)
    res.json(transaction);
  });
};