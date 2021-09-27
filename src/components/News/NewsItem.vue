<template>
  <router-link to="/">
    <div class="tour-info">
      <div class="d-table mt-3 h-100">
        <div class="zoom d-block">
          <img :src="require(`@/assets/${img}`)" :alt="alt" />
        </div>
        <div class="d-table-cell align-top w-75">
          <p>{{ p }}</p>
          <ul class="d-flex star">
            <li v-for="(star, i) in stars" :key="i">
              <i :class="star.icon"></i>
            </li>
          </ul>
          <p>{{ price }}</p>
        </div>
      </div>
      <hr />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    id: [Number, String],
    alt: {
      type: String,
      default: "",
    },
    img: String,
    p: {
      type: String,
      default: "",
    },
    price: [Number, String],
    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      //   linkDetail: "/home/news/detail?id=" + this.id,
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

<style lang="scss">
// @import "@/scss/style.scss";
// .tour-info {
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   .d-table-cell {
//     padding-left: 15px;
//   }
//   p {
//     font-family: Courier Prime;
//     @include font-size(16px, 18px);
//     color: #000;
//     &:nth-child(3) {
//       color: $colorOrange !important;
//       font-weight: bold;
//     }
//   }
// }
</style>
