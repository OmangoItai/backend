const express = require('express');
const session = require('express-session')
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('*', createProxyMiddleware({
    target: process.env.PROXY,
    changeOrigin: true,
}))

router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

router.get('/', (req,res) => {
    req.session.logout = true;
    res.send({
        msg: 'logouted.'
    });
    // smth on database
})

module.exports = router;