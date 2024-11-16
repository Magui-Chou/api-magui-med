const express = require("express");

const router = express.Router();

const hopitalCtrl = require('../controllers/hopital');

router.post('/', hopitalCtrl.add);

router.get('/' ,hopitalCtrl.all);

router.get('/:id', hopitalCtrl.one);

router.put('/:id', hopitalCtrl.update);

router.delete('/:id', hopitalCtrl.delete);




module.exports = router;