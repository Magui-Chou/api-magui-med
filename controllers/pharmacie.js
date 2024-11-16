const pharmacieModel = require('../models/pharmacie');


exports.add = async (req, res) => {

    try {

        let { nom, adresse,telephone, latitude, longitude, chef_pharmacie, crenaux} = req.body;

        const pharmacie = pharmacieModel();
    
        pharmacie.nom = nom;
        pharmacie.adresse = adresse;
        pharmacie.telephone = telephone;
        pharmacie.latitude = latitude;
        pharmacie.longitude = longitude;
        pharmacie.chef_pharmacie = chef_pharmacie;
        if(crenaux !=undefined) {
            pharmacie.crenaux = crenaux;
        }

        
        const pharmacieSave = await pharmacie.save();
            
    
        return res.status(201).json({
            message: 'pharmacie ajoutee ',
            data: pharmacieSave,
        });
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }
}

exports.all = async (req, res)=> {
    pharmacieModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des pharmacies demandees',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! pharmacie non  trouvee',
            data : err,
        });
    });
}

exports.one = async (req, res) => {

    let {id} = req.params;

    pharmacieModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici la pharmacie demandee',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! id n\'existe pas',
            data: err,
        });
    });
}


exports.update = async (req,res) =>  {

    try {

        let {id} = req.params;
        let {nom, chef_pharmacie, crenaux} = req.body;

        const fPharmacie = await pharmacieModel.findById(id);

        if(nom !=undefined) {
            fPharmacie.nom = nom;
        }
        if(chef_pharmacie !=undefined) {
            fPharmacie.chef_pharmacie = chef_pharmacie;
        }
        if(crenaux !=undefined) {
            fPharmacie.crenaux = crenaux;
        }
       

        const sPharmacie = await fPharmacie.save();

        return res.status(200).json({
            message: 'pharmacie modifiee',
            data: sPharmacie,
        });

    } catch (error) {

        return res.status(404).json({
            message: 'Error ',
            data: error,
        });
    }

}


exports. delete = (req,res) =>  {
    let {id} = req.params;
    pharmacieModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'pharmacie suppprimee',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}