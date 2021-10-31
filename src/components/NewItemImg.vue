<template>
  <v-carousel-slide
    :caption="caption"
    :text="text"
    :img-src="require(`@/assets/${urlImg}`)"
  >
  </v-carousel-slide>
</template>

<script>
export default {
  name: "new-item-img",
  props: {
    urlImg: String,
    caption: String,
    text: String,
  },
};
</script>

<style lang="scss">
.carousel-caption {
  text-align: left !important;
  h3 {
    color: #fff !important;
    text-transform: uppercase !important;
    text-decoration: underline;
    font-weight: 500 !important;
  }
  p {
    text-decoration: none;
    color: #fff !important;
    text-transform: uppercase !important;
    font-family: Courier Prime;
    font-weight: 400 !important;
  }
}
</style>>
