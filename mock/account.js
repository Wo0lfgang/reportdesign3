let Mock = require('mockjs');
let express = require('express');
let router = express.Router();

// 登录获取token
router.post("/login", (req, res) => {
    console.log('123', req.body);
    let data = Mock.mock({
        "code": "200",
        data: {
            "token|150": /[a-z][A-Z][0-9]/,
        }
    })
    return res.json(data)
})

// 登录账户的相关信息
router.get("/statistics", (req, res) => {
    // console.log('123', req.body);
    let data = Mock.mock({
        "code": "200",
        data:{
            "name": "傅里叶"
        }
    })
    return res.json(data);
})

module.exports = router;