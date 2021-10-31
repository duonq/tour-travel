<template>
  <div class="tour">
    <div class="bg-page">
      <div class="">
        <div class="offer__title">
          <p class="offer__title--size-l">tour’s new</p>
          <h2>outstanding tours</h2>
        </div>

        <div class="py-15 mx-16">
          <v-row>
            <v-col
              cols="4"
              class="my-6 px-3"
              v-for="tour in tours"
              :key="tour.id"
            >
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
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-16">
        <v-row class="py-11 px-5 tour-best">
          <v-col cols="8">
            <h3>Best Price</h3>
            <v-divider class="my-5"></v-divider>
            <v-row class="my-9">
              <div v-for="best in bests" :key="best.id" class="w-50">
                <new-item
                  :img="best.img"
                  :p="best.p"
                  :price="best.price"
                  :icon="best.icon"
                />
              </div>
            </v-row>
          </v-col>

          <v-col cols="4 tour-best-right">
            <div class="position-relative px-3">
              <div class="zoom">
                <img :src="require('@/assets/tours(13).png')" alt="" />
              </div>
              <div class="position-absolute">
                <h3>Happy Holiday!</h3>
                <h3>myTour.</h3>
                <p>5% bonus on all booking</p>
                <router-link to="/" class="book-btn btn"
                  >Booking now ->
                </router-link>
              </div>
            </div>

            <div class="position-relative mt-5 px-3 tour-mobi">
              <div class="zoom">
                <img :src="require('@/assets/tours(13).png')" alt="" />
              </div>
              <div class="position-absolute">
                <h3>Happy Holiday!</h3>
                <h3>myTour.</h3>
                <p>5% bonus on all booking</p>
                <router-link to="/" class="book-btn btn"
                  >Booking now ->
                </router-link>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import NewItem from "../../components/NewItem.vue";
import NewItemTour from "../../components/NewItemTour.vue";
export default {
  name: "listItemTour",
  components: {
    NewItemTour,
    NewItem,
  },
  data() {
    return {
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
      ],
      bests: [
        {
          id: 1,
          img: "tours(6).png",
          atl: "Mu cang chai",
          p: "Mu Cang Chai rice terraces.",
          // stars: [
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          // ],
          price: "$79",
        },
        {
          id: 2,
          img: "tours(5).png",
          atl: "Moc Chau",
          p: "Moc Chau tourism, Son La.",
          // stars: [
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          // ],
          price: "$59",
        },
        {
          id: 3,
          img: "tours(4).png",
          atl: "Bản Cat Cat",
          p: "Sand Sand Ban, Lao Cai.",
          // stars: [
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          // ],
          price: "$87",
        },
        {
          id: 4,
          img: "tours(3).png",
          atl: "Tam Dao",
          p: "Tam Dao, Vinh Phuc Tourism.",
          // stars: [
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          // ],
          price: "$109",
        },
        {
          id: 5,
          img: "tours(2).png",
          atl: "Ba Vi",
          p: "Ba Vi National Park Tourism.",
          // stars: [
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          // ],
          price: "$125",
        },
        {
          id: 6,
          img: "tours(1).png",
          atl: "Ban Gioc",
          p: "Ban Gioc waterfall tour, Cao Bang.",
          // stars: [
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          //   { icon: "fa fa-star" },
          // ],
          price: "$100",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
