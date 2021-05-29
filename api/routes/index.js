const express = require("express");
const router = express.Router();

const AuthRoutes = require('./auth.route');
router.use('/auth', AuthRoutes);
const ForumRoutes = require('./forum.route');
router.use('/forum', ForumRoutes);
const InstitutionRoutes = require('./institution.route');
router.use('/institution', InstitutionRoutes);

module.exports = router;