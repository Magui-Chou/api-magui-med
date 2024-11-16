const express = require("express");

const router = express.Router();

const medicamentCtrl = require('../controllers/medicament');

router.post('/', medicamentCtrl.add);

router.get('/' ,medicamentCtrl.all);

router.get('/:id', medicamentCtrl.one);

router.put('/:id', medicamentCtrl.update);

router.delete('/:id', medicamentCtrl.delete);




module.exports = router;