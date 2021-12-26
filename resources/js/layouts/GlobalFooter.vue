<template>
  <a-layout-footer class="footer">
    <div>
      <div class="bv-example-row container">
        <a-row>
          <a-col :span="8">
            <div class="footer__logo">
              <h1>Travel .</h1>
              <p class="footer-title">
                Luôn mang đến cho bạn những trải nghiệm tuyệt vời bên những
                người thân yêu Hãy chia sẻ và tận hưởng nó
              </p>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="footer-follow">
              <h5>contact us</h5>
              <div
                v-for="contact in contacts"
                :key="contact.name"
                class="d-table"
              >
                <div class="footer-follow__icon d-inline-block">
                  <a :href="contact.link" target="_blank">
                    <a-icon :type="contact.icon" />
                  </a>
                </div>
                <div class="footer-follow__name d-table-cell">
                  <a :href="contact.link" target="_blank">
                    {{ contact.name }}
                  </a>
                </div>
              </div>

              <div class="d-flex justify-content-between w-75">
                <div
                  v-for="follow in follows"
                  :key="follow.icon"
                  class="rounded"
                >
                  <a :href="follow.link" target="_blank">
                    <a-icon :type="follow.icon" />
                  </a>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="footer__ins">
              <h5>Instagram</h5>
              <a-row class="mx-auto">
                <a-col
                  :span="7"
                  v-for="img in images"
                  :key="img.picture"
                  style="margin: 10px 5px"
                >
                  <div class="zoom">
                    <img :src="img.picture" />
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </a-layout-footer>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Trang chủ",
        },
        {
          title: "Tours",
        },
        {
          title: "Giới thiệu",
        },
        {
          title: "Liên hệ",
        },
        {
          title: "Blog",
        },
      ],
      contacts: [
        {
          icon: "environment",
          name: "Bình Giang, Hải Dương",
          link: "https://goo.gl/maps/Wk8ZfN3UUy3XpShQA",
        },
        {
          icon: "phone",
          name: "033 706 7403",
          link: "033 706 7403",
        },
        {
          icon: "mail",
          name: "ntlduong99@gmail",
          link: "mailto:ntlduong99@gmail.com",
        },
        {
          icon: "skype",
          name: "travel.tour",
          link: "skype:live:.cid.85a5edae5f4fb96b",
        },
        {
          icon: "instagram",
          name: "travel.tour.mit",
          link: "https://www.instagram.com/duong.mit.9/?hl=vi",
        },
      ],
      follows: [
        {
          icon: "facebook",
          link: "https://www.facebook.com/duong.mit.201",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/home",
        },
        {
          icon: "google",
          link: "https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1",
        },
        {
          icon: "behance",
          link: "https://www.behance.com/",
        },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/feed/",
        },
      ],
      images: [
        { picture: "/img/sport31.png" },
        { picture: "/img/sport21.png" },
        { picture: "/img/image2.png" },
        { picture: "/img/image3.png" },
        { picture: "/img/image4.png" },
        { picture: "/img/image5.png" },
        { picture: "/img/image6.png" },
        { picture: "/img/sec6_img21.png" },
        { picture: "/img/BT1.png" },
      ],
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #7786a7e5;
  &-title {
    font-family: Courier Prime;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-top: 48px;
    padding-right: 30px;
  }
  &-link {
    margin-top: 32px;
    list-style-type: none;
  }
  a {
    color: #fff !important;
    font-family: monospace;
    font-size: 18px;
    line-height: 26px;
    align-items: center;

    &:hover {
      color: #ceeffb !important;
    }
  }
  &-follow {
    &__icon {
      // font-size: 30px;
      line-height: 30px;
      background-color: #e5e5e5;
      border-radius: 50%;
      margin-right: 15px;
      width: 30px;
      height: 30px;
      i {
        color: rgba(96, 120, 171, 0.5);
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        width: 100%;
      }
      &:hover {
        border-radius: 50%;
        background-color: #6078ab;
        i {
          color: #f8a323;
        }
      }
    }
    &__name {
      margin-left: 25px;

    }
    .rounded {
      width: 35px;
      height: 35px;
      background-color: #6078ab;
      transition: 0.3s ease;
      margin-right: 10px;
      border-radius: 3px;
      &:hover {
        margin-top: -5px;
      }
      &:nth-child(2) {
        background-color: #78e4f2;
      }
      &:nth-child(3) {
        background-color: #e26d5f;
      }
      &:nth-child(4) {
        background-color: #d14d54;
      }
      &:nth-child(5) {
        background-color: #3c90b8;
      }
      i {
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        width: 100%;
      }
    }
  }
}
h5 {
  color: #fff !important;
}
.bv-example-row {
  padding: 50px 0 150px !important;
}
.d-table {
  margin: 20px 0;
}
.footer-title{
  font-size: 18px;
  font-family: monospace;
}
</style>
