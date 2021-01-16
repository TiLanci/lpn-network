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
const Company = require("../models/company.model");

// Images Upload
const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'./uploads/Company/')
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

// see companies
/**
 * jst get companies
 */
router.get('/companies', (req, res, next)=>{
    Company
    .find()
    .exec()
    .then(companies=>{
        res.status(200).json({
            message:'these are the companies',
            companies: companies
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// add company
/**
 * get company's: 
 *      name
 *      location
 *      Descirption
 *      Images
 *      Publisher id
 * post company to db
 */
router.post('/add', (req, res, next)=>{
    const newcompany = new Company({
        _id:mongoose.Types.ObjectId(),
        name: req.body.name,
        location: req.body.location,
        descirption: req.body.location,
        images: req.body.images,
        pubid:req.userData.userId
    })
    newcompany
    .save()
    .then(result=>{
        res.status(201).json({
            message:'Company Added Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// rate company
/**
 * get company
 * post rating to db
 */
router.post('/rate', (req, res, next)=>{
    let rating = {
        comment: req.body.comment,
        _creationdate:moment().format(),
        salary: req.body.salary,
        workplace: req.body.workplace,
        workenv: req.body.workenv,
        carreerOpp: req.body.carreerOpp,
        safety: req.body.safety,
        culture: req.body.culture,
        user: req.userData.userId
    } 
    Company
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

// edit company
/**
 * get company
 * post rating to db
 */

// delete company
/**
 * admin access
 * company id 
 * delete company
 */
router.delete('/delete',(req,res,next)=>{
    Company
    .findOneAndDelete(req.body.comId)
    .exec()
    .then(result=>{
        res.status(201).json({
            message:'Company deleted Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;