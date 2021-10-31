<template>
  <router-link :to="linkDetail">
    <div class="tour-list d-flex position-relative">
      <div class="tour-list__title h-100 mb-2">
        <div class="zoom">
          <v-img
            :src="require(`@/assets/${pic}`)"
            :alt="alt"
            class="position-relative"
          />
        </div>
        <div class="d-flex mt-11 px-5">
          <i :class="map"></i>
          <p>{{ p }}</p>
        </div>
      </div>

      <v-divider class="mt-3 mx-auto"></v-divider>

      <div class="d-flex justify-space-between px-5 my-5">
        <p class="tour-list-price">
          From <br />
          <span>{{ price }}</span>
        </p>
        <router-link to="/tours/tour-detail" class="next-btn"
          >Explore -></router-link
        >
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
  </router-link>
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
    p: {
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
    people: [Number, String],
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
      linkDetail: "/tours/tour-detail?id=" + this.id,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
.tour {
  &-list {
    &__title {
      p {
        color: black !important;
        &:hover {
          opacity: 0.7 !important;
        }
      }
    }
  }
}
</style>