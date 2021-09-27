<template>
  <div id="app">
    <sec-header />
    <router-view />
    <sec-footer />
  </div>
</template>

<script>
import secHeader from "./layouts/secHeader";
import secFooter from "./layouts/secFooter.vue";
export default {
  components: {
    secHeader,
    secFooter,
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
<style lang="scss">
@import "@/scss/style.scss";
</style>
