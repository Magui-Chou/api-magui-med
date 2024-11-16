const mongoose = require('mongoose');

const Medicament = new mongoose.Schema ({
    nom: { 
        type:String,
        default:"",
        required:true
    
    },
    prix: { 
        type:String,
        default:"",
        required:true
    
    }
},{
    toJSON: {
        transform : function(doc, ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
})
module.exports = mongoose.model('medicament', Medicament);