const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{
        type: String,
        required: true
    },
    email: {
        type:String, 
        required:true , 
        match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    birthdate: {
        type: String, // DD/MM/YYYY
        required: true
    },
    pdp:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'File',
        required: true
    },
    LPN_joindate: {
        type: String, // YYYY
        required: true
    },
    currentState:{
        type: String,
        required: true
        // SS: mazl fi LPN
        // W: Working
        // CS: College Student
    },
    phone: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    verif: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'File',
        required: true
    },
    about:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true,
        default:'NA'
        // NA: Non Approved
        // P: Pending
        // A: Approved
    },
    admin:{
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps:true
});
module.exports = mongoose.model("User", UserSchema);