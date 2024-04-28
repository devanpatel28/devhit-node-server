const db = require('../database/db');

const getAllsupplier = (req, res) => {
  db.query('SELECT * FROM supplier where 0=0', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};
const addSupplier = (req, res) => {
    const { supplier_name, supplier_email, supplier_mob, supplier_address } = req.body;
    db.query('INSERT INTO supplier (supplier_name, supplier_email, supplier_mob, supplier_address) VALUES (?, ?, ?, ?)', [supplier_name, supplier_email, supplier_mob, supplier_address], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Supplier added successfully!' });
      }
    });
  }
const getSupplierById = (req, res) => {
    const supplier_id=req.body;
    db.query('SELECT * FROM supplier where supplier_id=?',[supplier_id], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if(results.length!=0)
        {
            res.json(results);
        }
        else
        {
        }
        
      }
    });
  };
module.exports = {
    getSupplierById,
    getAllsupplier,
    addSupplier
};
