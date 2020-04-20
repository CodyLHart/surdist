const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/admin');

router.get('/indexProducts', adminCtrl.indexProducts);
router.get('/inventory', adminCtrl.indexProducts);

router.use(require('../../config/auth'))
router.post('/createProduct', adminCtrl.createProduct);
router.put('/product/:id/update', adminCtrl.updateProduct);
router.delete('/product/:id/delete', adminCtrl.deleteProduct);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;