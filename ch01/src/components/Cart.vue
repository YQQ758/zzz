<template>
    <!--购物车实现
        1 商品展示 数量多，分页，自动加载
        2 价格计算
        HS 弹性布局设计页面
    -->
    <div class="cart">购物车</div>
    <div class="products">
        <div class="product" v-for="item in product" :key="item.id">
            <div class="name">
                <el-checkbox :label="item.name" size="small" @change="selectProducts(item.id,$event)"/>
            </div>
            <div class="bars">
                <span class="price">￥{{ item.price }}</span>
                <span class="count"><el-input-number :min="min" v-model="item.count" size="small" /></span>
            </div>
        </div>
        <div class="total">
            <span>合计:￥{{ total }}</span><button>购买</button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
    
    data() {
        return {
            //响应式变量
            product: [
                { id: 1001, name: "海尔立式热水器", price: 1849, count: 1 },
                { id: 1002, name: "Vue核心技术解析", price: 43, count: 1 },
            ],
            total: 0,
            min:1
        }
        
    },
    methods:{
         selectProducts(id,event){
            //console.log(id,event)
            if(event){
                //被选中
                this.product.forEach((p)=>{
                    if(p.id===id){
                        this.total +=p.price*p.count
                    }                    
                })
            }
            else{
                //被取消
                this.product.forEach((p)=>{
                    if(p.id===id){
                        this.total -=p.price*p.count
                    }                  
                })
            }
         }  
        }
});
</script>

<style lang="scss" scoped>
.product {
    display: flex; //弹性布局
    flex-direction: column;
    margin: 20px 10px;

    .name {
        font-size: 16px;
        font-weight: bold;
    }

    .bars {
        display: flex; //嵌套
        justify-content: space-between; //两边对齐
        height: 35px;
        align-items: center; //垂直居中对齐
        margin-top: 10px;

        // .count {
        //     border: 1px solid #ccc;
        //     padding: 0 5px;
        //     font-size: 10px;
        // }

        .price {
            color: red;

        }
    }
}

.total {
    display: flex;
    margin: 20px 10px 0 0px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}
</style>