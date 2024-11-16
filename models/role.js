const mongoose = require('mongoose');

const Role = new mongoose.Schema ({
    title: { 
        type:String,
        default:"",
        required:true
    }
},{
    toJSON: {
        transform : function (doc, ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;

        }
    }
})
module.exports = mongoose.model('role', Role);
