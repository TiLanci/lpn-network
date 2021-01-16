const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const crypto = require("crypto");

// MiddelWares 
const checkAuth = require('../middlewares/checkauth.middleware');

// Models
const User = require("../models/user.model");

// Images Upload
const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'./uploads/Users/')
    },
    filename : function(req, file,cb){
        cb(null, req.body.username+ '.' + file.mimetype.split('/')[1])
    }
})
const filterimg = (req,file,cd)=>{
    if(file.mimetype.split('/')[0]==='image') cd (null, true)
    else cd (null, false)
}
const upload = multer({storage: storage, fileFilter:filterimg});

// Emailer
const transporter = mailer.createTransport({
    service : 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
})

// sign up
router.post('/signup', upload.fields({name:'userImage'},{name:'verifImage'}),(req,res,next)=>{
    User.find({email:req.body.email.toLowerCase()})
    .exec()
    .then(users =>{
        if (users.length>0){
            res.status(409).json({
                message: 'Mail Exists',
            })
        } else {  
            let pass = crypto.createCipheriv("aes-256-gcm",key,process.env.CRYPTO_IV).update(req.body.password,"utf-8","hex");
            // fix image dist after test
            let imgdest = ()=>{
                if (req.file) return imgdest = req.file.destination + req.file.filename;
                else return undefined
            }
            const newuser = new User({
                _id:mongoose.Types.ObjectId(),
                username: req.body.username,
                email: req.body.email.toLowerCase(),
                password: pass,
                pdp: imgdest(),
                birthdate: req.body.birthdate,
                LPN_joindate: req.body.LPN_joindate,
                currentState: req.body.currentState,
                phone: req.body.phone,
                verif: imgdest(),
            })
            newuser
            .save()
            .then(result=>{
                res.status(201).json({
                    message:'Your Account Request is being reviewed',
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})
// accept user
/** 
 * admin auth
 * user(id) --> Pending State
 * send email
 */

router.patch('/accuser',(req,res,next)=>{
    User
    .findByIdAndUpdate(req.body._id,{state:'P'})
    .then(user=>{
        const token = jwt.sign({userId:user._id,},process.env.JWT_VERIF_EMAIL)
        var mailOptions = {
            from: process.env.EMAIL,
            to : user.email,
            subject: 'Verify Your Email',
            text: token,                 
        }
        transporter.sendMail(mailOptions,function(err,sent){
            if (err) console.log(err)
            else console.log('Email Sent')
        })
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// verify email
/** 
 * recive email
 * user ==> approved
 */
router.patch('/verifemail/:id',(req,res,next)=>{
    User
    .findByIdAndUpdate(req.params._id,{state:'A'})
    .then(user=>{
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// sign in
/**
 * email + pass
 * verify acc valid
 * gen token
 * return token
 */
router.post('/signin',(req,res,next)=>{
    const email = req.body.email.toLowerCase()
    User.find({email:email,state:'A'})
    .exec()
    .then(users =>{
        if (users.length<1){
            res.status(401).json({
                err:'',
            })
        } else {
            const user = users[0]
            if(req.body.password == users[0].password){
                if(user.admin){
                    const token = jwt.sign({userId:user._id} , process.env.JWT_ADMIN_AUTH )
                    res.status(200).json({
                        message:'Welcome',
                        user:user,
                        token: token
                    })
                } else {
                    const token = jwt.sign({userId:user._id} , process.env.JWT_USER_AUTH )
                    res.status(200).json({
                        message:'Welcome',
                        user:user,
                        token: token
                    })
                }
            } else {
                res.status(401).json({
                    err:'Acess Denied'
                })
            }
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// forgot password 
/**
 * email
 * gen unique code
 * send email + token
 */

router.post('/forgetpass',(req,res,next)=>{
    User
    .findOne({email:req.body.email.toLowerCase()})
    .then(user=>{
        const token = jwt.sign({userId:user._id,},process.env.JWT_RESET_PASS)
        var mailOptions = {
            from: process.env.EMAIL,
            to : user.email,
            subject: 'Resst Your Pass',
            text: token,                 
        }
        transporter.sendMail(mailOptions,function(err,sent){
            if (err) console.log(err)
            else console.log('Email Sent')
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// verif reset pass token 
/**
 * token
 * redirect
 */

router.post('/verfpasstoken/:id',(req,res,next)=>{
    res.status(200).json({
        message:"It's all good"
    })
})

// reset password 
/**
 * token
 * new pass
 * redirect 
 */
router.patch('/resetpass/:id',(req,res,next)=>{
    User
    .findByIdAndUpdate(req.params._id,{password:req.body.password })
    .then(user=>{
        res.status(200).json({
            message:"It's all good"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;