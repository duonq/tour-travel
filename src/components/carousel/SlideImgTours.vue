<template>
  <b-carousel
    id="carousel-1"
    background="#ababab"
    controls
    indicators
    img-width="1024"
    img-height="480"
  >
    <slide-img
      v-for="banner in banners"
      :key="banner.pic"
      :urlImg="banner.pic"
    />
  </b-carousel>
</template>

<script>
import SlideImg from "@/components/carousel/NewItemImg.vue";

export default {
  name: "slide-tour",
  components: { SlideImg },
  data() {
    return {
      banners: [
        { pic: "baner_tuor (1).png" },
        { pic: "baner_tuor (2).png" },
        { pic: "baner_tuor (3).png" },
      ],
    };
  },
};
</script>

<style>
</style>