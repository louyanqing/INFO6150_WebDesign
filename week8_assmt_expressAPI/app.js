const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({extended:true}))// parse url-encoded bodies(from data)
app.use(express.json())// parse JSON requests

// routes
app.use('/user', require('./routes/user'))

const port = 3000 // local host

//express.static('folder')
//通过这个函数，服务器可以直接提供静态文件（如 HTML、CSS、JavaScript、图片等），无需额外的路由处理。
//  /static 路径：可以用于提供公共资源文件，例如 JavaScript、CSS 文件，图标等。
//  /files 路径：可以用于提供用户上传的文件或图像等内容。

/*当客户端访问 http://yourdomain.com/static/filename.ext 时，
服务器会从 public 文件夹中寻找 filename.ext 文件。*/
app.use('/static', express.static('public'))
/*
当客户端访问 http://yourdomain.com/files/filename.ext 时，
服务器会从 images 文件夹中寻找 filename.ext 文件。*/
app.use('/files', express.static('images'))

// MongoDB connection
const MONGODB_URL = "mongodb+srv://yanqinglou:426802Atlas@cluster0.04fdt.mongodb.net/express_test_db?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(MONGODB_URL,{})
        .then(() => console.log('MongoDB connected successfully!'))
        .catch(err => console.log(eer))

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})

module.exports = app


