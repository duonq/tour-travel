<template>
  <div>
    <loading-full-screen v-if="loadingSlide || loadingRating" />
    <section class="tours-banner">
      <a-carousel arrows>
        <div
          slot="prevArrow"
          class="custom-slick-arrow"
          style="left: 10px; zindex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <div><img src="/img/slide_banner.png" /></div>
        <div><img src="/img/slide_banner2.png" /></div>
        <div><img src="/img/slide_banner3.png" /></div>
      </a-carousel>
    </section>
    <section>
      <div class="offer__title">
        <h3>Dịch vụ</h3>
        <p class="offer__title--size-m">
          Tham gia với chúng tôi! để nhận ưu đãi đặc biệt lên đến 50% và tích
          lũy cho những chuyến đi tiếp theo
        </p>
        <!-- </div> -->
        <!-- <div> -->
        <a-row>
          <a-col
            :span="6"
            v-for="stop in stops"
            :key="stop.icon"
            class="text-center"
          >
            <img :src="stop.icon" class="mx-auto" />
            <h6>{{ stop.h6 }}</h6>
            <p class="offer__title--size-ms">{{ stop.p }}</p>
          </a-col>
        </a-row>
      </div>
    </section>
    <section>
      <a-row>
        <a-divider>
          <h3 class="tour-title">Tour mới</h3>
        </a-divider>
        <list-tour-new :toursNew="toursNew" />
        <div style="margin-top: 24px; text-align: center">
          <a-button @click="$router.push({ name: 'tours' })">Xem thêm</a-button>
        </div>
      </a-row>

      <a-row>
        <a-divider>
          <h3 class="tour-title">Tour nổi bật</h3>
        </a-divider>
        <list-tour-featured :toursFeatured="toursFeatured" />
        <div style="margin-top: 24px; text-align: center">
          <a-button @click="$router.push({ name: 'tours' })">Xem thêm</a-button>
        </div>
      </a-row>
    </section>
  </div>
</template>

<script>
import ListTourNew from "@/components/home/ListTourNew";
import ListTourFeatured from "@/components/home/ListTourFeatured";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ListTourNew, ListTourFeatured },
  metaInfo: {
    title: "Trang chủ",
  },
  data() {
    return {
      stops: [
        {
          icon: "/img/icon(1).png",
          h6: "Restaurants",
          p: "Good place to eat, cool, good service",
        },
        {
          icon: "/img/icon(2).png",
          h6: "sightseeing",
          p: "Beautiful places to visit, enjoy a fun trip",
        },
        {
          icon: "/img/icon(3).png",
          h6: "shops",
          p: "Shopping, souvenirs, reasonable prices",
        },
        {
          icon: "/img/icon(4).png",
          h6: "hotel",
          p: "Good service, cool place, easy to travel",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("home", [
      "slides",
      "topRatings",
      "toursNew",
      "toursFeatured",
      "loadingSlide",
      "loadingRating",
      "loadingToursNew",
      "loadingToursFeatured",
    ]),
  },
  watch: {
    $route: "fetch",
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions("home", [
      "fetchSlides",
      "fetchTopRating",
      "fetchToursNew",
      "fetchToursFeatured",
    ]),
    fetch() {
      Promise.all([
        this.fetchSlides(),
        this.fetchTopRating(),
        this.fetchToursFeatured(),
        this.fetchToursNew(),
      ]);
    },
  },
};
</script>

<style lang="less" scoped>
span.tour-title {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
.tours-banner {
  position: relative;
  margin: 0 -50px;
}
.ant-carousel .slick-slide {
  text-align: center;
  height: 100%;
  line-height: 100%;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}
img {
  width: auto !important;
}
.offer__title {
  text-align: center;
  padding-top: 107px;
  margin: 36px 56px;
  padding-bottom: 20px;
  &--size-ms {
    font-family: revert;
    font-size: 16px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.7);
    max-width: 180px;
    margin: 15px auto;
  }
  img:hover {
    cursor: pointer;
    transform: rotate(15deg);
  }
  &--size-m {
    font-family: monospace;
    font-size: 24px;
    line-height: 27px;
    max-width: 742px;
    text-align: justify;
    margin: 13px auto 50px !important;
    color: rgba(0, 0, 0, 0.6);
  }
  h1{
    color: #000 !important;
  }
}
</style>
