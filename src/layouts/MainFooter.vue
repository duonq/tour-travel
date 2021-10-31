<template>
  <div class="footer">
    <v-container class="bv-example-row">
      <v-row cols="3">
        <v-col>
          <div class="footer__logo">
            <h1>Travel .</h1>
            <p class="footer-title mt-5">
              Always bring you great experiences with your loved ones <br />
              Please share and enjoy it
            </p>
            <ul class="footer-link">
              <li v-for="page in pages" :key="page.title">
                <!-- <router-link :to="/">{{ page.title }}</router-link> -->
              </li>
            </ul>
          </div>
        </v-col>
        <v-col>
          <div class="pl-4 pr-4 footer-follow">
            <h5>contact us</h5>
            <div
              v-for="contact in contacts"
              :key="contact.name"
              class="d-table mb-4 mt-2"
            >
              <div class="footer-follow__icon d-inline-block">
                <a :href="contact.link" target="_blank">
                  <i :class="contact.icon"></i>
                </a>
              </div>
              <div class="footer-follow__name d-table-cell">
                <a :href="contact.link" target="_blank">
                  {{ contact.name }}
                </a>
              </div>
            </div>

            <div class="d-flex justify-content-between mt-5 w-75">
              <div v-for="follow in follows" :key="follow.icon" class="rounded">
                <a :href="follow.link" target="_blank">
                  <i :class="follow.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="footer__ins">
            <h5>Instagram</h5>
            <v-row cols="3 mx-auto">
              <v-col v-for="img in images" :key="img.picture" class="pb-4">
                <!-- <v-img :src="require('@/assets/sport3.png')" /> -->
                <div class="zoom">
                  <v-img :src="require(`@/assets/${img.picture}`)" />
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Home",
          //   route: {
          // name: "Home",
          //   },
        },
        {
          title: "Tours",
          //   route: {
          // name: "Tours",
          //   },
        },
        {
          title: "About",
          //   route: {
          // name: "About",
          //   },
        },
        {
          title: "Contact",
          //   route: {
          // name: "Contact",
          //   },
        },
        {
          title: "Blog",
          //   route: {
          // name: "Blog",
          //   },
        },
      ],
      contacts: [
        {
          icon: "fa fa-map-marker",
          name: "Bình Giang, Hải Dương",
          link: "https://goo.gl/maps/Wk8ZfN3UUy3XpShQA",
        },
        {
          icon: "fa fa-phone",
          name: "033 706 7403",
          link: "033 706 7403",
        },
        {
          icon: "fa fa-envelope",
          name: "ntlduong99@gmail",
          link: "mailto:ntlduong99@gmail.com",
        },
        {
          icon: "fa fa-skype",
          name: "travel.tour",
          link: "skype:live:.cid.85a5edae5f4fb96b",
        },
        {
          icon: "fa fa-instagram",
          name: "travel.tour.mit",
          link: "https://www.instagram.com/duong.mit.9/?hl=vi",
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
          icon: "fa fa-google",
          link: "https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1",
        },
        {
          icon: "fa fa-pinterest",
          link: "https://www.pinterest.com/",
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/feed/",
        },
      ],
      images: [
        { picture: "sport31.png" },
        { picture: "sport21.png" },
        { picture: "image2.png" },
        { picture: "image3.png" },
        { picture: "image4.png" },
        { picture: "image5.png" },
        { picture: "image6.png" },
        { picture: "sec6_img21.png" },
        { picture: "BT1.png" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.bv-example-row {
  height: auto;
}
</style>
