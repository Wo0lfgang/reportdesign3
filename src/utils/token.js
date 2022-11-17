// 封装 localStorage 存取 token

const key = 'rd-key';

const setToken = token=> window.localStorage.setItem(key, token);

const getToken = ()=> window.localStorage.getItem(key);

const removeToken = ()=> window.localStorage.removeItem(key);

const isAuth = ()=>!!getToken()

export {
    setToken,
    getToken,
    removeToken,
    isAuth
}