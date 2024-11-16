const serviceModel = require('../models/service');


exports.add = async (req, res) => {

    let { title, crenaux,chef_service, telephone} = req.body;

    const service = serviceModel();

    service.title = title;
    
    if(crenaux !=undefined) {
        service.crenaux = crenaux;
    }
    service.chef_service = chef_service;
    service.telephone = telephone;

    
    const serviceSave = await service.save();
        

    return res.status(201).json({
        message: 'service ajoute ',
        data: serviceSave,
    });

    try {

  
    
        
    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }
}

exports.all = async (req, res)=> {
    serviceModel.find({}).then((result) =>{
        return res.status(200).json({
            message: 'Voici la liste des services demandes',
            data:result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message: 'Erreur! service non  trouve',
            data : err,
        });
    });
}

exports.one = async (req, res) => {

    let {id} = req.params;

    serviceModel.findById(id).then((result) =>{
        return res.status(200).json({
            message: 'Voici le service demande',
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
    let {id} = req.params;
    let {title, crenaux, chef_service} = req.body;

    const fService = await serviceModel.findById(id);

    if(title !=undefined) {
        fService.title = title;
    }
    if(crenaux !=undefined) {
        fService.crenaux = crenaux;
    }
    if(chef_service !=undefined) {
        fService.chef_service = chef_service;
    }

    const sService = await fService.save();

    return res.status(200).json({
        message: 'service modifie',
        data: sService,
    });
    try {

       

    } catch (error) {

        return res.status(404).json({
            message: 'Error ',
            data: error,
        });
    }

}


exports. delete = (req,res) =>  {
    let {id} = req.params;
    serviceModel.findByIdAndDelete(id).then((result) =>{
        return res.status(200).json({
            message: 'service suppprime',
            data: result,
        });
    }).catch((err) =>{
        return res.status(404).json({
            message : 'Erreur!',
            data:err,
        })
    })
}