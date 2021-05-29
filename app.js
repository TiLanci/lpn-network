const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

mongoose.connect(
    'mongodb+srv://'+process.env.MONGO_DB_USER+':'+process.env.MONGO_DB_PASS+'@cluster1.f7ymi.mongodb.net/'+process.env.MONGO_DB_NAME+'?retryWrites=true&w=majority',
    {   useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(
        ()=>{
            console.log('Connected To The Data Base')
        },
        err =>{
            console.log('Connection Error')
            console.error(err)
        })
   
app.use(morgan('dev'));

app.use(express.urlencoded({extended : false}));
app.use(express.json());

const AllRoures= require('./api/routes'); 
app.use('/api', AllRoures);

app.use(express.static('public'));
app.use('/uploads',express.static('uploads'));

module.exports = app;