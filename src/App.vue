<template>
  <v-app>
    <main-header></main-header>
    <router-view />
    <main-footer></main-footer>
  </v-app>
</template>

<script>
import MainFooter from "./layouts/MainFooter.vue";
import MainHeader from "./layouts/MainHeader.vue";
export default {
  components: { MainHeader, MainFooter },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

