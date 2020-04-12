const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');


// ---------- PUBLIC ROUTES ---------- //
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


// ---------- PROTECTED ROUTES ---------- //



module.exports = router;