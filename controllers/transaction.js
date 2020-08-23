const Transaction  = require('../models/transaction')

exports.createTransaction = async (req, res) => {
 let obj ={...req.body}
  const resp =  await Transaction.findOne({}, {}, { sort: { 'createdAt' : -1 } });
  if(resp) {
    obj.runningBalance = obj.type === 'credit' ? resp.runningBalance + Number(obj.amount) : resp.runningBalance - Number(obj.amount) 
  } else {
    obj.runningBalance = obj.type === 'credit' ? 0 + Number(obj.amount) : 0 - Number(obj.amount)
  }
  
  const transaction = new Transaction(obj);
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
    res.json(transaction);
  });
};