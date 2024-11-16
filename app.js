
const express = require("express");

const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv').config({
	path: './.env'
});

const db = require('./config/db.js');

const routeUser = require('./routes/utilisateur.js');

const routeRole =  require('./routes/role.js');

const routeFonction =  require('./routes/fonction.js');

const routeHopital =  require('./routes/hopital.js');

const routeService =  require('./routes/service.js');

const routePharmacie =  require('./routes/pharmacie.js');

const routeMedicament =  require('./routes/medicament.js');

const routePrescription =  require('./routes/prescription.js');

const routeCode =  require('./routes/code.js');









//const authMiddle = require("./middlewares/access.js");



const app = express();


 app.use(bodyParser.json({
	limit: '10000mb'
 }));

 app.use(bodyParser.urlencoded({
 	extended: true,
 	limit: '10000mb'
 }));

app.use(cors());


app.use('/v1/api/user',routeUser);
app.use('/v1/api/role', routeRole);
app.use('/v1/api/fonction', routeFonction);
app.use('/v1/api/hopital', routeHopital);
app.use('/v1/api/service', routeService);
app.use('/v1/api/pharmacie', routePharmacie);
app.use('/v1/api/medicament', routeMedicament);
app.use('/v1/api/prescription', routePrescription);
app.use('/v1/api/code', routeCode);












	// force: true





db().then((_)=> {
	const port = process.env.PORT
	app.listen(port, () => {
		
		console.log(`Server started on ${port}`);
	});
})