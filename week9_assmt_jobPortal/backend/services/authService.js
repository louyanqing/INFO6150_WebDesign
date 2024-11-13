const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.authenticateUser = async(username, password)=>{
    try{

        //find user by email
        const user = await User.findOne({email:username})

        if(!user){
            //user not found
            console.log('User not found')
            return{success:false, message:"User not found"}
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            //Passwords do not match
            console.log('Incorrect password')
            return {success:false, message:'Incorrect password'}
        }

        //authentication successful
        console.log('User authenticated successfully:', `id:${user._id}, fullName: ${user.fullName}, email: ${user.email} `)
        return {success:true, message:'Authentication successful', user:{id:user._id, fullName:user.fullName, email:user.email}}

    }catch(error){
        return {success:false, message:'An Error occurred during authentication'}
    }
}