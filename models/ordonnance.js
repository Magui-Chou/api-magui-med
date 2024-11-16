const mongoose = require('mongoose');

const Ordonnance = new mongoose.Schema ({
    reference: { 
        type:String,
        default:"",
        required:true
    
    },
    date_inscription: { 
        type:String,
        required:true,
        default: new Date().toISOString()
    
    },
    date_achat: { 
        type:String,
        required:true,
        default: new Date().toISOString()
    
    },
    docteur:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"utilisateur"
    },
    patient:{
    type:Mongoose.Schema.Types.ObjectId,
    ref:"utilisateur"
    },


},{
    toJSON: {
        transform : function(doc, ret){
            ret.id = ret._id,
            delete _id
          

        }
    }
})
module.exports = mongoose.model('ordonnance', Ordonnance);