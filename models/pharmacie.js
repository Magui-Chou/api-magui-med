const mongoose = require('mongoose');

const Pharmacie = new mongoose.Schema ({
    nom: { 
        type:String,
        default:"",
        required:true
    
    },
    adresse: { 
        type:String,
        default:"",
        required:true
    
    },
    telephone: { 
        type:String,
        unique:true,
        required:true
    
    },
    latitude:{
        type:String,
        required:true,
        default:''

    },
    longitude: {
        type:String,
        required:true,
        default:''
    }, 
    chef_pharmacie: { 
        type:String,
        unique:true,
        required:true
    
    },
    crenaux: [{ 
        type:Array,
        default: [{
            "jour":"Lundi",
            "ouverture":"07h00",
            "fermeture":"16h00"
        },{
            "jour":"Mardi",
            "ouverture":"08h00",
            "fermeture":"22h00"
        },{
            "jour":"Mercredi",
            "ouverture":"08h00",
            "fermeture":"22h00"
        },{
            "jour":"Jeudi",
            "ouverture":"08h00",
            "fermeture":"22h00"
        },{
            "jour":"Vendredi",
            "ouverture":"08h00",
            "fermeture":"22h00"
        },{
            "jour":"Samedi",
            "ouverture":"08h00",
            "fermeture":"22h00"
        },{
            "jour":"Dimanche",
            "ouverture":"08h00",
            "fermeture":"22h00"
        }],
    }],
    utilisateurs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"utilisateur"
      }]


},{
    toJSON: {
        transform : function(doc, ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.token;
            delete ret.__v;
          

        }
    }
})
module.exports = mongoose.model('pharmacie', Pharmacie);