const express = require("express");
const router = express.Router();

const roleCtrl = require('../controllers/role');
//const authMiddle = require('../middlewares/access.js');


router.post('/', roleCtrl.add);

router.get('/' ,roleCtrl.all);

router.get('/:id', roleCtrl.one);

router.put('/:id', roleCtrl.update);

router.delete('/:id', roleCtrl.delete);

 //router.post('/authentification',userCtrl.authentification);


module.exports = router;