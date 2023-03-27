import{defineStore} from 'pinia'
export const userStore=defineStore('user',{
    //状态值
    state:()=>{
        return{
            count:0
        }
    }
   
})