<template>
  <!-- <MyComponent></MyComponent> -->
   <!-- <RouterLink to="/">首页</RouterLink>
  <RouterLink :to="{name:'user',params:{id:1}}">用户中心</RouterLink>
  <RouterLink to="/login">登录页面</RouterLink>
  <RouterLink to="/object">object页面</RouterLink>
  <RouterLink to="/shops">连锁店信息</RouterLink>
  <RouterLink to="/cart">购物车信息</RouterLink>
  <button @click="toJump">跳转页面</button>  -->
  <!-- <div> -->
     <!-- <RouterView name="Header"></RouterView> -->
    
     <!-- <RouterView name="Footer"></RouterView> -->
  <!-- </div> -->
   <RouterView></RouterView>
</template>

<script>
import { defineComponent, pushScopeId } from "vue"
//import MyComponent from "./components/MyComponent.vue";
export default defineComponent({
    // components: { MyComponent },
    // methods:{
    //   toJump(){
    //     //代码进行跳转
    //     //push,replace
    //     this.$router.replace({path:'/user',params:{id:1}})
    //   }
    // }
});
</script>
<style lang="scss" scoped>
</style>