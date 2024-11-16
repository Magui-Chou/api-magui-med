const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/utilisateur');
//const authMiddle = require('../middlewares/access.js');


router.post('/', userCtrl.add);
// router.get('/' , authMiddle.checkRole("admin"),userCtrl.all);
// //router.get('/email/:email', userCtrl.email);
// router.get('/:id', userCtrl.one);
// router.put('/:id', userCtrl.update);
// router.delete('/:id', userCtrl.delete);

 router.post('/authentification',userCtrl.authentification);


module.exports = router;