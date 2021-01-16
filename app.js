const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 
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

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const AllRoures= require('./api/routes'); 
app.use('/api', AllRoures);

module.exports = app;