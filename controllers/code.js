const codeModel = require('../models/code');

exports.verif = async (req, res) => {


    try {
        let { code, telephone} = req.query;

        const codeM = await codeModel.findOne({
            code: code,
            telephone: telephone,
            valide: false
        });



        if (codeM) {

            codeM.valide = true;
        }


        const sCode= await codeM.save();




        return res.status(200).json({
            message: 'Code approuve',
            data: sCode,
        });


    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele ',
            data: error,
        });
    }




}



