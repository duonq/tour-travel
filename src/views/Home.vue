<template>
  <div class="home">
    <slide-img-home />
    <offers />
    <tours />
  </div>
</template>

<script>
// @ is an alias to /src
import SlideImgHome from "@/components/carousel/SlideImgHome.vue";
import Offers from "../components/sections/Offers.vue";
import Tours from "../components/sections/Tours.vue";

export default {
  name: "Home",
  components: {
    SlideImgHome,
    Offers,
    Tours,
  },
};
</script>
