const medicamentModel = require('../models/medicament');

exports.add = async (req, res) => {


    try {

        let { nom, prix } = req.body;

        const medicament   =medicamentModel();
    
        medicament.nom = nom;
        medicament.prix = prix;
        
         
        const medicamentSave = await medicament.save();
    
        
    
        return res.status(201).json({
            message: 'medicament ajoute',
            data: medicamentSave,
        });
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }


   

}
exports.all = async (req, res)=> {
    medicamentModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des medicaments demandes',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! medicament non  trouvee',
            data : err,
        });
    });
}
exports.one = async (req, res) => {

    let {id} = req.params;

    medicamentModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici le medicament demande',
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
        let {prix} = req.body;

        const fMedicament = await medicamentModel.findById(id);

        if(prix !=undefined) {
            fMedicament.prix = prix;
        }
       

        const sMedicament = await fMedicament.save();

        return res.status(200).json({
            message: 'medicament modifiee',
            data: sMedicament,
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
    medicamentModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'medicament suppprime',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}


