<template>
  <div class="about">
    <section class="tours-banner">
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
        <div><img src="/img/banner_about.png" /></div>
        <div><img src="/img/banner_about.png" /></div>
        <div><img src="/img/banner_about.png" /></div>
      </a-carousel>
    </section>

    <div class="memory">
      <a-row>
        <a-col :span="12">
          <div class="" style="margin-top: 80px">
            <h3>Tạo và lưu giữ những kỷ niệm đẹp</h3>
            <p>
              Chúng tôi giúp bạn tạo dựng và lưu giữ những khoảnh khắc đẹp bên
              những người thân yêu của mình
            </p>
            <div v-for="item in listed" :key="item.text">
              <div class="d-table">
                <p class="d-inline-block"><a-icon :type="item.icon" /></p>
                <p class="d-table-cell">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="bg-img">
            <img src="/img/checkin.png" style="margin: 80px" />
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="teams mx-auto">
      <h3>Our Teams</h3>
      <p class="text-center mx-auto">
        Chúng tôi có một đội ngũ chuyên nghiệp cung cấp các dịch vụ hoàn hảo để
        đảm bảo sự tận hưởng kỳ nghỉ của bạn.
      </p>
    </div>
    <div class="d-flex mx-auto">
      <a-card hoverable style="width: 340px; margin: 20px">
        <img slot="cover" alt="nhanvien" src="/img/team.png" />
        <div class="position-absolute pos-about">
          <div class="bg-about">
            <h5 style="padding-top: 20px">Sunny</h5>
            <p>Tour oparator</p>

            <div
              class="d-flex justify-space-between"
              style="padding: 20px !important"
            >
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
          </div>
        </div>
      </a-card>
      <a-card hoverable style="width: 340px; margin: 20px">
        <img slot="cover" alt="nhanvien" src="/img/team.png" />
        <div class="position-absolute pos-about">
          <div class="bg-about">
            <h5 style="padding-top: 20px">Sunny</h5>
            <p>Tour oparator</p>

            <div
              class="d-flex justify-space-between"
              style="padding: 20px !important"
            >
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
          </div>
        </div>
      </a-card>
      <a-card hoverable style="width: 340px; margin: 20px">
        <img slot="cover" alt="nhanvien" src="/img/team.png" />
        <div class="position-absolute pos-about">
          <div class="bg-about">
            <h5 style="padding-top: 20px">Sunny</h5>
            <p>Tour oparator</p>

            <div
              class="d-flex justify-space-between"
              style="padding: 20px !important"
            >
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
          </div>
        </div>
      </a-card>
    </div>
    <div class="teams">
      <h3>Our Blogs</h3>
      <p class="text-center mx-auto">
        Chúng tôi luôn cập nhật cho bạn những tin tức mới nhất về kỳ nghỉ, đăng
        ký vào blog của chúng tôi và tìm hiểu mọi thứ.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      model: null,
      banners: [
        {
          img: "banner_about.png",
          caption: "About us",
        },
      ],
      listed: [
        {
          icon: "check-circle-o",
          text: "Bảo đảm sự hài lòng",
        },
        {
          icon: "check-circle-o",
          text: "Luôn hỗ trợ trực tuyến",
        },
        {
          icon: "check-circle-o",
          text: "Đảm bảo các chuyến đi an toàn",
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
          icon: "instagram",
          link: "https://www.instagram.com/duong.mit.9/",
        },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/feed/",
        },
      ],
      tours: [
        { img: "/img/viewTourAdd(1).png" },
        { img: "/img/viewTourAdd(2).png" },
        { img: "/img/viewTourAdd(3).png" },
        { img: "/img/viewTourAdd(4).png" },
        { img: "/img/viewTourAdd(5).png" },
        { img: "/img/viewTourAdd(1).png" },
        { img: "/img/viewTourAdd(2).png" },
        { img: "/img/viewTourAdd(3).png" },
        { img: "/img/viewTourAdd(4).png" },
        { img: "/img/viewTourAdd(5).png" },
      ],
    };
  },
};
</script>

<style scoped lang="less">
// @import "@/scss/style.scss";
.tours-banner {
  position: relative;
  margin: 0 -50px;
  img {
    width: 100%;
    max-height: 320px;
  }
  span {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    height: 86px;
    width: 100%;
    background: rgba(0, 0, 0, 0.25);
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: cursive;
    line-height: 32px;
    padding: 27px 50px;
  }
}
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}
.memory {
  overflow-x: hidden;
  h3 {
    text-align: left !important;
    padding: 20px 0;
  }
  p {
    font-size: 24px;
    line-height: 37px;
    color: rgba(0, 0, 0, 0.5);
  }
  .d-table {
    p {
      margin-top: 20px;
      font-size: 32px;
      line-height: 40px;
      color: #6078ab;
      font-family: Courier Prime;
      font-weight: bold;
      margin-right: 20px;
      i {
        color: #e88750;
      }
    }
  }
  .bg-img {
    background-color: #7786a7e5;
    text-align: center;
    img {
      width: auto !important;
    }
  }
}
.teams {
  h3 {
    text-align: center !important;
    margin-top: 200px;
    padding-bottom: 23px;
  }
  p {
    font-size: 24px;
    line-height: 26px;
    font-family: Courier Prime;
    color: rgba(0, 0, 0, 0.5);
    max-width: 791px;
    padding-bottom: 70px;
  }
}

.pos-about {
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 10px;
  .bg-about {
    margin: 36px;
    background: rgba(245, 241, 241, 0.8);
    h5 {
      color: #000 !important;
      text-align: center;
      font-family: Courier Prime !important;
      text-transform: capitalize !important;
      margin-bottom: 0 !important;
    }
    p {
      font-size: 14px;
      text-align: center;
      font-weight: 400;
    }
    .rounded {
      line-height: 35px;
      background-color: #2a9d8f;
      transition: 0.3s ease;
      margin: 10px;
      &:hover {
        margin-top: -5px;
      }

      i {
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        width: 100%;
        color: #fff !important;
      }
    }
  }
}
</style>>
