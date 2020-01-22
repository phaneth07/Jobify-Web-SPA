require('./bootstrap');
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

window.Vue = require('vue');

import Vuetify from "../plugins/vuetify"
Vue.component('app-container', require('./components/appContainer.vue').default);

const app = new Vue({
    vuetify: Vuetify,
    el: '#app'
    
});
