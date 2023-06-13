<template>
    <div class="adCates">
        <el-table :data="adCates" style="width: 100%">
            <el-table-column fixed prop="id" label="#" width="50" />
            <el-table-column prop="name" label="广告类型" />
            <el-table-column prop="width" label="宽度" width="120" />
            <el-table-column prop="height" label="高度" width="120" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row.id)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total" @current-change="currentchange" />
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { adCatePage,adCateDelId } from "../../https"
export default defineComponent({
    data(){
        return{
            adCates:[],
            page:{
                total:0,
                current:1,
                size:10
            }
        }
        
    },
    mounted(){
        this.getAdCatesPage(1)
    },
    methods:{
        toEdit(id){
            console.log(id);
        },
        getAdCatesPage(current){
            const data={
                current:current,
                size:2  
            }

            adCatePage(data).then(res=>{
                console.log(res);
                const page=res.data.page;
                this.adCates=page.records;
                this.page=page;
            }).catch(error=>{
                console.log(error);
            })
        },
        currentchange(current){
            // console.log(current);
            this.getAdCatesPage(current);
            this.page.current=current;//数据更新目前显示的页面
        },
        del(id){
            //删除数据
            //模拟删除，服务器进行处理
            //能够有反悔机会

        //如果只有一条数据，删除数据之后如何处理？
        //人机交互
            console.log(id)
            const params={
                id:id
            }
            adCateDelId(params).then(res=>{
                if(res.success){
                    this.getAdCatesPage(this.page.current)
                }
                else{
                    console.log(res.msg)
                    return false
                }
            }).catch(error=>{

            })
        }
    }
});
</script>

<style lang="scss" scoped></style>
