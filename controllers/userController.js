const db = require('../database/db');

const validateUser = (req, res) => {
  const { user_mobile, user_password } = req.body;
  db.query('SELECT * FROM users where user_mobile=? and user_password=?',[user_mobile,user_password], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200);
        res.json(results);
      }
    }
  });
};

const getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

const getUserbyID=(req,res)=>{
  const {user_id}=req.body;
  db.query('SELECT * FROM users where user_id=?',[user_id],(err,results)=>{
    
  if (err) {
    console.error('Error executing MySQL query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
    }
    else{
      res.json(results);
    }
  }
});
};

const updateUser=(req,res)=>{
  const {user_id,user_name,user_email,user_mobile,user_address}=req.body;
  db.query('UPDATE users SET user_name=?,user_email=?,user_mobile=?,user_address=? where user_id=?',[user_name,user_email,user_mobile,user_address,user_id],(err,results)=>{
    
  if (err) {
    console.error('Error executing MySQL query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
      res.json(results);
  }
});
};

module.exports = {
  updateUser,
  getAllUsers,
  validateUser,
  getUserbyID
};
