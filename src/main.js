import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from './https/axios'
import pinia from './utils/pinia'
//引入组件
//import MyComponent from './components/MyComponent.vue'
const app=createApp(App)
app.use(pinia)
//全局注册组件
//app.component('MyComponent',MyComponent)
app.use(router)//挂载


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

app.config.globalProperties.$axios=axios