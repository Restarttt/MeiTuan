import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.less'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import locale from 'view-design/dist/locale/en-US';

Vue.use(Vant);
Vue.use(ElementUI)
Vue.use(ViewUI, { locale });


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')