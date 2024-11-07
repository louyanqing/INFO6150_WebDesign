const express = require("express");

const { createUser, updateUser, deleteUser, getUser, getAllUsers} = require('../controller/user')
const { uploadImage}  = require('../controller/upload')

const router = express.Router();

router.get("/", (req,res) => {
    res.send("hello user");
})

router.post('/create', createUser)
router.put('/edit', updateUser)
router.delete('/delete', deleteUser)
router.get('/get', getUser)
router.get('/get_all', getAllUsers)
router.post('/upload_image', uploadImage)

module.exports = router