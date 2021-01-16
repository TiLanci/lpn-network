const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

module.exports = (req, res, next) => {
    if (req.headers.authorization.split(" ")[1]){
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_ADMIN_AUTH);
            User
            .findById({'_id':ecoded.userId, 'admin':true})
            .exec()
            .then((user)=>{
                // finally an admin
                req.userData = decoded;
                next();
            })
            .catch(err=>{
                return res.status(403).json({
                    message: 'Acess Denied',
                });
            })
        } catch (error) {
            return res.status(403).json({
                message: 'Acess Denied',
            });
        }
    } else {
        return res.status(403).json({
            message: ' Acess Denied ',
        });
    }
};