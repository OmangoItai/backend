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

router.post('/', (req,res) => {
    var uid = req.session.userId
    var downloadList = req.downloadList
    for(path in downloadList){
        path = res.path + path
    }
    //smth on database
    res.send({
        //send files
    });
    // smth on database
})

module.exports = router;