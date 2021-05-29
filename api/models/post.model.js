const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content:{
        type: String,
        required: true
    },
    rate: {
        type: Number,
        default: -1
    },
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    total_votes:{
        type: Number,
        required: true,
        default: 0
    },
    votes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Vote'
    }],
    
},{
    timestamps:true
});

module.exports = mongoose.model("Post", PostSchema);