const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const crypto = require("crypto");
const moment = require("moment");
const mailer = require('nodemailer')

// MiddelWares 
const {checkAuth,checkAdminAuth} = require("../middlewares");

// Models
const {Post,Institution,File} = require("../models");

// Images Upload
// Images Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/Institution");
    },
    filename: function (req, file, cb) {
      let id = mongoose.Types.ObjectId();
      const newFile = new File({
        _id: id,
        filePath:'/uploads/Institution/'+id+"." +file.mimetype.split("/")[1],
        fileType: file.mimetype,
        fileUse: file.fieldname,
      })
      newFile
      .save()
      .then((savedfile) => {
        cb(
          null,
          savedfile._id +"." +file.mimetype.split("/")[1]
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ 
            message: "upload error",
            error: err });
      });
    },
});
const filterimg = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") cb(null, true);
    else cb(null, false);
};
const upload = multer({ storage: storage, fileFilter: filterimg });

// see institutions
/**
 * jst get institutions
 */
router.get('/',checkAuth, (req, res, next)=>{
    Institution
    .find()
    .exec()
    .then(institutions=>{
        res.status(200).json({
            message:'these are the institutions',
            institutions: institutions
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.get('/:search-str',checkAuth, (req, res, next)=>{
    Institution
    .find()
    .exec()
    .then(institutions=>{
        res.status(200).json({
            message:'these are the institutions',
            institutions: institutions.find(institution => institution.name.includes(req.params.search_str))
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.get('/:insId',checkAuth, (req, res, next)=>{
    Institution
    .findById(req.params.insId)
    .exec()
    .then(institution=>{
        res.status(200).json({
            message:'this is the institution',
            institution: institution,
            rate:{
                method:"POST",
                path:'/api/institution/rate/'+institution._id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})


// add Institution
/**
 * get Institution's: 
 *      name
 *      location
 *      Descirption
 *      Images
 *      Publisher id
 * post Institution to db
 */
router.post('/add',checkAdminAuth,upload.fields([{ name: "bgImage" }, { name: "logo" }]) , (req, res, next)=>{
    const newinstitution = new Institution({
        _id:mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
        descirption: req.body.location,
        bgImage: req.files.bgImage[0].filename.split('.')[0],
        logo: req.files.logo[0].filename.split('.')[0],
        _user:req.userData.userId
    })
    newinstitution
    .save()
    .then(result=>{
        res.status(201).json({
            message:'Institution Added Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// rate institution
/**
 * post rating to db (POST)
 * append to Institution
 */
router.post('/rate/:insId' ,checkAuth ,(req, res, next)=>{
    Institution
    .findOne(req.params.instId)
    .populate('ratings')
    .exec()
    .then(institution=>{
        if(!institution.ratings.find(rating=>rating._user == req.userData.userId)){
            const newPost = new Post({
                _id:mongoose.Types.ObjectId(),
                content: req.body.content,
                rate: req.body.rate,
                _user: req.userData.userId
            })
            newPost
            .save()
            .then(post=>{
                Institution
                .findOneAndUpdate(req.params.instId, {$push:{ratings:post._id}}, {new:true})
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
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
        } else{
            res.status(400).json({
                message:"You can not post more than one rating"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })


})

// edit university
/**
 * get university
 * post rating to db
 */

 router.patch('/edit/:insId',(req,res,next)=>{
    const updateOps = {};
    for( const ops of req.body.updateOps){
        updateOps[ops.propName] = ops.value;
    }
    Institution
    .findOneAndUpdate(req.params.instId,{$set:updateOps})
    .exec()
    .then(result=>{
        
        res.status(201).json({
            message:'Institution Updated Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// delete university
/**
 * admin access
 * university id 
 * delete university
 */
router.delete('/delete/:instId',(req,res,next)=>{
    Institution
    .findOneAndDelete(req.params.instId)
    .exec()
    .then(result=>{
        res.status(201).json({
            message:'Institution deleted Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;
