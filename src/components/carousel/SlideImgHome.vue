<template>
  <b-carousel
    id="carousel-1"
    background="#ababab"
    controls
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      v-for="banner in banners"
      :key="banner.pic"
      :img-src="require(`@/assets/${banner.pic}`)"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
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

<style></style>
