const User = require('../model/usermodel');
const { decodeToken } = require('../utils/token')
const { errorResponse } = require('../utils/responses')


const authguard = async(req,res,next) => {
    try {
        if(req.headers && req.headers.authorization) {
            const token = await req.headers.authorization.split(' ')[1];
            const decode = await decodeToken(token);
            const user = await User.findById(decode.id);
            if(!user) return errorResponse(res,401,'user not found');
            req.user = user;
            return next()
        } else {
            return errorResponse(res,401,'authorization not found');
        }
    } catch (error) {
        return errorResponse(res,500,error.message);
    }
}

module.exports = {
    authguard,
}