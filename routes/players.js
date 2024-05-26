var express = require('express')
var router = express.Router()

// Query Parameter
// a. as part of request URL b.Starts with ? c.key-value pair d.any but not recommended e.seperate using &
router.get("/get-players",function(req,res,next){// receive the req

    // take the data from req
    var n = req.query.name
    var l = req.query.loc
    res.send(`This is ${n}, I'm from ${l}`)
})

//Path Parameter - name,loc
// a. as part of request url b. starts with / c. pass only value d.any but not recommended e. using/

router.get("/get-player-path/:name/:loc",function(req,res,next){// receive the req

    // take the data from req
    var n = req.params.name
    var l = req.params.loc
    
    res.send(`This is ${n}, I'm from ${l}`)
})

//Request Header - name,loc
// a. as part of request headers b. Object format c. key,value d. any but not recommended

router.put("/get-player-headers",function(req,res,next){// receive the req

    // take the data from req
    var n = req.headers.name
    var l = req.headers.loc
    
    res.send(`This is ${n}, I'm from ${l}`) 
})

//Request Body - name,loc
// a. as part of request body b. Object format c. key,value d. any but not recommended

router.post("/get-player-body",function(req,res,next){// receive the req

    // take the data from req
    var n = req.body.name
    var l = req.body.loc
    
    res.send(`This is ${n}, I'm from ${l}`)
})

module.exports = router;