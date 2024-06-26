const express = require('express');
const user_controller = require('../controllers/userController');

const router = express.Router();

router.post('/allUsers', user_controller.getAllUsers);
router.post('/addUser', user_controller.addUser);
router.post('/userbyid', user_controller.getUserbyID);
router.post('/adminbyid', user_controller.getAdminbyID);
router.post('/userbymob', user_controller.getUserbyMob);
router.post('/updateUser', user_controller.updateUser);
router.post('/updateUserPass', user_controller.updateUserPass);
router.post('/validateuser', user_controller.validateUser);
router.post('/validateadmin', user_controller.validateAdmin);
router.delete('/deleteuser', user_controller.deleteuser); 
    
module.exports = router;
