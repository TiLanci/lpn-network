const mongoose = require("mongoose");

const UniversitySchema = mongoose.Schema({
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
    professors:{
        type: Number,
        required: true
    },
    courses:{
        type: Number,
        required: true
    },
    establishment:{
        type: Number,
        required: true
    },
    equipment:{
        type: Number,
        required: true
    },
    library:{
        type: Number,
        required: true
    },
    location:{
        type: Number,
        required: true
    },
});
module.exports = mongoose.model("University", UniversitySchema);