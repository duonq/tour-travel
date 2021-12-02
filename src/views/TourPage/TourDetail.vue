<template>
  <div class="tour-detail">
    <div class="position-relative">
      <v-img :src="require(`@/assets/img_detail.png`)" />
      <div class="position-absolute pos-detail">
        <h1>Bat Trang ceramics</h1>
        <div class="d-flex justify-center align-center px-5">
          <i class="fa fa-map-marker mr-3"></i>
          <p>Bat trang, gia lam, ha noi</p>
        </div>
      </div>
    </div>
    <div class="bg-fb">
      <div class="d-flex justify-space-between mx-16 px-16">
        <div class="d-flex mx-11 my-16 pb-15">
          <v-icon class="mr-3">mdi-card-bulleted</v-icon>
          <div>
            <h4>Price</h4>
            <h5>From <span>$94</span></h5>
          </div>
        </div>
        <div class="d-flex mx-11 my-15 pb-15">
          <v-icon class="mr-3">mdi-clock</v-icon>
          <div>
            <h4>Time</h4>
            <h5>From <span>3days</span></h5>
          </div>
        </div>
        <div class="d-flex mx-11 my-15 pb-15">
          <v-icon class="mr-3">mdi-account-group-outline</v-icon>
          <div>
            <h4>Max</h4>
            <h5>From <span>$94</span></h5>
          </div>
        </div>
        <div class="d-flex mx-11 my-15 pb-15">
          <v-icon class="mr-3">mdi-navigation-variant</v-icon>
          <div>
            <h4>type tour</h4>
            <h5>Art,culture</h5>
          </div>
        </div>
      </div>
    </div>
    <v-row class="mx-11">
      <v-col cols="8">
        <div class="tab-menu">
          <template>
            <v-tabs v-model="tab" align-with-title>
              <!-- <v-tabs-slider></v-tabs-slider> -->
              <v-tab v-for="(item, i) in tabNames" :key="i">
                {{ item.title }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(item, i) in tabNames" :key="i">
                <about-tour v-if="tab === 0" />
                <plan-tour v-if="tab === 1" />
                <tour-map v-if="tab === 2" />
                <tour-photo v-if="tab === 3"/>
              </v-tab-item>
            </v-tabs-items>
          </template>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card class="mb-9">
          <div class="bg-white">
            <div class="borderbottom"></div>
            <h6 class="mx-9 py-3">This book tour</h6>
            <v-divider class="mb-5"></v-divider>
            <v-form class="text-center">
              <div class="position-relative">
                <v-text-field label="Name" outlined single-line></v-text-field>
                <v-icon class="position-absolute pos-user">mdi-account</v-icon>
              </div>
              <div class="position-relative">
                <v-icon class="position-absolute pos-user">mdi-email</v-icon>
                <v-text-field label="Mail" outlined single-line></v-text-field>
              </div>
              <div class="position-relative">
                <v-icon class="position-absolute pos-user">mdi-phone</v-icon>
                <v-text-field label="Phone" outlined single-line></v-text-field>
              </div>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="date-input px-5"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
              <v-btn class="my-7">Book now</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="">
      <div class="mx-auto mt-16 text-center">
        <h3 class="py-15">You may like</h3>

        <v-sheet class="viewtour mx-auto my-5" elevation="8" max-width="1200">
          <v-slide-group v-model="model" mandatory show-arrows>
            <v-slide-item
              v-for="(tour, i) in tours"
              :key="i"
              v-slot="{ active, toggle }"
              class="rounded-xl ma-5"
            >
              <v-card :color="active ? 'primary' : '#fff'" @click="toggle">
                <new-item-tour
                  :id="tour.id"
                  :pic="tour.pic"
                  :alt="tour.alt"
                  :map="tour.map"
                  :p="tour.p"
                  :price="tour.price"
                  :calendar="tour.calendar"
                  :day="tour.day"
                  :user="tour.user"
                  :people="tour.people"
                />
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
    <div class="mt-11 mx-16 my-11">
      <h4>Leave a Reply</h4>
    </div>
  </div>
</template>

<script>
import NewItemTour from "../../components/NewItemTour.vue";
import AboutTour from "./AboutTour.vue";
import PlanTour from "./PlanTour.vue";
import TourMap from "./TourMap.vue"
import TourPhoto from './TourPhoto.vue';
export default {
  components: { AboutTour, PlanTour, NewItemTour, TourMap, TourPhoto },
  data() {
    return {
      tab: 0,
      model: null,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      tabNames: [
        {
          title: "Description",
        },
        {
          title: "Tour plan",
        },
        {
          title: "Tour map",
        },
        {
          title: "Photo",
        },
      ],
      tours: [
        {
          id: 1,
          pic: "tours(7).png",
          calendar: "fa fa-calendar",
          day: "4 days",
          atl: "Cat Ba",
          people: "10",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Cat Ba tourist destination, Hai Phong",
          price: "$160",
        },
        {
          id: 2,
          pic: "tours(8).png",
          atl: "Sapa",
          calendar: "fa fa-calendar",
          day: "7 days",
          people: "6",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Sapa tourist destination, Lao Cai",
          price: "$170",
        },
        {
          id: 3,
          pic: "tours(9).png",
          atl: "Thap Ba",
          calendar: "fa fa-calendar",
          day: "4 days",
          people: "30",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Thap Ba Ponagar Tower, Nha Trang",
          price: "$159",
        },
        {
          id: 4,
          pic: "tours(10).png",
          atl: "Hoi An",
          calendar: "fa fa-calendar",
          day: "3 days",
          people: "20",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Hoi An tourist destination, Quang Nam",
          price: "$190",
        },
        {
          id: 5,
          pic: "tours(11).png",
          atl: "Phu Quoc island",
          calendar: "fa fa-calendar",
          day: "7 days",
          people: "10",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Phu Quoc island, Kien Giang",
          price: "$275",
        },
        {
          id: 6,
          pic: "tours(12).png",
          calendar: "fa fa-calendar",
          day: "6 days",
          atl: "Binh Ba island",
          people: "10",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Binh Ba island, Khánh Hoa",
          price: "$159",
        },
        {
          id: 7,
          pic: "tours(16).png",
          calendar: "fa fa-calendar",
          day: "6 days",
          atl: "Cultural Village of 54 Ethnic Groups",
          people: "10",
          user: "fa fa-user",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          map: "fa fa-map-marker",
          p: "Cultural Village of 54 Ethnic Groups, Son Tay",
          price: "$100",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tour-detail {
  .v-image {
    margin-top: 80px;
  }
  .pos-detail {
    bottom: 60%;
    left: 0;
    right: 0;
    h1 {
      text-align: center;
    }
    i,
    p {
      font-size: 20px;
      color: #ffffff;
      text-transform: capitalize !important;
    }
  }
  h4 {
    color: #000 !important;
    font-size: 24px !important;
    white-space: nowrap;
  }
  h5 {
    margin-bottom: 0 !important;
    color: #8a8c8e !important;
    font-size: 16px !important;
    text-transform: capitalize !important;
    span {
      color: #e88750;
    }
  }
  .v-icon {
    font-size: 45px;
    color: #e88750;
  }
  .borderbottom {
    padding: 2px;
    background-image: linear-gradient(to right, #3366cc, #ccff33);
  }

  .pos-user {
    top: 0;
    left: 0;
    margin-top: 3%;
    margin-left: 50px;
    font-size: 24px;
    color: #6078ab !important;
  }
  .v-btn {
    height: 48px !important;
    background: #7786a7e5;
    color: #fff;
    text-transform: capitalize;
  }
  .tab-menu {
    margin-top: -50px;
  }
  .theme--light.v-sheet {
    background-color: #f6f7fb !important;
  }
}
::v-deep {
  .v-slide-group__content {
    .v-card--link {
      width: 400px !important;
    }
  }
  .v-text-field--outlined fieldset {
    border: 1px solid !important;
    color: #c8ccd7 !important;
  }
  .v-input {
    width: 80%;
    margin: 0 auto !important;
  }
  .v-label.theme--light,
  .v-text-field__slot {
    padding-left: 35px !important;
  }

  .v-text-field > .v-input__control > .v-input__slot:after,
  .v-text-field > .v-input__control > .v-input__slot:before {
    border-width: 0 !important;
  }
  .date-input {
    border: 1px solid #c8ccd7 !important;
    border-radius: 4px;
    height: 55px;
    .mdi-calendar {
      color: #6078ab !important;
    }
    .v-text-field__slot {
      padding-left: 0 !important;
    }
  }
  .v-slide-group__wrapper {
    height: 100%;
  }
  .v-tab {
    color: #000 !important;
    font-family: Courier Prime;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    &:before {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    &:hover {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    &--active {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background: #fff;
    }
  }
  .theme--light.v-sheet {
    background-color: #f6f7fb !important;
  }
}
</style>>

