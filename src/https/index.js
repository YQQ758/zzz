//统一api管理
import instance from "./axios";
const userLogin=(data)=>{
    //返回Promise对象
     return instance.request({
        url:'api/mobile/elogin',
        method:'post',
        data
    })
}
const adminLogin=(data)=>{
    return instance.request({
        url:'api/mobile/elogin',
        method:'post',
        data
    })
}

export {
    userLogin,
    adminLogin
} 