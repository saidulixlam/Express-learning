const path = require('path');

const express = require('express');

const router = express.Router();

const controllers = require('../controllers/products');

router.get('/',controllers.getProducts);

module.exports = router;
