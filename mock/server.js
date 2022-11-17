var express = require("express")
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

// 解决跨域
const cors = require('cors');
app.use(cors({
    function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
}))



var router = express.Router();

app.get('/', function(req, res) {
    console.log({},'get');
    res.send('hello world');
});

// router.use("/",require('./test'));

// 登录用户相关信息
router.use("/v1/account",require('./account'));



app.use("",router)

app.listen(8090,()=>{
    console.log('监听8090');
})