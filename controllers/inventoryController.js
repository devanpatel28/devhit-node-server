const db = require('../database/db');

const getAllInventory = (req, res) => {
  db.query('SELECT * FROM inventory where 0=0', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};
const getInventoryById = (req, res) => {
    const trans_id=req.body;
    db.query('SELECT * FROM inventory where trans_id=?',[trans_id], (err, results) => {
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
            // res.json(message,"Record Not Found");
        }
        
      }
    });
  };
module.exports = {
    getAllInventory,
    getInventoryById

};
