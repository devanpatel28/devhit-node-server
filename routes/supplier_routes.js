const express = require('express');
const supplier_controller = require('../controllers/supplierController');

const router = express.Router();

router.post('/getAll', supplier_controller.getAllsupplier);
router.post('/getById', supplier_controller.getSupplierById);
router.post('/addSupplier', supplier_controller.addSupplier);


module.exports = router;