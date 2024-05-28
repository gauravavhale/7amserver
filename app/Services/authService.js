var authDAO = require ("../Dao/authDAO")

async function loginService(data){
    var result =await authDAO.loginDAO(data)
    if(result){
        result = {uid:result.uid, id:result._id};
    }
    return result
}

module.exports={
    loginService
}