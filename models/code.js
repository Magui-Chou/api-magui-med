const mongoose = require('mongoose');

const CodePhone = new mongoose.Schema ({
    code: { 
        type:String,
        unique:true,
        required:true
    },
    telephone: { 
        type:String,
       
    },
    valide: { 
        type:Boolean,
        default: false
       
    },
    date: { 
        type:Date,
        default:Date.now()
       
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
module.exports = mongoose.model('code', CodePhone);