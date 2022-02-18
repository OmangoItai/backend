const express = require('express');
const session = require('express-session')
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('*', createProxyMiddleware({
    target: process.env.PROXY,
    changeOrigin: true,
}))

router.get('/', (req,res) => {
    // smth on database
    if(){
       res.send({}) 
    }else{
        res.send({})
    }
})

module.exports = router;