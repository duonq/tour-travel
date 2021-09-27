<template>
  <b-carousel
    id="carousel-1"
    background="#ababab"
    controls
    indicators
    img-width="1024"
    img-height="480"
  >
    <new-item-img
      v-for="banner in banners"
      :key="banner.img"
      :caption="banner.caption"
      :urlImg="banner.img"
    />
  </b-carousel>
</template>

<script>
import NewItemImg from "./NewItemImg.vue";

export default {
  name: "slide-tour",
  components: { NewItemImg },
  data() {
    return {
      banners: [{ img: "img-slide.png", caption: "Contract us" }],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
@include res_960 {
  .carousel {
    margin-top: 100px;
  }
}
</style>