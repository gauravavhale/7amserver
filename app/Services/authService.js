var authDAO = require ("../Dao/authDAO")

async function loginService(data){
    var result =await authDAO.loginDAO(data)
    return result;
}

module.exports={
    loginService
}