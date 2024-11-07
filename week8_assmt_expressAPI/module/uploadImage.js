const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// allow only JPEG, PNG, GIF files
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname.toLowerCase()))
    const mimeType = fileTypes.test(file.mimetype)

    if(extName && mimeType){
        cb(null, true)
    }else{
        cb(new Error('Error: Only JPEG,PNG,and GIF image formats are allowed'))
    }
}

const upload = multer({
    storage:storage,
    fileFilter: fileFilter
})

module.exports = upload