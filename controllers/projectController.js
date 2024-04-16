const db=require('../database/db')

const getAllProject = (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
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

const addProject=(req,res)=>{
  const {project_name,project_address,project_area,pro_no_residence,project_image,project_brochure,pro_status,pro_2bhk,pro_3bhk,pro_percent} =req.body;
  db.query('INSERT INTO projects (project_name, project_address, project_area, pro_no_residence, project_image, project_brochure, pro_status, pro_2bhk, pro_3bhk, pro_percent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',[project_name,project_address,project_area,pro_no_residence,project_image,project_brochure,pro_status,pro_2bhk,pro_3bhk,pro_percent], (err, results) => {
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
    getProjectById,
    addProject
}