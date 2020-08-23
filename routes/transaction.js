const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getAllTransactions
} = require('../controllers/transaction')

router.post(
  '/createtransaction',
  createTransaction
)

router.get(
  '/transactions',
  getAllTransactions
)

module.exports = router