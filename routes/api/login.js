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
    var username = req.username
    var password = req.password

    if(!username || !password) {
        res.status(401).json({
            msg: 'password or username is illegal.'
        })
        return
    }

    req.session.username = username
    res.send({
        msg: 'welcome.'
    });
    // smth on database
})

module.exports = router;