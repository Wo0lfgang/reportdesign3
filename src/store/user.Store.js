import { makeAutoObservable,runInAction } from "mobx";
import { http } from "@/utils";

class UserStore {
    userInfo = {}
    constructor() {
        makeAutoObservable(this)
    }
    async getUserInfo() {
        //调用接口获取数据
        const res = await http.get(`/v1/account/statistics`)
        console.log('userStore返回的数据', res.data);
        runInAction(() => {
            this.userInfo = res.data
        })

    }
}

export default UserStore