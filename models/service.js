const mongoose = require('mongoose');

const Service = new mongoose.Schema ({
    title: { 
        type:String,
        default:"",
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
            "ouverture":"07h00",
            "fermeture":"16h00"
        },{
            "jour":"Mercredi",
            "ouverture":"07h00",
            "fermeture":"16h00"
        },{
            "jour":"Jeudi",
            "ouverture":"07h00",
            "fermeture":"16h00"
        },{
            "jour":"Vendredi",
            "ouverture":"07h00",
            "fermeture":"16h00"
        },{
            "jour":"Samedi",
            "ouverture":"07h00",
            "fermeture":"16h00"
        },{
            "jour":"Dimanche",
            "ouverture":"07h00",
            "fermeture":"16h00"
        }],
    
    }],
    chef_service: { 
        type:String,
        unique:true,
        required:true
    
    },
    telephone:{
        type:String,
        required:true,
        default:''

    },
    utilisateurs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"utilisateur"
      }],

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
module.exports = mongoose.model('service', Service);