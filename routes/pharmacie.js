const express = require("express");

const router = express.Router();

const pharmacieCtrl = require('../controllers/pharmacie');

router.post('/', pharmacieCtrl.add);

router.get('/' ,pharmacieCtrl.all);

router.get('/:id', pharmacieCtrl.one);

router.put('/:id', pharmacieCtrl.update);

router.delete('/:id', pharmacieCtrl.delete);




module.exports = router;