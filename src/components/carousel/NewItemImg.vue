<template>
  <b-carousel-slide :img-src="require(`@/assets/${urlImg}`)">
  </b-carousel-slide>
</template>

<script>
export default {
  name: "new-item-img",
  props: {
    urlImg: String,
  },
};
</script>

<style>
</style>