const mongoose = require('mongoose');
const fonction = require('./fonction');

const utilisateur = new mongoose.Schema ({
    nom: { 
        type:String,
        default:"",
        required:true
    
    },
    prenom: { 
        type:String,
        default:"",
        required:true
    
    },
    date_naissance: {
        type:String,
        required:true,
        default: new Date().toISOString()
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
    email:{
        type:String,
        default:null

    },
    password: {
        type:String,
        required:true
    },
    token: {
        type:String,
        default:''
    },
    role: {
    type:String, 
    enum:['docteur','patient'],
    default:'docteur',
     } ,
    fonction:{
        type: String, 
        default:'',
    },
    hopitaux:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hopital"
    }],
    services:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"service"
    }],


},{
    toJSON : {
        transform : function (doc,ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.token;
            delete ret.__v;
        }
    }
})
module.exports = mongoose.model('utilisateur', utilisateur);