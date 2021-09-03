<template>
  <div class="footer">
    <b-container class="bv-example-row">
      <b-row cols="3">
        <b-col>
          <div class="footer__logo">
            <b-navbar-brand>Travel .</b-navbar-brand>
            <p class="footer-title mt-5">
              Always bring you great experiences with your loved ones <br />
              Please share and enjoy it
            </p>
            <ul class="footer-link">
              <li v-for="page in pages" :key="page.title">
                <router-link :to="page.route">{{ page.title }}</router-link>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col>
          <div class="pl-4 pr-4 footer-follow">
            <h5>contact us</h5>
            <div
              v-for="contact in contacts"
              :key="contact.name"
              class="d-table mb-4 mt-2"
            >
              <div class="footer-follow__icon d-inline-block">
                <b-link :href="contact.link" target="_blank">
                  <i :class="contact.icon"></i>
                </b-link>
              </div>
              <div class="footer-follow__name d-table-cell">
                <b-link :href="contact.link" target="_blank">
                  {{ contact.name }}
                </b-link>
              </div>
            </div>

            <div class="d-flex justify-content-between mt-5 w-75">
              <div v-for="follow in follows" :key="follow.icon" class="rounded">
                <b-link :href="follow.link" target="_blank">
                  <i :class="follow.icon"></i>
                </b-link>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="footer__ins">
            <h5>Instagram</h5>
            <b-row cols="3 mx-auto pr-0">
              <b-col v-for="img in images" :key="img.picture" class="pb-4">
                <!-- <b-img :src="require('@/assets/sport3.png')" /> -->
                <div class="zoom">
                  <b-img :src="require(`@/assets/${img.picture}`)" />
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Home",
          route: {
            name: "Home",
          },
        },
        {
          title: "Tours",
          route: {
            name: "Tour",
          },
        },
        {
          title: "About",
          route: {
            name: "About",
          },
        },
        {
          title: "Contact",
          route: {
            name: "Contact",
          },
        },
        {
          title: "Blog",
          route: {
            name: "Blog",
          },
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
        { picture: "sport3 1.png" },
        { picture: "sport2 1.png" },
        { picture: "image2.png" },
        { picture: "image 3.png" },
        { picture: "image 4.png" },
        { picture: "image 5.png" },
        { picture: "image 6.png" },
        { picture: "sec6_img2 1.png" },
        { picture: "BT 1.png" },
      ],
    };
  },
};
</script>

<style></style>
