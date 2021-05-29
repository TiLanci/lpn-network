const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.headers.authorization){
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_VERIF_EMAIL);
            req.userData = decoded;
            next();
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