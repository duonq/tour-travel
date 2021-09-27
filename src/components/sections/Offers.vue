<template>
  <div class="container offer">
    <div class="offer__title">
      <p class="offer__title--size-l">Don’t miss</p>
      <h2>Special Offers</h2>
    </div>

    <b-row cols="3 my-5">
      <b-col
        v-for="img in pictures"
        :key="img.pic"
        class="position-relative sale"
      >
        <div class="zoom">
          <b-img :src="require(`@/assets/${img.pic}`)" alt="Image 1"> </b-img>
        </div>
        <div class="position-absolute offer-abs">
          <h4>{{ img.h4 }}</h4>
          <p class="offer__title--size-s">{{ img.upto }}</p>
          <router-link :to="img.route" class="btn offer-btn mt-4 px-4"
            >view ->
          </router-link>
        </div>
      </b-col>
    </b-row>

    <div class="offer__title">
      <h3>our members</h3>
      <p class="offer__title--size-m">
        Join us! to receive special offers up to 50% and accumulate for the next
        trips
      </p>
    </div>

    <div class="text-center">
      <router-link
        :to="join.route"
        v-for="join in joins"
        :key="join.name"
        class="my-5 px-5 py-3 btn btn-sign"
      >
        {{ join.name }}
      </router-link>
    </div>

    <b-row cols="4 offer__title mb-5">
      <b-col v-for="stop in stops" :key="stop.icon" class="text-center">
        <b-img :src="require(`@/assets/${stop.icon}`)" />
        <h6>{{ stop.h6 }}</h6>
        <p class="offer__title--size-ms">{{ stop.p }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "offers",
  data() {
    return {
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
            name: "Register",
          },
        },
      ],
      stops: [
        {
          icon: "icon (1).png",
          h6: "Restaurants",
          p: "Good place to eat, cool, good service",
        },
        {
          icon: "icon (2).png",
          h6: "sightseeing",
          p: "Beautiful places to visit, enjoy a fun trip",
        },
        {
          icon: "icon (3).png",
          h6: "shops",
          p: "Shopping, souvenirs, reasonable prices",
        },
        {
          icon: "icon (4).png",
          h6: "hotel",
          p: "Good service, cool place, easy to travel",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: auto !important;
}
</style>
