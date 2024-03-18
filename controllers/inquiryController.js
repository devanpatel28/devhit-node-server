const db=require('../database/db')

const getAllProject = (req, res) => {
    db.query('SELECT * FROM projects where 0=0', (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        res.status(404).json({error:'404 Not Found'})
      } else {
        res.json(results);
      }
    });
  };

const getProjectById=(req,res)=>{
    const {project_id} =req.body;
    db.query('SELECT * FROM projects where project_id=?',[project_id], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'Project not found' });
        }
        else{
          res.json(results);
        }
      }
      });

}


module.exports={
    getAllProject,
    getProjectById
}