const express = require('express');
const inventory_controller = require('../controllers/inventoryController');

const router = express.Router();

router.get('/getAllInventory', inventory_controller.getAllInventory);
router.post('/getInventoryById', inventory_controller.getInventoryById);


module.exports = router;