const userModel = require('../models/user_model')

const getAllUsers = async (req,res) => {
    try{
        const users = await userModel.getAllUsers()
        if(users.length==0) res.json({message:'User Not Found'})
        res.json(users)
    }
    catch(error)  {
        console.log(error);
        res.json({message:'Error get All Users'})
    }
}
const getUserById = async (req,res) => {
    try {
        const user = await userModel.getUserById(req.params.id)
        if(user.length==0) res.json({message:'User Not Found'})
        else res.json(user)
    } catch (error) {
       console.log(error);
       res.json({message:'Error Get User By Id'})
    }
}
const addUser = async (req,res) => {
    try {
        const user = await userModel.addUser(req.body)
    if(user) res.status(200).json({id:user,...req.body})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error Add User'}) 
    }
}
module.exports = {getAllUsers,getUserById,addUser}