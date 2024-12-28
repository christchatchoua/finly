const User = require('../libs/models/user.model');
//const { getMaxListeners } = require('../libs/models/user.model');

const createUser = async (req,res) =>{
    await User.create({
        email:'chris@gmail.com.com',
        password:'password',
    });
    res.render('user',{message:'your user is created',user: null});
};

const getUser = async (req,res)=>{
    const user = await User.findOne({email:'chris@gmail.com'});

    res.render('user', {message: 'User retrieved ', user:null});
};

const deleteUser = async (req,res)=>{
    const user = await User.findOneAndDelete({ email: 'chris@gmail.com'});
    res.render('user',{message:'user deleted', user:null})
};

module.exports = {
    getUser,
    createUser,
    deleteUser,
};