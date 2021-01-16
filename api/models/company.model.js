const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    descirption:{
        type: String,
        required: true
    },
    images:[{
        type: String,
        required: true
    }],
    pubid:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    ratings:[
        RatingSchema
    ]
});


const RatingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    comment:{
        type: String,
        required: true
    },
    _creationdate:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    workplace:{
        type: Number,
        required: true
    },
    workenv:{
        type: Number,
        required: true
    },
    carreerOpp:{
        type: Number,
        required: true
    },
    safety:{
        type: Number,
        required: true
    },
    culture:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
});
module.exports = mongoose.model("Company", CompanySchema);