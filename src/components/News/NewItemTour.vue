<template>
  <div class="tour-list d-flex position-relative">
    <div class="tour-list__title h-100 mb-2">
      <div class="zoom">
        <b-img
          :src="require(`@/assets/${pic}`)"
          :alt="atl"
          class="position-relative"
        />
      </div>
      <div class="d-flex mt-5 px-3">
        <i :class="map"></i>
        <p>{{ name }}</p>
      </div>
    </div>

    <hr class="mt-3 mx-auto" />

    <div class="d-flex justify-content-between px-3 my-3">
      <p class="tour-list-price">
        From <br />
        <span>{{ price }}</span>
      </p>
      <router-link to="/" class="next-btn">Explore -></router-link>
    </div>

    <div class="position-absolute tour-list__abs">
      <div class="d-flex">
        <p class="px-3">
          <i :class="calendar"></i>
          {{ day }}
        </p>
        <p class="px-1">
          <i :class="user"></i>
          {{ people }}
        </p>
      </div>
      <ul class="star d-flex px-3">
        <li v-for="(star, index) in stars" :key="index">
          <i :class="star.icon"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemTour",
  props: {
    id: [Number, String],
    alt: {
      type: String,
      default: "",
    },
    pic: String,
    name: {
      type: String,
      default: "",
    },
    price: [Number, String],
    day: [Number, String],
    map: {
      type: String,
      default: "",
    },
    calendar: {
      type: String,
      default: "",
    },
    people: Number,
    user: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      stars: [
        { icon: "fa fa-star" },
        { icon: "fa fa-star" },
        { icon: "fa fa-star" },
        { icon: "fa fa-star" },
        { icon: "fa fa-star" },
      ],
    };
  },
};
</script>

<style>
</style>