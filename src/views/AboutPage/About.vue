<template>
  <div class="about">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(banner, i) in banners" :key="i"
        ><v-img :src="require(`@/assets/${banner.img}`)"
      /></v-carousel-item>
    </v-carousel>

    <div class="memory">
      <v-row>
        <v-col>
          <div class="my-16 mx-16">
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
        </v-col>
        <v-col>
          <div class="bg-img">
            <img :src="require('@/assets/checkin.png')" class="ma-11 pa-11" />
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="teams mx-auto">
      <h3>Our Teams</h3>
      <p class="text-center mx-auto">
        We have a professional team providing impeccable services to ensure the
        enjoyment of your stay.
      </p>
    </div>
    <v-sheet class="mx-auto" elevation="8" max-width="1000">
      <v-slide-group v-model="model" class="pa-4" mandatory show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : 'blue lighten-1'"
            class="ma-4"
            height="400"
            width="300"
            @click="toggle"
          >
            <v-img :src="require(`@/assets/team.png`)" />

            <div class="position-absolute pos-about">
              <div class="bg-about ma-9">
                <h5 class="pt-5">Sunny</h5>
                <p>Tour oparator</p>

                <div class="d-flex justify-space-between pa-5">
                  <div
                    v-for="follow in follows"
                    :key="follow.icon"
                    class="rounded"
                  >
                    <a :href="follow.link" target="_blank">
                      <i :class="follow.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div class="teams">
      <h3>Our Blogs</h3>
      <p class="text-center mx-auto">
        We keep you updated with the latest holiday news, subscribe to our blog
        and find out everything.
      </p>
    </div>

    <v-sheet class="viewtour" elevation="8">
      <v-slide-group v-model="model" mandatory show-arrows>
        <v-slide-item
          v-for="(tour, i) in tours"
          :key="i"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'blue lighten-1'"
            @click="toggle"
          >
            <a href=""><v-img :src="require(`@/assets/${tour.img}`)" /></a>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      model: null,
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
      follows: [
        {
          icon: "fa fa-facebook",
          link: "https://www.facebook.com/duong.mit.201",
        },
        {
          icon: "fa fa-twitter",
          link: "https://twitter.com/home",
        },

        {
          icon: "fa fa-instagram",
          link: "https://www.instagram.com/duong.mit.9/",
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/feed/",
        },
      ],
      tours: [
        { img: "viewTourAdd(1).png" },
        { img: "viewTourAdd(2).png" },
        { img: "viewTourAdd(3).png" },
        { img: "viewTourAdd(4).png" },
        { img: "viewTourAdd(5).png" },
        { img: "viewTourAdd(1).png" },
        { img: "viewTourAdd(2).png" },
        { img: "viewTourAdd(3).png" },
        { img: "viewTourAdd(4).png" },
        { img: "viewTourAdd(5).png" },
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
    padding-bottom: 70px;
  }
}
.pos-about {
  bottom: 0;
  left: 0;
  right: 0;
  .bg-about {
    background: rgba(255, 255, 255, 0.8);
    h5 {
      color: #000 !important;
      text-align: center;
      font-family: Courier Prime !important;
      text-transform: capitalize !important;
      margin-bottom: 0 !important;
    }
    p {
      font-size: 14px;
      text-align: center;
      font-weight: 400;
    }
    .rounded {
      @include width-height(35px, 35px);
      background-color: #2a9d8f;
      transition: 0.3s ease;
      &:hover {
        margin-top: -5px;
      }

      i {
        @include font-size(16px, 35px);
        text-align: center;
        width: 100%;
        color: #fff !important;
      }
    }
  }
}
::v-deep {
  .v-slide-group__wrapper {
    height: 500px !important;
    align-items: center;
  }
  .viewtour {
    .v-slide-group__wrapper {
      height: 190px !important;
      align-items: center;
    }
  }
  // .v-responsive__sizer {
  //   padding-bottom: 37.1111% !important;
  // }
}
</style>>
