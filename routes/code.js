const express = require("express");

const router = express.Router();

const codeCtrl = require('../controllers/code');

router.get('/', codeCtrl.verif);





module.exports = router;