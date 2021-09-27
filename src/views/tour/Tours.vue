<template>
  <div class="tours">
    <slide-img-tours />
    <div class="offer__title">
      <p class="offer__title--size-l">Let’s go</p>
      <h2>Destinations</h2>
    </div>
    <div class="container py-5">
      <b-row cols="3">
        <b-col class="my-5" v-for="tour in tours" :key="tour.id">
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
        </b-col>
        <!-- <router-link to="/" class="btn">Views -><router-link> -->
      </b-row>
    </div>
  </div>
</template>

<script>
import SlideImgTours from "../../components/carousel/SlideImgTours.vue";
import NewItemTour from "../../components/News/NewItemTour.vue";
export default {
  name: "tours",
  components: { SlideImgTours, NewItemTour },
  data() {
    return {
      tours: [
        {
          id: 1,
          pic: "tours (7).png",
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
          pic: "tours (8).png",
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
          pic: "tours (9).png",
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
          pic: "tours (10).png",
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
          pic: "tours (11).png",
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
          pic: "tours (12).png",
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
          pic: "tours (16).png",
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
          pic: "tours (14).png",
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
          pic: "tours (15).png",
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

<style></style>
