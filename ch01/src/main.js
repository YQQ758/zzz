import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import{createPinia} from 'pinia'
import axios from './https/axios'
const pinia=createPinia()
//引入组件
//import MyComponent from './components/MyComponent.vue'
const app=createApp(App)
//全局注册组件
//app.component('MyComponent',MyComponent)
app.use(router)//挂载
app.use(pinia)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

app.config.globalProperties.$axios=axios