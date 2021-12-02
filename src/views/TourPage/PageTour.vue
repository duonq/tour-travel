<template>
  <div class="tours">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(banner, i) in banners" :key="i"
        ><v-img :src="require(`@/assets/${banner.pic}`)"
      /></v-carousel-item>
    </v-carousel>
    <div class="mx-16 mt-16">
      <v-row class="w-80 mx-auto bg-search px-5">
        <v-col cols="3">
          <v-select
            v-model="chosePlace"
            :items="listPlace"
            prepend-icon="mdi-map-marker"
            menu-props="auto"
            hide-details
            label="Where are you going?"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Time"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="searchText"
            append-icon="mdi-magnify"
            label="search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div class="offer__title">
      <p class="offer__title--size-l">Let’s go</p>
      <h2>Destinations</h2>
    </div>
    <div class="py-15 mx-16">
      <v-row>
        <v-col cols="4" class="my-6 px-3" v-for="tour in tours" :key="tour.id">
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
</template>

<script>
import NewItemTour from "../../components/NewItemTour.vue";

export default {
  name: "PageTour",
  components: { NewItemTour },
  data() {
    return {
      searchText: "",
      chosePlace: "",
      listPlace: ["Miền Bắc", "Miền Trung", "Miền Nam"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      banners: [
        { pic: "baner_tuor(1).png" },
        { pic: "baner_tuor(2).png" },
        { pic: "baner_tuor(3).png" },
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
        {
          id: 8,
          pic: "tours(14).png",
          calendar: "fa fa-calendar",
          day: "6 days",
          atl: "Ha Long Bay",
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
          p: "Ha Long Bay tourist area, Quang Ninh",
          price: "$159",
        },
        {
          id: 9,
          pic: "tours(15).png",
          calendar: "fa fa-calendar",
          day: "6 days",
          atl: "Bat Trang",
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
          p: "Bat Trang ceramic village",
          price: "$129",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.w-80 {
  width: 80%;
}
.bg-search {
  background: lightblue;
  border-radius: 30px !important;
}
::v-deep {
  // .v-text-field > .v-input__control > .v-input__slot:after,
  // .v-text-field > .v-input__control > .v-input__slot:before {
  //   border-width: 0 !important;
  // }
  .v-input {
    // max-width: 80%;
    &__prepend-outer {
      margin-right: 15px !important;
    }
  }
}
</style>
