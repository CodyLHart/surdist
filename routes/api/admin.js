const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/admin');

router.get('/indexProducts', adminCtrl.indexProducts);
router.get('/inventory', adminCtrl.indexProducts);
// router.get('/product/:id', adminCtrl.viewProduct);
router.post('/createProduct', adminCtrl.createProduct);
router.put('/product/:id/update', adminCtrl.updateProduct);
router.delete('/product/:id/delete', adminCtrl.deleteProduct);


module.exports = router;