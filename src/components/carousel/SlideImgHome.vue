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
      :key="banner.pic"
      :urlImg="banner.pic"
    />

    <!-- <b-carousel-slide
      v-for="banner in banners"
      :key="banner.pic"
      :img-src="require(`@/assets/${banner.pic}`)"
    ></b-carousel-slide> -->
  </b-carousel>
</template>

<script>
import NewItemImg from "./NewItemImg.vue";
export default {
  components: { NewItemImg },
  data() {
    return {
      banners: [
        { pic: "slide_banner.png" },
        { pic: "slide_banner2.png" },
        { pic: "slide_banner3.png" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
@include res_320 {
  .carousel {
    margin-top: 58px;
  }
}
@include res_600 {
  .carousel {
    margin-top: 70px;
  }
}
@include res_960 {
  .carousel {
    margin-top: 100px;
  }
}
@include res_1264 {
}
</style>
