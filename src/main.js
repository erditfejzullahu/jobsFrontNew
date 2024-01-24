import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import store from './store'
// import VueMeta from 'vue-meta';


const app = createApp(App);

app.use(VueAxios, axios);
app.axios.defaults.baseURL = "https://localhost:8000/"

// app.use(store);
app.use(router);
// app.use(VueMeta)
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app')
