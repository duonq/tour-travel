<template>
  <div class="main">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(banner, i) in banners" :key="i"
        ><v-img :src="require(`@/assets/${banner.pic}`)"
      /></v-carousel-item>
    </v-carousel>

    <div class="offer">
      <div class="offer__title">
        <p class="offer__title--size-l">Don’t miss</p>
        <h2>Special Offers</h2>
      </div>

      <div class="my-9 mx-16">
        <v-row>
          <v-col
            v-for="img in pictures"
            :key="img.pic"
            class="position-relative sale"
          >
            <div class="zoom">
              <v-img :src="require(`@/assets/${img.pic}`)" alt="Image 1">
              </v-img>
            </div>
            <div class="position-absolute offer-abs">
              <h4>{{ img.h4 }}</h4>
              <p class="offer__title--size-s mb-9">{{ img.upto }}</p>
              <router-link :to="img.route" class="btn offer-btn px-4"
                >view ->
              </router-link>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="offer__title">
        <h3>our members</h3>
        <p class="offer__title--size-m">
          Join us! to receive special offers up to 50% and accumulate for the
          next trips
        </p>
      </div>

      <div class="text-center my-15">
        <router-link
          :to="join.route"
          v-for="join in joins"
          :key="join.name"
          class="my-9 px-9 py-4 btn btn-sign"
        >
          {{ join.name }}
        </router-link>
      </div>

      <div class="offer__title ma-9 mx-14 pb-5">
        <v-row>
          <v-col
            cols="3"
            v-for="stop in stops"
            :key="stop.icon"
            class="text-center"
          >
            <v-img
              :src="require(`@/assets/${stop.icon}`)"
              class="w-25 mx-auto"
            />
            <h6>{{ stop.h6 }}</h6>
            <p class="offer__title--size-ms">{{ stop.p }}</p>
          </v-col>
        </v-row>
      </div>
    </div>
    <tours-home></tours-home>
    <reviews></reviews>
  </div>
</template>

<script>
import ToursHome from "../TourPage/ToursHome.vue";
import Reviews from "./Reviews.vue";
export default {
  name: "Home",
  data() {
    return {
      banners: [
        { pic: "slide_banner.png" },
        { pic: "slide_banner2.png" },
        { pic: "slide_banner3.png" },
        { pic: "slide_banner2.png" },
      ],

      pictures: [
        {
          pic: "sale1.png",
          h4: "Weekly Flash Deals",
          upto: "Up to 30% off",
          route: {
            name: "Home",
          },
        },
        {
          pic: "sale2.png",
          h4: "summer vacation",
          upto: "plan your trip",
          route: {
            name: "Tour",
          },
        },
        {
          pic: "sale3.png",
          h4: "special offer",
          upto: "save up to 50%",
          route: {
            name: "About",
          },
        },
      ],
      joins: [
        {
          name: "Sign In ->",
          route: {
            name: "SignIn",
          },
        },
        {
          name: "Register ->",
          route: {
            name: "SignIn",
          },
        },
      ],
      stops: [
        {
          icon: "icon(1).png",
          h6: "Restaurants",
          p: "Good place to eat, cool, good service",
        },
        {
          icon: "icon(2).png",
          h6: "sightseeing",
          p: "Beautiful places to visit, enjoy a fun trip",
        },
        {
          icon: "icon(3).png",
          h6: "shops",
          p: "Shopping, souvenirs, reasonable prices",
        },
        {
          icon: "icon(4).png",
          h6: "hotel",
          p: "Good service, cool place, easy to travel",
        },
      ],
    };
  },
  components: { ToursHome, Reviews },
};
</script>
<style scoped>
img {
  width: auto !important;
}
</style>
