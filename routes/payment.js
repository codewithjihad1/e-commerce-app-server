const express = require('express');
const { initPayment } = require('../controller/paymentController');
const router = express.Router();

router.post('/init', initPayment);

module.exports = router;
