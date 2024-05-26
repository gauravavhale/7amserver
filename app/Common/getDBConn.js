var  mongo = require('mongodb')
async function getDBCon(){
    var url = "mongodb+srv://u1:p1@p1.ib6esez.mongodb.net/"
    var mongoClient = mongo.MongoClient;
    var mongoServer = await mongoClient.connect(url)
    var db = mongoServer.db("School")
    return db
}

module.exports=getDBCon