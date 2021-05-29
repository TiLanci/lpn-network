const mongoose = require("mongoose");

const InstitutionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
        // U: Unoiversity
        // C: Company
    },
    location:{
        type: String,
        required: true
    },
    descirption:{
        type: String,
        required: true
    },
    logo:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'File',
        required: true
    },
    bgImage:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'File',
        required: true
    },
    
    ratings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }],
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Institution", InstitutionSchema);