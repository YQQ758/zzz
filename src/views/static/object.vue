<template>
 <div class="">object页面</div>
 <router-view></router-view>
</template>

<script>
import { defineComponent} from "vue"
// export default defineComponent({

//  });
export default{
    setup(){
        console.log('setup')
    },
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{

    },
    created(){
        console.log('created')
    },
    mounted(){
        console.log('mounted')
    },
    onUnmounted(){
        console.log('onUnmounted')
    }
}
</script>

<style lang="scss" scoped>
//可编程的css
//scoped css使用范围
</style>
