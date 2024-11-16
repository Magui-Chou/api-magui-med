const express = require("express");

const router = express.Router();

const serviceCtrl = require('../controllers/service');

router.post('/', serviceCtrl.add);

router.get('/' ,serviceCtrl.all);

router.get('/:id', serviceCtrl.one);

router.put('/:id', serviceCtrl.update);

router.delete('/:id', serviceCtrl.delete);




module.exports = router;