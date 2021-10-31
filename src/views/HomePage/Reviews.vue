<template>
  <div class="bg-page pb-5 review">
    <div class="mx-16">
      <div class="offer__title">
        <p class="offer__title--size-l">feedback</p>
        <h2>Customer Reviews</h2>
      </div>

      <v-carousel ref="myCarousel" class="pb-5 h-100" hide-delimiters>
        <v-carousel-item
          class="carousel-item"
          v-for="(review, i) in reviews"
          :key="i"
        >
          <p class="w-75 text-center mx-auto my-5">{{ review.p }}</p>
          <div class="d-flex mt-15 m-auto mx-auto justify-space-between w-20">
            <div class="d-block mb-5">
              <img :src="require(`@/assets/${review.avt}`)" :alt="review.alt" />
            </div>
            <div class="d-table-cell align-top">
              <ul class="d-flex star">
                <li v-for="(star, index) in review.stars" :key="index">
                  <i :class="star.icon"></i>
                </li>
              </ul>
              <h5>{{ review.name }}</h5>
              <p>{{ review.address }}</p>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reviews: [
        {
          p: '"Thank you for a truly amazing stay. Your hospitality is quite outstanding. The sports centre is also very good with excellent quality tennis courts. Hope to be organized” ',
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          name: "Sunny",
          avt: "avt.png",
          alt: "sunny",
          address: "New york, usa",
        },

        {
          p: '"Thank you for a truly amazing stay. The sports centre is also very good with excellent quality tennis courts. Hope to be organized” ',
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          name: "Mit",
          avt: "avt2.png",
          alt: "Mit",
          address: "los angeles,usa",
        },

        {
          p: '"Thank you for a truly amazing stay. Your hospitality is quite outstanding. The sports centre is also very good with excellent quality tennis courts. Hope to be organized” ',
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          name: "Lili",
          avt: "avt3.png",
          alt: "Lili",
          address: "canada, usa",
        },

        {
          p: '"Thank you for a truly amazing stay. Your hospitality is quite outstanding. The sports centre is also very good with excellent quality tennis courts. Hope to be organized” ',
          stars: [
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
            { icon: "fa fa-star" },
          ],
          name: "Coi Lis",
          avt: "avt4.png",
          alt: "Coi Lis",
          address: "Singapo",
        },
      ],
    };
  },
  methods: {},
};
</script>
