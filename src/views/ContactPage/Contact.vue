<template>
  <div class="contract">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(banner, i) in banners" :key="i"
        ><v-img :src="require(`@/assets/${banner.img}`)"
      /></v-carousel-item>
    </v-carousel>
    <div class="mx-auto">
      <v-row>
        <v-col cols="6 px-16 pb-11">
          <h5>Would like to talk?</h5>
          <h3>CONTACT DETAILS</h3>
          <p class="mt-5 pb-4">
            If you have a story to share or an unanswered question, please
            contact us via the contact details listed below or fill out the form
            on the right. Thanks!
          </p>
          <div
            v-for="contact in contacts"
            :key="contact.name"
            class="d-table mb-4 mt-2"
          >
            <div class="contract-follow__icon d-inline-block">
              <a :href="contact.link" target="_blank">
                <i :class="contact.icon"></i>
              </a>
            </div>
            <div class="contract-follow__name d-table-cell">
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
        </v-col>
        <v-col cols="6 px-16">
          <h5>Have a question?</h5>
          <h3>GET IN TOUCH</h3>
          <v-row class="mt-6">
            <v-col cols="6 pr-2">
              <v-text-field label="Your Name" outlined></v-text-field>
            </v-col>
            <v-col cols="6 pl-2">
              <v-text-field label="Phone" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Email" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                solo
                name="input-7-4"
                label="Your message"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row
            ><v-col cols="12">
              <v-btn class="px-5 pa-5 btn-info"> Send</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contract",
  data() {
    return {
      banners: [
        {
          img: "img-slide.png",
          caption: "Contract us",
          text: " We would love to hear from you",
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
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
.contract {
  margin-top: 100px;

  h5 {
    color: $colorBlack70 !important;
    @include font-size(18px !important, 22px !important);
    margin-top: 61px;
    font-family: Courgette;
    text-transform: capitalize;
    font-style: italic;
    margin-bottom: 20px !important;
    font-weight: 500 !important;
  }
  p {
    font-family: Courier Prime;
    @include font-size(16px, 18px);
    padding-right: 60px;
    text-align: justify;
  }
  &-follow {
    &__icon {
      @include width-height(30px, 30px);
      background-color: $colorBlueSky;
      border-radius: 50%;
      margin-right: 15px;
      i {
        color: #fff;
        @include font-size(14px, 30px);
        text-align: center;
        width: 100%;
      }
      :hover {
        border-radius: 50%;
        height: 100%;
        background-color: $colorpurple;
        i {
          color: $colorOrangeYellow;
        }
      }
    }
    &__name {
      margin-left: 25px;
      a {
        color: #000;
      }
    }
  }
  .rounded {
    @include width-height(35px, 35px);
    background-color: $colorpurple;
    transition: 0.3s ease;
    margin-right: 20px;
    a {
      color: #fff !important;
    }
    &:hover {
      margin-top: -5px;
    }
    &:nth-child(2) {
      background-color: $colorlightblue;
    }
    &:nth-child(3) {
      background-color: $colorred;
    }
    &:nth-child(4) {
      background-color: $colorreddark;
    }
    &:nth-child(5) {
      background-color: $colorblue;
    }
    i {
      @include font-size(16px, 35px);
      text-align: center;
      width: 100%;
    }
  }
  .row + .row {
    margin-top: -15px !important;
  }
  .form-control {
    border-radius: 0 !important;
    &:focus {
      box-shadow: none !important;
    }
  }
}
.v-btn {
  height: 50px !important;
  width: 144px !important;
  background: #0dcaf0 !important;
  text-transform: capitalize !important;
}

.v-window .v-item-group .theme--dark .v-carousel {
  height: 200px !important;
  .v-image .v-responsive .v-carousel__item .theme--light {
    height: 200px !important;
  }
}

::v-deep {
  .v-input__slot {
    border: 1px solid #ddd !important;
  }
}
</style>
