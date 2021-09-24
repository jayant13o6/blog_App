const Blog = require('../models/blog.js');
const Users = require('../models/users.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.cookie1;
        const verifyUser = jwt.verify(token,'verystrongsecrettokeep');
        // console.log('info1:',verifyUser);
        
        const userCheck = await Users.findOne({_id:verifyUser._id})
        // console.log('info2:',userCheck);
        console.log('info3:', userCheck.Username);
        req.userCheck = userCheck;
        req.token = token;
        next();

    } catch (error) {
        console.log(error)
    }
}

module.exports = auth;