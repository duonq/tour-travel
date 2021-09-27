<template>
  <div class="about">
    <b-carousel
      id="carousel-1"
      background="#ababab"
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <new-item-img
        v-for="banner in banners"
        :key="banner.img"
        :caption="banner.caption"
        :urlImg="banner.img"
      />
    </b-carousel>

    <div class="memory">
      <b-row>
        <b-col>
          <div class="m-5 px-5">
            <h3>Create and keep good memories</h3>
            <p class="py-4">
              We help you create and preserve beautiful moments with your loved
              ones
            </p>
            <div v-for="item in listed" :key="item.text">
              <div class="d-table mt-3">
                <p class="d-inline-block mr-3"><i :class="item.icon"></i></p>
                <p class="d-table-cell">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="bg-img">
            <img :src="require('@/assets/checkin.png')" class="m-5 p-5" />
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="teams container mx-auto">
      <h3>Our Teams</h3>
      <p class="text-center mx-auto">
        We have a professional team providing impeccable services to ensure the
        enjoyment of your stay.
      </p>
    </div>
    <div class="teams">
      <h3>Our Blogs</h3>
      <p class="text-center mx-auto">
        We keep you updated with the latest holiday news, subscribe to our blog
        and find out everything.
      </p>
    </div>
  </div>
</template>

<script>
import NewItemImg from "../../components/carousel/NewItemImg.vue";
export default {
  name: "About",
  components: { NewItemImg },
  data() {
    return {
      banners: [
        {
          img: "banner_about.png",
          caption: "About us",
        },
      ],
      listed: [
        {
          icon: "fa fa-check-circle-o",
          text: "satisfaction guarantee",
        },
        {
          icon: "fa fa-check-circle-o",
          text: "always online support",
        },
        {
          icon: "fa fa-check-circle-o",
          text: "ensure safe trips",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
.memory {
  overflow-x: hidden;
  h3 {
    text-align: left !important;
  }
  p {
    @include font-size(24px, 37px);
    color: $colorBlack50;
  }
  .d-table {
    p {
      @include font-size(32px !important, 40px !important);
      color: $colorpurple;
      font-family: Courier Prime;
      font-weight: bold;
      margin-right: 20px;
      i {
        color: $colorOrange;
      }
    }
  }
  .bg-img {
    background-color: $colorpurple90;
    text-align: center;
    img {
      width: auto !important;
    }
  }
}
.teams {
  h3 {
    text-align: center !important;
    margin-top: 200px;
    padding-bottom: 23px;
  }
  p {
    @include font-size(24px !important, 26px !important);
    font-family: Courier Prime;
    color: $colorBlack50;
    max-width: 791px;
    padding-bottom: 148px;
  }
}
</style>>
