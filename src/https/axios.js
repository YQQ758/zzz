import axios from "axios";
//创建axios实例
const instance = axios.create({
    baseURL: 'http://api.jqrjq.cn/',
    timeout: 6000
})
//请求拦截器
instance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(error)
})
export default instance;

//Promise对象 异步处理

/*const promise=new Promise((resolve,reject)=>{
    resolve()
    reject()
})

promise.then(res=>{

}).catch(error=>{

})*/