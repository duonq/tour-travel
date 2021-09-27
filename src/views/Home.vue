<template>
  <div class="home">
    <slide-img-home />
    <offers />
    <list-item-tour />
    <review />
  </div>
</template>

<script>
// @ is an alias to /src
import SlideImgHome from "@/components/carousel/SlideImgHome.vue";
import Offers from "@/components/sections/Offers.vue";
import Review from "@/components/carousel/Review.vue";
import ListItemTour from "@/components/sections/ListItemTour.vue";

export default {
  name: "Home",
  components: {
    SlideImgHome,
    Offers,
    Review,
    ListItemTour,
  },
};
</script>
