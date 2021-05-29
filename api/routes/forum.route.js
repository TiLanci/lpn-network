const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const moment = require("moment");
const mailer = require('nodemailer')

// MiddelWares 
const {checkAuth} = require('../middlewares');

// Models
const {User,Post,Vote, Institution} = require("../models");

// add post
router.post('/add', (req, res, next)=>{
    const newPost = new Post({
        _id:mongoose.Types.ObjectId(),
        content: req.body.content,
        _creationdate: moment().format(),
        _user: req.userData.userId
    })
    newPost
    .save()
    .then(post=>{
        res.status(200).json({
            message:"Post Added Successfully",
            post
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })

})

// delete post 
router.delete('/delete/:postId',(req,res,next)=>{
    Post
    .findOneAndDelete(req.body.postId)
    .exec()
    .then(result=>{
        res.status(201).json({
            message:'Post deleted Successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// vote
router.post('/vote/:postId' ,checkAuth ,(req, res, next)=>{
    let voteval = -1;
    if(req.body.type) voteval = 1;
    Vote
    .find({_post:req.params.postId, _user:req.userData.userId})
    .exec()
    .then(votes=>{
        if(votes.length==0){
            const newVote = new Vote({
                _id: mongoose.Types.ObjectId(),
                type: req.body.type,
                _post:req.params.postId ,
                _user: req.userData.userId
            })
            newVote
            .save()
            .then(vote=>{
                Post
                .findOneAndUpdate({_id:req.params.postId},{$inc:{total_votes:voteval},$push:{votes:vote._id}},{new:true})
                .exec()
                .then(result=>{
                    res.status(201).json({
                        message:'Vote Created Successfully',
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
        } else {
            if(votes[0].type != req.body.type){
                Vote
                .findOneAndUpdate({_id:votes[0]._id},{$set:{type:req.body.type}})
                .exec()
                .then(result=>{
                    Post
                    .findOneAndUpdate({_id:req.params.postId},{$inc:{total_votes:voteval*2}},{new:true})
                    .exec()
                    .then(result=>{
                        res.status(201).json({
                            message:'Vote Updated Successfully',
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
                res.status(201).json({
                    message:'Vote Updated Successfully',
                })
            }
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})


module.exports = router;
