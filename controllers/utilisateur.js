const userModel = require('../models/utilisateur');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(15);
const code = require('../utlis/random-code');

const CodePhone = require('../models/code')

require('dotenv').config({
    path: './.env'
});
exports.add = async (req, res) => {



    try {

        let { prenom, nom, date_naissance, adresse, telephone, email, role, fonction } = req.body;

        const user = userModel();

        user.prenom = prenom;
        user.nom = nom;
        user.date_naissance = date_naissance;
        user.adresse = adresse;
        user.telephone = telephone;
        user.email = email;
        user.role = role;
        user.fonction = fonction;
        user.password = bcrypt.hashSync(req.body.password, salt);


        const userSave = await user.save();

        const userFind = await userModel.findById(userSave.id);

        userFind.token = jwt.sign({
            id: userFind.id
            // role:userFind.role.title
        }, process.env.KEY_JWT);

        const userFinal = await userFind.save();

        //Code Validation
        const codeValidation = CodePhone();
        codeValidation.telephone = telephone;
        codeValidation.code = code.RandoomCode();
        const codeSave = await codeValidation.save();
        console.log(codeSave);


        //Code d'envoi api sms


        return res.status(201).json({
            message: 'utilsateur ajoute',
            data: userFinal,
        });



    } catch (error) {
        return res.status(404).json({
            message: 'erreur decele imposible d\‘ajouter',
            data: error,
        });
    }




}
exports.all = async (req, res) => {
    userModel.find({}).then((result) => {
        return res.status(200).json({
            message: 'Voici la liste des utilisateurs demandes',
            data: result,
        });
    }).catch((err) => {
        return res.status(404).json({
            message: 'Erreur! utilisateurs trouves',
            data: err,
        });
    });
}
exports.one = async (req, res) => {

    let { id } = req.params;

    userModel.findById(id).then((result) => {
        return res.status(200).json({
            message: 'Voici l\'utilisateur demande',
            data: result,
        });
    }).catch((err) => {
        return res.status(404).json({
            message: 'Erreur! id n\'existe pas',
            data: err,
        });
    });
}

exports.update = async (req, res) => {
    try {
        let { id } = req.params;
        let { prenom, nom, adresse } = req.body;

        const fUser = await userModel.findById(id);

        if (nom != undefined) {
            fUser.nom = nom;
        }
        if (prenom != undefined) {
            fUser.prenom = prenom;
        }
        if (adresse != undefined) {
            fUser.adresse = adresse;
        }

        const sUser = await fUser.save();

        return res.status(200).json({
            message: 'Utilisateur modifie',
            data: sUser,
        });
    } catch (error) {
        return res.status(404).json({
            message: 'Error ',
            data: error,
        });
    }

}
exports.delete = (req, res) => {
    let { id } = req.params;
    userModel.findByIdAndDelete(id).then((result) => {
        return res.status(200).json({
            message: 'Utilsateur suppprime',
            data: result,
        });
    }).catch((err) => {
        return res.status(404).json({
            message: 'Erreur!',
            data: err,
        })
    })
}


exports.authentification = async (req, res) => {

    let { telephone, password } = req.body;

    const user = await userModel.findOne({ telephone });

    if (user) {
        if (bcrypt.compareSync(password, user.password)) {

            const token = jwt.sign({ id: user.id }, process.env.KEY_JWT);

            user.token = token;
            const userSave = await user.save();

            //Code Validation
            const codeValidation = CodePhone();
            codeValidation.telephone = telephone;
            codeValidation.code = code.RandoomCode();
            const codeSave = await codeValidation.save();
            console.log(codeSave);


            return res.status(200).json({
                message: 'Connexion reussie',
                data: {
                    user: userSave,
                    token: userSave.token
                },
            });

        }
        else {
            return res.status(404).json({
                message: 'Email ou mot de passe incorrect!',
                data: [],
            })
        }
    } else {
        return res.status(404).json({
            message: 'Email ou mot de passe incorrect!',
            data: [],
        })
    }





}