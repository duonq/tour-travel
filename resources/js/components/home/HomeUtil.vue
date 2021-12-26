<template>
  <div>
    <quick-search />
  </div>
</template>

<script>
import QuickSearch from "./QuickSearch";
export default {
  components: { QuickSearch },
  props: {
    topRatings: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
</style>
