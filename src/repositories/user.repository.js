const { get } = require('mongoose');
const User = require('../models/user.model');

const GetUserByUserName = async (username) => {
   return await User.find({username: username});
}



module.exports = {GetUserByUserName};