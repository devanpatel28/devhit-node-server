const express = require('express');
const project_controller = require('../controllers/projectController');

const router = express.Router();

router.get('/getallprojects', project_controller.getAllProject);
router.post('/getProjectById', project_controller.getProjectById);
router.post('/addProject', project_controller.addProject);

module.exports = router;