const fonctionModel = require('../models/fonction');

exports.add = async (req, res) => {


    try {

        let { title } = req.body;

        const fonction   =fonctionModel();
    
        fonction.title = title;
        
         
        const fonctionSave = await fonction.save();
    
        
    
        return res.status(201).json({
            message: 'fonction ajoutee',
            data: fonctionSave,
        });
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }


   

}
exports.all = async (req, res)=> {
    fonctionModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des fonctions demandees',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! fonction non  trouvee',
            data : err,
        });
    });
}
exports.one = async (req, res) => {

    let {id} = req.params;

    fonctionModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici la fonction demandee',
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

        const ffonction = await fonctionModel.findById(id);

        if(title !=undefined) {
            ffonction.title = title;
        }
       

        const sfonction = await ffonction.save();

        return res.status(200).json({
            message: 'Fonction modifiee',
            data: sfonction,
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
    fonctionModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'fonction suppprimee',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}


