<template>
  <b-carousel-slide :caption="caption" :img-src="require(`@/assets/${urlImg}`)">
  </b-carousel-slide>
</template>

<script>
export default {
  name: "new-item-img",
  props: {
    urlImg: String,
    caption: String,
  },
};
</script>

<style lang="scss">
.carousel-caption {
  text-align: left !important;
  text-decoration: underline;
  h3 {
    color: #fff !important;
    text-transform: uppercase !important;
  }
}
</style>>
