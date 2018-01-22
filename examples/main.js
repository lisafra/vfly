/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import router from './router'
import App from './app.vue';
import vfly from '../src/index';

// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/zh-CN';

Vue.use(vfly);

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
