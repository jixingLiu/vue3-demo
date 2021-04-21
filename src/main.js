import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// console.log(import.meta.env, 989)

import router from './router'
import store from './store'
import { setupAnt } from './setup'
import './permission'

import "ant-design-vue/dist/antd.less";


const app = createApp(App)
setupAnt(app)
import moment from 'moment'

app.config.globalProperties.$moment = moment

app.config.productionTip = false;
app.use(router).use(store).mount('#app')
