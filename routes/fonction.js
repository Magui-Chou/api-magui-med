const express = require("express");

const router = express.Router();

const fonctionCtrl = require('../controllers/fonction');

router.post('/', fonctionCtrl.add);

router.get('/' ,fonctionCtrl.all);

router.get('/:id', fonctionCtrl.one);

router.put('/:id', fonctionCtrl.update);

router.delete('/:id', fonctionCtrl.delete);




module.exports = router;