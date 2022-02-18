var express = require('express');
var router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

router.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to TinyTeam backend API server'
    })
})

router.use('/changedir', require('changedir.js'))
router.use('/register', require('register.js'))
router.use('/login', require('login.js'))
router.use('/logout', require('logout.js'))

module.exports = router;
