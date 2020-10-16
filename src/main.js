import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
