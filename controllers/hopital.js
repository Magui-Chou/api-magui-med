const hopitalModel = require('../models/hopital');


exports.add = async (req, res) => {

    try {

        let { title, adresse,telephone, latitude, longitude} = req.body;

        const hopital = hopitalModel();
    
        hopital.title = title;
        hopital.adresse = adresse;
        hopital.telephone = telephone;
        hopital.latitude = latitude;
        hopital.longitude = longitude;
        
        const hopitalSave = await hopital.save();
            
    
        return res.status(201).json({
            message: 'Hopital ajoute ',
            data: hopitalSave,
        });
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }
}

exports.all = async (req, res)=> {
    hopitalModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des hopitaux demandes',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! hoptital non  trouve',
            data : err,
        });
    });
}

exports.one = async (req, res) => {

    let {id} = req.params;

    hopitalModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici l \'hopital demande',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! id n\'existe pas',
            data: err,
        });
    });
}

exports.one = async (req, res) => {

    let {id} = req.params;

    userModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici l\'hopital demande',
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
        let {title} = req.body;

        const fHopital = await hopitalModel.findById(id);

        if(title !=undefined) {
            fHopital.title = title;
        }

        const sHopital = await fHopital.save();

        return res.status(200).json({
            message: 'Hopital modifie',
            data: sHopital,
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
    hopitalModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'Hopital suppprime',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}