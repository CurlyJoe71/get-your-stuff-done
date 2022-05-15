const router = require('express').Router();
// const dbRoutes = require('./api/database');
const testRoutes = require('./test');

// router.use('/api', dbRoutes);
router.use('/test', testRoutes);

module.exports = router;