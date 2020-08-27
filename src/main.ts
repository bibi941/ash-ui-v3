import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Bibi from './components/bibi-2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/xxx', component: Bibi }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
