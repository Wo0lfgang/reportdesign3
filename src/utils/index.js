// 先把所有的工具函数导出的模块在这里导入
// 然后再统一导出
import { http } from './http'
import { getToken, setToken, removeToken, isAuth } from './token'


export {
    http,
    getToken,
    setToken,
    removeToken,
    isAuth
}

// import {http} from '@/utils'
// 都在index暴露出来，可以像上面引用