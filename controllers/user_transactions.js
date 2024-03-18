const db = require('../database/db');

const addTransaction = (req, res) => {
  const { transac_date, transac_from, transac_amount, transac_details } = req.body;
  
  db.query(
    `INSERT INTO accounts (transac_date, transac_from, transac_amount, transac_details) VALUES ('${transac_date}', '${transac_from}', '${transac_amount}', '${transac_details}')`,
    (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ success: 'Transaction added successfully' });
      }
    }
  );
};

const getTransactionById = (req, res) => {
  const {user_id} = req.body;
  db.query('SELECT * FROM accounts where 	transac_from=?',[user_id], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};
  
const getAllTransactions = (req, res) => {
  db.query('SELECT * FROM accounts', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

module.exports = {
    getAllTransactions,
    addTransaction,
    getTransactionById
};
