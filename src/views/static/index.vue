<template>
    <!-- <MyComponent></MyComponent> -->
    <div :class="ok? 'home':'index'">
        {{product}} 
        <div v-html="msgHtml"></div>
        <div v-text="msgHtml"></div>
        <button @click="btnTemple">字符串模板写法</button>
        <button @click="increate">number1增加+1</button>
        <button @click="btnDeep">深层次改变</button>
        <button @click="product.count++">改变商品数量+1</button>
        <!-- <HelloWorld @componentEvent="componentEvent" @componentEmitEvent="componentEmitEvent"></HelloWorld> -->
    </div>
    <p>{{count}}:{{number1}}</p>
    <p>商品的总价:{{product.total}}</p>
    <p>商品的总价(计算属性):{{summ}}</p>
</template>

<script>
/*
**对象析构
const person={
            name:'admin',
            age:23,
            sex:'male',
            run:function(){
                console.log('run')
            }
        }
    const {name,age,sex,run}=person
*/
import{storeToRefs} from "pinia";
import { defineComponent } from "vue"
import MyComponent from "../../components/MyComponent.vue"
import {useUserStore} from '../../store/user'
// import HelloWorld from"../../components/HelloWorld.vue";
export default defineComponent({
    setup(){
        //组合api
        const store=useUserStore();
        const {count}=storeToRefs(store);
        console.log(count);
        
        return{
            count,    
        }
    },
    data(){
        return{
           
            msg:'this is vue app',
            msgHtml:'<h3>this is v-html 指令</h3>',
            home:'home',
            ok:true,
            number1:1,
            data:[],
            obj:{
                name:'rose',
                children:{
                    name:'22'
                }
            },
            product:{
                name:'mac book',
                price:99,
                count:10,
                total:0
            }
        }
    },
    computed:{
        //商品的价格计算
        summ(){
           this.product.total=this.product.price*this.product.count;
           return this.product.total;
        }
    },
    mounted(){
        this.increate();
        this.sum();
    },
    methods:{
        componentEvent(data){
            console.log('组件自定义事件',data)
        },
        componentEmitEvent(data){
            console.log('$emit组件自定义事件',data)
        },
        btnTemple(){
            let str='home';
            let str1=`this is vue string temple $(str)`
            console.log(str1);
        },
        increate(){
            this.number1++
        },
        btnDeep(){
            this.obj.children.age=23
        },
        sum(){
            this.product.total=this.product.price*this.product.count;
        }
    },
    components:{
    MyComponent
}
    
});
</script>
<style lang="scss" scoped>
    .home{
        background-color: blue;
    }
    .index{
        background-color: red;
    }
</style>