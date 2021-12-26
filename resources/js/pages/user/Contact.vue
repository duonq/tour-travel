<template>
  <div class="contract">
    <section class="contract-banner">
      <a-carousel arrows>
        <div
          slot="prevArrow"
          class="custom-slick-arrow"
          style="left: 10px; zindex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <div><img src="/img/img-slide.png" /></div>
        <div><img src="/img/img-slide.png" /></div>
        <div><img src="/img/img-slide.png" /></div>
      </a-carousel>
    </section>
    <div class="mx-auto">
      <a-row>
        <a-col span="12" style="padding: 0 64px">
          <h5>Bạn có điều muốn chia sẻ?</h5>
          <h3>LIÊN HỆ CHI TIẾT</h3>
          <p style="margin-top: 20px; padding-bottom: 16px">
            Nếu bạn có câu chuyện muốn chia sẻ hoặc câu hỏi chưa được giải đáp,
            vui lòng liên hệ với chúng tôi qua các chi tiết liên hệ được liệt kê
            bên dưới hoặc điền vào biểu mẫu bên phải. Cảm ơn!
          </p>
          <div
            v-for="contact in contacts"
            :key="contact.name"
            class="d-table"
            style="margin-bottom: 16px; margin-top: 10px"
          >
            <div class="contract-follow__icon d-inline-block">
              <a :href="contact.link" target="_blank">
                <a-icon :type="contact.icon" />
              </a>
            </div>
            <div class="contract-follow__name d-table-cell">
              <a :href="contact.link" target="_blank">
                {{ contact.name }}
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-between w-70">
            <div
              v-for="follow in follows"
              :key="follow.icon"
              class="rounded w-20"
            >
              <a :href="follow.link" target="_blank">
                <a-icon :type="follow.icon" />
              </a>
            </div>
          </div>
        </a-col>
        <a-col span="12" style="padding: 0 64px">
          <h5>Đặt câu hỏi?</h5>
          <h3>Phương thức liên hệ</h3>
          <a-row style="margin-top: 24px">
            <a-col span="12" style="padding-right: 10px">
              <a-input placeholder="Your Name"></a-input>
            </a-col>
            <a-col span="12">
              <a-input placeholder="Phone"></a-input>
            </a-col>
          </a-row>
          <a-row style="margin-top: 24px">
            <a-col span="24">
              <a-input placeholder="Email"></a-input>
            </a-col>
          </a-row>
          <a-row style="margin-top: 24px">
            <a-col span="24">
              <a-textarea placeholder="Your message"></a-textarea>
            </a-col>
          </a-row>

          <a-row
            ><a-col span="12">
              <a-button class="btn-info"> Send</a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
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
    };
  },
};
</script>

<style scoped lang="less">
.contract {
  margin-top: 100px;

  h5 {
    color: rgba(0, 0, 0, 0.7) !important;
    font-size: 18px !important;
    line-height: 22px !important;
    margin-top: 61px;
    font-family: Courgette;
    text-transform: capitalize;
    font-style: italic;
    margin-bottom: 20px !important;
    font-weight: 500 !important;
  }
  p {
    font-family: monospace;
    font-size: 18px !important;
    line-height: 18px !important;
    padding-right: 60px;
    text-align: justify;
  }
  &-follow {
    &__icon {
      background-color: #47a0ff;
      //   font-size: 30px !important;
      line-height: 30px !important;
      border-radius: 50%;
      margin-right: 15px;
      width: 30px;
      height: 30px;
      i {
        color: #fff;
        font-size: 14px !important;
        line-height: 30px !important;
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
      a {
        color: #000;
        font-size: 16px;
        font-family: monospace;
      }
    }
  }
  .rounded {
    width: 35px;
    height: 35px;
    line-height: 30px !important;
    background-color: #6078ab;
    transition: 0.3s ease;
    margin-right: 30px;
    border-radius: 3px;
    a {
      color: #fff !important;
    }
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
      font-size: 16px !important;
      line-height: 35px !important;
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
.ant-input {
  padding: 20px;
  font-size: 18px;
}
textarea.ant-input {
  padding: 10px 20px !important;
  max-height: 300px;
  height: 150px;
}
.btn-info {
  width: 150px;
  height: 50px;
  margin-top: 20px;
  background: #0dcaf0;
  font-weight: bold;
  &:hover{
      color: #fff !important;
  }
}
</style>
