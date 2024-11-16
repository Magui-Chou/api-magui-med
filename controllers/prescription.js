const prescriptionModel = require('../models/prescription');

exports.add = async (req, res) => {


    try {

        let { description } = req.body;

        const prescription   =prescriptionModel();
    
        prescription.description = description;
        
         
        const prescriptionSave = await prescription.save();
    
        
    
        return res.status(201).json({
            message: 'prescription ajoutee',
            data: prescriptionSave,
        });
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }


   

}
exports.all = async (req, res)=> {
    prescriptionModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des prescriptions demandees',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! prescription non  trouvee',
            data : err,
        });
    });
}
exports.one = async (req, res) => {

    let {id} = req.params;

    prescriptionModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici la prescription demandee',
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
        let {description} = req.body;

        const fPrescription = await prescriptionModel.findById(id);

        if(description !=undefined) {
            fPrescription.description = description;
        }
       

        const sPrescription = await fPrescription.save();

        return res.status(200).json({
            message: 'prescription modifiee',
            data: sPrescription,
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
    prescriptionModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'prescription suppprimee',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}


