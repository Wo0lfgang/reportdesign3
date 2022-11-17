// login module
import { makeAutoObservable } from "mobx"
import { http, getToken, setToken, removeToken } from "@/utils"



class LoginStore {
    token = getToken() || ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    getToken = async ({ account, password }) => {
        console.log(account, password);
        // 调用登录接口
        const res = await http.post('/v1/account/login', {
            account,
            password
        })
        // 存入token
        console.log('res123',res);
        this.token = res.data.token //注意后端的返回结构，在取出token
        console.log('返回的数据：', res);
        // 存入localStroage
        setToken(this.token)
    }

    loginOut = () => {
        this.token = ''
        removeToken();
    }
}

export default LoginStore