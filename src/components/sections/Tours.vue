<template>
  <div class="tour">
    <div class="bg-page">
      <div class="container">
        <div class="offer__title">
          <p class="offer__title--size-l">tour’s new</p>
          <h2>outstanding tours</h2>
        </div>

        <div class="py-5">
          <b-row cols="3">
            <b-col class="my-5" v-for="tour in tours" :key="tour.p">
              <div class="tour-list d-flex">
                <div class="tour-list__title h-100 mb-2">
                  <div class="zoom">
                    <b-img
                      :src="require(`@/assets/${tour.pic}`)"
                      :alt="tour.atl"
                      class="position-relative"
                    />
                  </div>
                  <div class="d-flex mt-5 px-3">
                    <i :class="tour.map"></i>
                    <p>{{ tour.p }}</p>
                  </div>
                </div>

                <hr class="mt-3 mx-auto" />

                <div class="d-flex justify-content-between px-3 my-3">
                  <p class="tour-list-price">
                    From <br />
                    <span>{{ tour.price }}</span>
                  </p>
                  <router-link to="/" class="next-btn">Explore -></router-link>
                </div>

                <div class="position-absolute tour-list__abs">
                  <div class="d-flex">
                    <p class="px-3">
                      <i :class="tour.calendar"></i>
                      {{ tour.day }}
                    </p>
                    <p class="px-1">
                      <i :class="tour.user"></i>
                      {{ tour.people }}
                    </p>
                  </div>
                  <ul class="star d-flex px-3">
                    <li v-for="(star, index) in tour.stars" :key="index">
                      <i :class="star.icon"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container">
        <b-row class="py-5 tour-best">
          <b-col cols="8">
            <h3>Best Price</h3>
            <hr />
            <b-row cols="2">
              <router-link to="/" v-for="best in bests" :key="best.img">
                <div class="tour-info">
                  <div class="d-table mt-3 h-100">
                    <div class="zoom d-block">
                      <img
                        :src="require(`@/assets/${best.img}`)"
                        :alt="best.alt"
                      />
                    </div>
                    <div class="d-table-cell align-top w-75 pl-3">
                      <p>{{ best.p }}</p>
                      <ul class="d-flex star">
                        <li v-for="(star, index) in best.stars" :key="index">
                          <i :class="star.icon"></i>
                        </li>
                      </ul>
                      <p>{{ best.price }}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </router-link>
            </b-row>
          </b-col>

          <b-col cols="4 tour-best-right">
            <div class="position-relative px-3">
              <div class="zoom">
                <img :src="require('@/assets/tours (13).png')" alt="" />
              </div>
              <div class="position-absolute">
                <h3>Happy Holiday!</h3>
                <h3>myTour.</h3>
                <p>5% bonus on all booking</p>
                <router-link to="/" class="book-btn btn">Booking now -></router-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tours: [
        {
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
      ],
      bests: [
        {
          img: "tours (6).png",
          atl: "Mu cang chai",
          p: "Mu Cang Chai rice terraces.",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          price: "$79",
        },
        {
          img: "tours (5).png",
          atl: "Moc Chau",
          p: "Moc Chau tourism, Son La.",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          price: "$59",
        },
        {
          img: "tours (4).png",
          atl: "Bản Cat Cat",
          p: "Sand Sand Ban, Lao Cai.",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          price: "$87",
        },
        {
          img: "tours (3).png",
          atl: "Tam Dao",
          p: "Tam Dao, Vinh Phuc Tourism.",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          price: "$109",
        },
        {
          img: "tours (2).png",
          atl: "Ba Vi",
          p: "Ba Vi National Park Tourism.",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          price: "$125",
        },
        {
          img: "tours (1).png",
          atl: "Ban Gioc",
          p: "Ban Gioc waterfall tour, Cao Bang.",
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          price: "$100",
        },
      ],
    };
  },
};
</script>

<style></style>
