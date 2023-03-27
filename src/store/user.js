import { defineStore } from 'pinia'
import { ref } from 'vue'
 //选项式
    /*
    创建Store 注意命名：useUserStore
    user 是storeId唯一
    核心：state
    getters
    actions
    plugins
    */ 
export const useUserStore=defineStore('user',{
    //状态值
   
    state:()=>{
        return{
            token:'',
            userinfo:{
                "state":1,
                "id":0,
                "username":"",
                "userType":"",
                "token":"",
                "binding":0,
                "createTime":"",
                "updateTime":"",
                "email":""
            }
        }
    },
    getters:{
        // double:(state)=>{
        //     return state.count*2
        // }
        getToken(){
            return this.token;
        }
    },

    actions:{
        // increment(state){
        //     state.count++
        // },
        setToken(token){
            this.token=token
        },
        //填充userinfo数据
        fillUser(user){
            this.userinfo=user
        }
    },
    persist:{
        
        enabled:true,
        strategies:[
            {
                key:'userinfo',
                Storage:localStorage,
                paths:['token']
            }
        ]

    }
   //state:()=>({count:0})
   //const count=ref(0)

})

//组合式
//export const useUserStore = defineStore('user', () => {
    //let count=reactive({count:0});
    // let count = ref(0);
    // let token = ref('');
    // let userinfo = reactive(
    //     {
    //         state: 1,
    //         id: 0,
    //         username: "",
    //         userType: "",
    //         token: "",
    //         binding: 0,
    //         createTime: "",
    //         updateTime: "",
    //         email: ""
    //     }
    // )
    // function increat() {
    //     count.value++
    // }
    // function fillUser(state,user) {
    //     state.userinfo=user
    // }
    // function setToken(state,token){
    //     state.token=token
    // }
    // return {count,token,increat,fillUser,setToken}

//     let token=ref('');
//     let userinfo=ref({});
//     const setToken=(token)=>{
//         token=token
//     }
//     const fillUserinfo=(user)=>{
//         userinfo=user
//     }
//     return{token,userinfo,setToken,fillUserinfo}
// })