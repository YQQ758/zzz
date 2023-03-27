<template>
  <div class="cart">购物车</div>

  <div class="products">
      <el-checkbox
        v-model="checkAll"
        size="large"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
    <div class="product" v-for="item in products" :key="item.id">
      <div class="name">
        <!-- 商品选择 -->
        <el-checkbox
          :label="item.name"
          size="large"
          v-model="item.checked"
          @change="calculateTotal"
        />
      </div>
      <!-- 数量控制 -->
      <div class="bars">
          <div><span class="price">￥{{ item.price }}</span></div>
          <div><span class="count"
          ><el-input-number
            :min="min"
            v-model="item.count"
            size="small"
            :value-on-clear="num"
            @change="calculateTotal"
        /></span>
        <span
          >
        <el-button size="small" @click="remove(item.id)"
            type="danger">
                      删除</el-button></span></div>
      </div>
    </div>

    <!-- 全选 -->
    <div class="total">
      <span>合计￥{{ total }}</span>
      <button >购买</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      products: [
        {
          id: 1001,
          name: "热水器",
          price: 2000,
          count: 1,
          checked: false,
        },
        {
          id: 1002,
          name: "Apple14",
          price: 5000,
          count: 1,
          checked: false,
        },
      ],
      total: 0,
      min: 1,
      checkAll: false, 
      num:1,
    };
  },
  methods: {
    calculateTotal() {
      //总价
      let total = 0;
      //console.log(total);
      let checkedCount = 0;
     
      //遍历 被选中的进行计算
      this.products.forEach((item) => {
        if (item.checked) {
          total += item.price * item.count;
          checkedCount++;
          //console.log(checkedCount)
        }
      });
      this.total = total;
      this.checkAll = checkedCount === this.products.length;

      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.products.length;
    },
    handleCheckAllChange() {
      //遍历数组的每个 将checked标志为true
      this.products.forEach((item) => {
        item.checked = this.checkAll;
      });
      this.calculateTotal();
    }, //购买
    submit() {
      if (this.total > 0) {
        ElMessage({
          message: "下单成功！",
          type: "success",
        });
      } else {
        ElMessage.error("请先选择商品");
      }
    },
    //删除
    remove(id) {
     
        
          console.log(id);
          this.products.forEach((item) => {
            if (item.id === id) {
              if(item.checked===true){
              console.log(item.checked);
              console.log(this.products.indexOf(item))
              let target = this.products.indexOf(item);
              console.log(target)
              this.products.splice(target, 1);
              this.total -= (item.count*item.price);
              }else{
                  let target = this.products.indexOf(item);
                  this.products.splice(target, 1);
              }
            }
          });
         
        
        
    },
  },
  computed: {
    isIndeterminate() {
      return !this.checkAll && this.products.some((item) => item.checked);
    },
  },

});
</script>

<style lang="scss" scoped>
//   .product {
//     display: flex; //弹性布局
//     flex-direction: column;
//     margin: 20px 10px;

//     .bars {
//       display: flex; //嵌套 弹性
//       justify-content: space-between; //两边对齐
//       height: 35px;
//       align-items: center; //垂直居中对齐
//       margin-top: 10px;

//       .price {
//         color: red;
//         margin-right: 130px;
//       }
//     }
//   }

//   .show {
//     margin-left: 110px;
//   }

//   .total {
//     display: flex;
//     margin: 20px 10px 0px 10px;
//     justify-content: space-between;
//     align-items: center;
//     height: 40px;
//   }

//   .product .name {
//     font-size: 16px;
//     font-weight: bold;
//   }

.products {
  display: flex; //弹性布局
  flex-direction: column;
  margin: 20px 10px;

  .name {
      margin: 5px;
      font-size: 20px;
      font-weight: bold;
  }

  .bars {
      display: flex;
      justify-content: space-between; //两边对齐
      height: 35px;
      align-items: center; //居中对齐
      margin: 10px 0;

      .price {
          color: red;
      }
  }
}

.total {
  display: flex;
  margin: 20px 10px 0 10px;
  // justify-content: space-between;
  align-items: center;
  height: 40px;
}
</style>
