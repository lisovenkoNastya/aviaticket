import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// styles
import '@fontsource/open-sans';
import '@fontsource/open-sans/600.css';
import '@/styles/main.scss';

createApp(App).use(store).use(router).mount('#app');
