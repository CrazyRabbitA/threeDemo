import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import * as ElIconModules from '@element-plus/icons-vue';
import {AddLocation, Calendar, Collection, Delete, Edit, AlarmClock} from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import './assets/less/index.less';

const app = createApp(App)
app.config.globalProperties.$goPage = function (name = '404', params, query = {}, flag = false) {
    if (/^http*/.test(name)) {
        flag ? window.location.replace(name) : (window.location.href = name);
        return;
    }
    flag = flag ? 'replace' : 'push';
    this.$router[flag]({
        name: name,
        params,
        query
    });
};
app.use(router)
app.use(ElementPlus)
app.component('expand', AddLocation)
    .component('chat-round', Calendar)
    .component('chat-round', Collection)
    .component('chat-round', Delete)
    .component('chat-round', Edit)
    .component('chat-round', AlarmClock)

app.mount('#app')
