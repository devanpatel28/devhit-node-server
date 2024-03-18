const express = require('express');
const user_trans_controller = require('../controllers/user_transactions');

const router = express.Router();

router.post('/add', user_trans_controller.addTransaction); // Change to POST method
router.get('/getall', user_trans_controller.getAllTransactions);
router.post('/getbyid',user_trans_controller.getTransactionById);

module.exports = router;
