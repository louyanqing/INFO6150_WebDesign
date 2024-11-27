const express = require('express');
const Company = require('../models/companyModel');
const router = express.Router();

// get all companies with their images
router.get('/', async (req, res) => {
    try {
        // const companies = await Company.find();
        const companies = [{_id:1, name: "alibaba", imagePath: "alibaba.png"},
                            {_id:2, name: "amazon", imagePath: "amazon.png"},
                            {_id:3, name: "apple", imagePath: "apple.png"},
                            {_id:4, name:"baidu", imagePath: "baidu.png"},
                            {_id:5, name: "google", imagePath: "google.png"},
                            {_id:6, name: "huawei", imagePath: "huawei.png"},
                            {_id:7, name: "instcart", imagePath: "instcart.png"},
                            {_id:8, name: "linkedin", imagePath: "linkedin.png"},
                            {_id:9, name:"meta", imagePath: "meta.png"},
                            {_id:10, name: "microsoft", imagePath: "microsoft.png"},
                            {_id:11, name: "netflix", imagePath: "netflix.png"},
                            {_id:12, name:"sina", imagePath: "sina.png"},
                            {_id:13, name: "taobao", imagePath: "taobao.png"},
                            {_id:14, name: "tencent", imagePath: "tencent.png"},
                            {_id:15, name: "tesla", imagePath: "tesla.png"},
                            {_id:16, name: "uber", imagePath: "uber.png"},
                            {_id:17, name: "yahoo", imagePath: "yahoo.png"},
                            {_id:18, name: "zoom", imagePath: "zoom.png"},
                           
                        ]; 
        res.json(companies); // return an array of companies
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;