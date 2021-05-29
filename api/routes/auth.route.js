const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const crypto = require("crypto");
const mailer = require("nodemailer");
const moment = require("moment");

// MiddelWares
const {checkAdminAuth,checkAuth,checkEmail,checkResetPass} = require("../middlewares");

// Models
const {User,File} = require("../models");

// Images Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/User");
  },
  filename: function (req, file, cb) {
    let id = mongoose.Types.ObjectId();
    const newFile = new File({
      _id: id,
      filePath:'/uploads/User/'+id+"." +file.mimetype.split("/")[1],
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
      res.status(500).json({ error: err });
    });
  },
});
const filterimg = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") cb(null, true);
  else cb(null, false);
};
const upload = multer({ storage: storage, fileFilter: filterimg });

// Emailer
const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// sign up
/**{name:'userImage'},{name:'verifImage'} */
router.post(
  "/signup",
  upload.fields([{ name: "pdpImage" }, { name: "verifImage" }]),
  (req, res, next) => {
    const email = req.body.email.toLowerCase();
    User.find({ email: email })
      .exec()
      .then((users) => {
        if (users.length > 0) {
          res.status(409).json({
            message: "Mail Exists",
          });
        } else {
          let pass = crypto
            .createCipheriv(
              "aes-256-gcm",
              process.env.CRYPTO_KEY,
              process.env.CRYPTO_IV
            )
            .update(req.body.password, "utf-8", "hex");

          const newuser = new User({
            _id: mongoose.Types.ObjectId(),
            username: req.body.username,
            email: req.body.email.toLowerCase(),
            password: pass,
            pdp: req.files.pdpImage[0].filename.split('.')[0],
            birthdate: moment(req.body.birthdate).format("DD/MM/YYYY"),
            LPN_joindate: moment(req.body.LPN_joindate).format("YYYY"),
            currentState: req.body.currentState,
            phone: req.body.phone,
            verif: req.files.verifImage[0].filename.split('.')[0],
            about:req.body.about
          });
          newuser
            .save()
            .then((result) => {
              res.status(201).json({
                message: "Your Account Request is being reviewed",
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({ error: err });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }
);
//pending users
/**
 * admin auth
 * list users
 */
 router.get("/pending", checkAdminAuth,(req, res, next) => {
    User.find({ state: "NA" })
      .select('_id username email pdp birthdate LPN_joindate currentState phone verif')
      .then((users) => {
        res.status(200).json({
            message:"this is a list of pending users",
            users: users.map(user=>{
                return{
                    "username": user.username,
                    "email": user.email,
                    "pdp": user.pdp,
                    "birthdate": user.birthdate,
                    "LPN_joindate": user.LPN_joindate,
                    "currentState": user.currentState,
                    "phone": user.phone,
                    "verif": user.verif,
                    "acc_user": "/api/auth/accuser/"+user._id
                }
            })
        })
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

// accept user
/**
 * admin auth
 * user(id) --> Pending State
 * send email
 */

router.patch("/accuser/:id",checkAdminAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { state: "P" })
    .then((user) => {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_VERIF_EMAIL);
      var mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "Verify Your Email",
        text: token,
      };
      transporter.sendMail(mailOptions, function (err, sent) {
        if (err) {
            res.status(500).json({ error: err }); 
            console.log(err);
        }
        else {
          res.status(200).json({
            message: "User approved, Verfication Email sent",
          });
          console.log("Email Sent");
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// verify email
/**
 * recive email
 * user ==> approved
 */
router.patch("/verifemail", checkEmail, (req, res, next) => {
  User.findByIdAndUpdate(req.userData.userId, { state: "A" })
    .then((user) => {
      res.status(200).json({
        message: "Your email have been verified",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// sign in
/**
 * email + pass
 * verify acc valid
 * gen token
 * return token
 */
router.post("/signin", (req, res, next) => {
  const email = req.body.email.toLowerCase();
  User.find({ email: email, state: "A" })
    .exec()
    .then((users) => {
      if (users.length < 1) {
        res.status(401).json({
          err: "",
        });
      } else {
        const user = users[0];
        let pass = crypto
            .createDecipheriv(
              "aes-256-gcm",
              process.env.CRYPTO_KEY,
              process.env.CRYPTO_IV
            )
            .update(user.password, "hex", "utf-8");
        if (req.body.password == pass) {
          if (user.admin) {
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_ADMIN_AUTH
            );
            res.status(200).json({
              message: "Welcome Admin",
              token: token,
            });
          } else {
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_USER_AUTH
            );
            res.status(200).json({
              message: "Welcome",
              token: token,
            });
          }
        } else {
          res.status(401).json({
            err: "Acess Denied",
          });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// forgot password
/**
 * email
 * gen unique code
 * send email + token
 */

router.post("/forgetpass", (req, res, next) => {
  User.findOne({ email: req.body.email.toLowerCase() })
    .then((user) => {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_RESET_PASS);
      var mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "Resst Your Pass",
        text: token,
      };
      transporter.sendMail(mailOptions, function (err, sent) {
        if (err) console.log(err);
        else console.log("Email Sent");
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// reset password
/**
 * token
 * new pass
 * redirect
 */
router.patch("/resetpass", checkResetPass, (req, res, next) => {
  User.findByIdAndUpdate(req.userData.userId, { password: req.body.password })
    .then((user) => {
      res.status(200).json({
        message: "It's all good",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
