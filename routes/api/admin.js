const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/admin');

router.get('/indexProducts', adminCtrl.indexProducts);
router.get('/inventory', adminCtrl.indexProducts);
// router.get('/editProduct, )
router.post('/createProduct', adminCtrl.createProduct);


module.exports = router;