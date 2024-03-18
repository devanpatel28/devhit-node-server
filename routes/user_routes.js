const express = require('express');
const user_controller = require('../controllers/userController');

const router = express.Router();

router.get('/user', user_controller.getAllUsers);
router.post('/userbyid', user_controller.getUserbyID);
router.post('/updateUser', user_controller.updateUser);
router.post('/validateuser', user_controller.validateUser); 

module.exports = router;
