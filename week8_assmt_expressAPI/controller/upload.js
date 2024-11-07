const User = require('../model/user')
const upload = require('../module/uploadImage')
const path = require('path')
const fs = require('fs')

exports.uploadImage = (req,res) => {
    const uploadPath = path.join(__dirname, '../images')
    console.log(uploadPath)

    if (!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath)
    }

    upload.single('image')(req,res, async (err)=>{
        if(err){
            return res.status(400).json({message: err.message})
        }

        try{
            const {email} = req.body
            const user = await User.findOne({email})
            
            if(!user) return res.status(404).json({message:'User not found'})

            console.log(req.file)

            user.imagePath = req.file.path
            await user.save()

            res.json({
                message:'Image uploaded successfully',
                filePath: req.file.path
            })

        }catch(error){
            res.status(400).json({error:error.message})
        }
    })

}
