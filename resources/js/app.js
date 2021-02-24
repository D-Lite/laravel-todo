require('./bootstrap');

import { createApp } from 'vue';
import App from './vue/app.vue';


// import { createApp } from 'vue/dist/vue.esm-bundler.js';

createApp({
    components:{
        App,
    }
}).mount('#app')
