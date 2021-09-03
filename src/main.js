import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "./plugins/boostrap-vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
