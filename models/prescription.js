const mongoose = require('mongoose');

const Prescription = new mongoose.Schema ({
    description: { 
        type:String,
        default:"",
        required:true
    
    },
    ordonnance:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ordonnance"
    },
    medicament:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"medicament"
    }]
},{
    toJSON: {
        transform : function(doc, ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
})
module.exports = mongoose.model('prescription', Prescription);