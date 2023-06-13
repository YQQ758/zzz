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
const adCatePage=(data)=>{
    return instance.request({
     url:'api/adcate/page',
     method:'post',
     data
    })
 }
const adCateDelId=(params)=>{
    return instance.request({
        url:'api/adcate/delete',
        params
    })
}
export {
    userLogin,
    adminLogin,
    adCatePage,
    adCateDelId
} 