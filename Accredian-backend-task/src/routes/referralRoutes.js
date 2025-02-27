
const express = require('express');
const router = express.Router();
const { createReferral } = require('../controllers/referralController');

router.post('/create', createReferral);

module.exports = router; 