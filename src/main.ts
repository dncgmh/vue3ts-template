import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import element from 'element-plus';
import locale from 'element-plus/lib/locale/lang/en';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/global.css';
import './assets/css/setting.css';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(element, { size: 'mini', locale });

app.mount('#app');

export default app;
