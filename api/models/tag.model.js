const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tag:{
        type: String,
        required: true
    },
    total_use:{
        type: Number,
        required: true,
        default: 0
    },
    
});

module.exports = mongoose.model("Tag", TagSchema);