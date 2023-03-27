<template>
  <div class="">
    <!-- saleclerks 店员管理 CURD -->
    <!-- 数据展示 table  组件-->
    <!-- 数据添加  表单 添加按钮, Icon -->
    <!-- 数据更新  表单  -->
    <!-- 数据删除  查询 -->
    <h3>
      <slot></slot>
    </h3>
    <div class="tools">
      <el-button icon="Plus" @click="toAdd" />
    </div>
    <slot name="header"></slot>
    <el-table :data="salesclerks" style="width: 100%;">
      <el-table-column prop="id" label="编号" width="80" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="prefession" label="职位" width="180" />
      <el-table-column prop="shop" label="店名" width="180" />

      <el-table-column label="功能管理">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>

          <el-button size="small" type="danger" @click="btnClick">组件自定义事件</el-button>
          <el-button size="small" type="danger" @click="btnClick1(scope.$index)">子父传参</el-button>

        </template>
      </el-table-column>

    </el-table>

    <el-dialog v-model="dialogSalesclerksFormVisible" title="店员编辑">
      <el-form :model="old_salesclerk" :rules="rules">
        <el-form-item label="编号" :label-width="formLabelWidth" prop="id">
          <el-input v-model.number="old_salesclerk.id" autocomplete="off" type="text" />
        </el-form-item>

        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="old_salesclerk.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-input v-model="old_salesclerk.prefession" autocomplete="off" />
        </el-form-item>
        <el-form-item label="店名" :label-width="formLabelWidth">
          <el-input v-model="old_salesclerk.shop" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogSalesclerksFormVisible = false">取消</el-button>
          <el-button type="primary" @click="save">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
  
<script>
import { defineComponent } from "vue"
export default defineComponent({
  props: {//父子传递数据
    salesclerks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

      dialogSalesclerksFormVisible: false,
      salesclerk: {
        id: 0,
        name: '',
        prefession: "",
        shop: '',
      },
      old_salesclerk: {
        id: 0,
        name: '',
        prefession: "",
        shop: '',
      },
      rules: {
        id: [
          { required: true, message: "输入一个数字", trigger: 'blur' },
          { type: 'number', message: '请输入数字!', trigger: 'blur' }
        ]
      },

      formLabelWidth: "80px",
      flag: true,//true 表示当前添加  false 更新
      index_flag: 0,//表示当前的处理的行数据

    }
  },
  methods: {



    GetAll_values(o) {
      valuse = []
      for (var i in o) {
        valuse.push(i.id)
      }
      return valuse

    },
    //深拷贝
    deepClone(obj) {//无法搞定方法的深拷贝
      var _tmp = JSON.stringify(obj);
      let result = JSON.parse(_tmp);
      return result;
    },

    //添加
    toAdd() {
      this.old_salesclerk = {
        id: 0,
        name: '',
        prefession: "",
        shop: '',
      }

      this.dialogSalesclerksFormVisible = true;
      this.flag = true;

    },
    //保存
    save() {




      //如何判断功能是添加还是更新 , 标准点 flag
      if (this.flag) {
        let that = this;
        let id_boo = (this.salesclerks.filter(function (s) {
          return s.id == that.old_salesclerk.id
        }))
        console.log(id_boo);
        if(id_boo[0]  ){
          return
        }
        


        //1 保存操作
        that.salesclerks.push(that.deepClone(that.old_salesclerk));
      }
      else {
        //2 更新操作 下的 保存
        // this.row_flag=  this.deepClone(this.old_salesclerk)
        console.log("  这里是输入的数据  ", this.old_salesclerk);
        this.salesclerks[this.index_flag] = (this.old_salesclerk)
        console.log("更新操作......");

      }
      this.dialogSalesclerksFormVisible = false;

    },
    //  编辑|更新
    handleEdit(index, row) {
      this.flag = false

      console.log(row);

      this.old_salesclerk = this.deepClone(row);

      this.row_flag = row //保存当前行数据
      console.log(index);
      this.index_flag = index;

      console.log(row);

      // this.old_salesclerk.id = row.id;
      // this.old_salesclerk.name = row.name;//保证显示的数据
      // this.old_salesclerk.prefession = row.prefession;
      // this.old_salesclerk.shop = row.shop;

      this.dialogSalesclerksFormVisible = true;

    },
    //删除
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      // index 删除哪个  1 删除1
      this.salesclerks.splice(index, 1);

    },
    btnClick() {
      this.$emit('customEvent');
    },
    btnClick1(index) {//给父亲组件传递东西
      const data = {};
      data.salesclerk = this.salesclerks[index];
      data.index = 0
      this.$emit('customEvent1', data);
    }
  }

});
</script>
  
<style lang="scss" scoped></style>
