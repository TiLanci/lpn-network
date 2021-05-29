const checkAdminAuth = require("./checkadmin.middleware");
const checkAuth = require("./checkauth.middleware");
const checkEmail = require("./checkemailverif.middleware");
const checkResetPass = require("./checkresetpass.middleware");


module.exports={
    checkAdminAuth,
    checkAuth,
    checkEmail,
    checkResetPass
}