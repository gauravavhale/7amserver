var express = require('express');
var router = express.Router()

router.get('/get-std',function(req,res,next){
    res.send("Hello World...")
})


module.exports=router
