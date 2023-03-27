<template>
    <!-- 登录页面设计
        1.表单
        2.验证
        3.登录实现,效果：loading
        4.状态信息的保存
        5.页面跳转
        6.reset
    -->
    <!-- <div class="">登录页面</div>
    <button @click="btnLogin">登录</button>
    <el-button type="primary" @click="btnLogin">登录</el-button> -->
    <!-- <div>数量{{ userStore,count }}</div>
    <button @click="userStore.increat">count++</button> -->
    <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item prop="email">
            <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入你的用户邮箱" suffix-icon="Message" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="userForm.password" type="password" autocomplete="off" placeholder="请输入你的用户密码"
                suffix-icon="Lock" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="btnLogin">用户登录</el-button>
            <el-button @click="resetForm">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

import { defineComponent } from "vue";
import { mapActions, storeToRefs } from "pinia";
import { userLogin } from "../../https";
import { useUserStore } from "../../store/user";
export default defineComponent({
    setup() {
        //const {count,increat}=storeToRefs(userStore)
        // const userStore = useUserStore();
        // const {setToken,fillUserinfo}=storeToRefs(userStore);
        // return {setToken,fillUserinfo}
    },
    data() {
        return {
            userForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入正确的电子邮箱', trigger: 'blur' },
                    { type: 'email', message: '电子邮箱格式错误', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入正确的用户密码', trigger: 'blur' },
                    { min: 8, message: '密码长度不得小于8位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ['setToken', 'fillUserinfo']),
        btnLogin() {
            const that = this;
            const formEl = that.$refs.ruleFormRef//取ref对象
            console.log(formEl);
            if (!formEl) return;
            formEl.validate((valid) => {
                if (valid) {
                    const res = userLogin(that.userForm)
                    console.log(res);
                    res.then(result => {
                        //console.log(result)
                        if (result.success) {
                            const userinfo = result.data.userinfo;
                            // console.log(userinfo.token);
                            // that.userStore.setToken(userinfo.token)
                            // that.userStore.fillUserinfo(userinfo)
                            console.log(that);
                            that.setToken(userinfo.token);
                            that.fillUserinfo(userinfo);
                            that.$router.push('/');
                        }
                        else {
                            return false;
                        }
                        
                        //用户状态
                        
                    }).catch(error => {
                        console.log(error)
                    })
                }
                else {
                    console.log('error submit!')
                    return false;
                }
            })
            console.log(this.userForm);


        },
        resetForm() {
            const formEl = this.$refs.ruleFormRef
            formEl.resetFields()
        }

    }
});
</script>

<style lang="scss" scoped></style>
