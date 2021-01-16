const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const crypto = require("crypto");
const moment = require("moment");

// MiddelWares 
const checkAuth = require('../middlewares/checkauth.middleware');

// Models
const User = require("../models/user.model");
const University = require("../models/university.model");

// Images Upload
const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'./uploads/University/')
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

// see universities
/**
 * jst get universities
 */
router.get('/universities', (req, res, next)=>{
    University
    .find()
    .exec()
    .then(universities=>{
        res.status(200).json({
            message:'these are the universities',
            universities: universities
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// add university
/**
 * get university's: 
 *      name
 *      location
 *      Descirption
 *      Images
 *      Publisher id
 * post university to db
 */
router.post('/add', (req, res, next)=>{
    const newuniversity = new University({
        _id:mongoose.Types.ObjectId(),
        name: req.body.name,
        location: req.body.location,
        descirption: req.body.location,
        images: req.body.images,
        pubid:req.userData.userId
    })
    newuniversity
    .save()
    .then(result=>{
        res.status(201).json({
            message:'University Added Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// rate university
/**
 * get university
 * post rating to db
 */
router.post('/rate', (req, res, next)=>{
    let rating = {
        comment: req.body.comment,
        _creationdate:moment().format(),
        professors: req.body.professors,
        courses: req.body.courses,
        establishment: req.body.establishment,
        equipment: req.body.equipment,
        library: req.body.library,
        location: req.body.location,
        user: req.userData.userId
    } 
    University
    .findByIdAndUpdate(req.body.comId, {$push:{ratings:rating}})
    .exec()
    .then(result=>{
        res.status(201).json({
            message:'Rating Added Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// edit university
/**
 * get university
 * post rating to db
 */

// delete university
/**
 * admin access
 * university id 
 * delete university
 */
router.delete('/delete',(req,res,next)=>{
    University
    .findOneAndDelete(req.body.comId)
    .exec()
    .then(result=>{
        res.status(201).json({
            message:'University deleted Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;
