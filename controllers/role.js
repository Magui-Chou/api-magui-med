const roleModel = require('../models/role');

exports.add = async (req, res) => {


    try {

        let { title } = req.body;

        const role   =roleModel();
    
        role.title = title;
        
         
        const roleSave = await role.save();
    
        
    
        return res.status(201).json({
            message: 'Role ajoute',
            data: roleSave,
        });
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }


   

}
exports.all = async (req, res)=> {
    roleModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des roles demandes',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! Role non  trouve',
            data : err,
        });
    });
}
exports.one = async (req, res) => {

    let {id} = req.params;

    roleModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici le role demande',
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

        const fRole = await roleModel.findById(id);

        if(title !=undefined) {
            fRole.title = title;
        }
       

        const sRole = await fRole.save();

        return res.status(200).json({
            message: 'Role modifie',
            data: sRole,
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
    roleModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'Role suppprime',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}


