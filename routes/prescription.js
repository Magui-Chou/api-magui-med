const express = require("express");

const router = express.Router();

const prescriptionCtrl = require('../controllers/prescription');

router.post('/', prescriptionCtrl.add);

router.get('/' ,prescriptionCtrl.all);

router.get('/:id', prescriptionCtrl.one);

router.put('/:id', prescriptionCtrl.update);

router.delete('/:id', prescriptionCtrl.delete);




module.exports = router;