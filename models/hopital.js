const mongoose = require('mongoose');

const Hopital = new mongoose.Schema ({
    title: { 
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
module.exports = mongoose.model('hopital', Hopital);