<template>
  <div class="blog">
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
        <div><img src="/img/slide_img_blog.png" /></div>
        <div><img src="/img/slide_img_blog.png" /></div>
        <div><img src="/img/slide_img_blog.png" /></div>
      </a-carousel>
    </section>

    <!-- <div class="mx-16"> -->
    <a-row>
      <a-col :span="16">
        <div class="bg-white" v-for="(item, i) in posts" :key="i">
          <div class="borderbottom"></div>
          <h3 class="text-center" style="padding-top: 14px">{{ item.h3 }}</h3>
          <div
            class="d-flex justify-space-between"
            style="margin: 18px 0; padding: 0 18px"
          >
            <div
              class="d-flex align-items-center"
              v-for="(blog, i) in item.contracts"
              :key="i"
            >
              <a-icon :type="blog.icon" />
              <p style="margin: 0 4px">{{ blog.p }}</p>
            </div>
          </div>
          <div class="zoom">
            <img :src="item.img" />
          </div>
          <p class="text-justify" style="padding: 44px">
            {{ item.p }}
          </p>
          <a-divider></a-divider>

          <div
            class="d-flex justify-space-between py-5"
            style="margin: 0 36px; padding: 20px 36px"
          >
            <div v-for="(internet, i) in item.internets" :key="i">
              <router-link :to="internet.to">
                <a-icon :type="internet.icon" />
              </router-link>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="6" style="float: right">
        <div class="bg-white">
          <div class="borderbottom"></div>
          <h6 class="text-center" style="padding: 9px 0">CATEGORIES</h6>
          <a-divider style="margin: 0 8px"></a-divider>
          <div style="margin: 0 10px; padding: 9px 20px">
            <div
              v-for="item in blogViews"
              :key="item.name"
              class="d-table"
              style="margin-bottom: 16px; margin-top: 5px"
            >
              <div class="blog-follow__icon d-inline-block">
                <a :href="item.link" target="_blank">
                  <a-icon :type="item.icon" />
                </a>
              </div>
              <div class="blog-follow__name d-table-cell">
                <a :href="item.link" target="_blank">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="borderbottom"></div>
          <h6 class="text-center" style="padding: 9px 0">Tags</h6>
          <a-divider style="margin: 0 16px"></a-divider>
          <div style="margin: 0 20px; padding: 20px">
            <a-tag v-for="tag in tags" :key="tag">
              {{ tag }}
            </a-tag>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      tags: [
        "Sea",
        "Vacation",
        "Beach",
        "Nature",
        "Photos",
        "fruits",
        "parachute",
        "Mountain",
        "Cave",
      ],
      banners: [
        {
          img: "/img/slide_img_blog.png",
          caption: "Blog",
          text: " Homepage / Blog",
        },
      ],
      posts: [
        {
          h3: "Lau flower field",
          img: "/img/img-blog(1).png",
          p: "Hoa cỏ lau chỉ nở rộ vào mùa khô, thường là trong một thời gian ngắn từ cuối tháng 10 đến giữa tháng 11. Cuối mùa hạt rụng xuống, gió đưa hạt bay đi, lan xa để vào đầu mùa mưa, những hạt nhỏ li ti sẽ đâm chồi nảy lộc và thoáng chốc trở thành những vạt cỏ lau vi vu trong gió.",
          contracts: [
            {
              icon: "carry-out",
              p: "Nov 20,2019",
            },
            {
              icon: "environment",
              p: "Green House,Long Biên",
            },
            {
              icon: "tags",
              p: "Nature",
            },
            {
              icon: "aliwangwang",
              p: "Comments",
            },
          ],
          internets: [
            {
              icon: "camera",
              to: "",
            },
            {
              icon: "google",
              to: "",
            },
            {
              icon: "instagram",
              to: "",
            },
            {
              icon: "link",
              to: "",
            },
            {
              icon: "linkedin",
              to: "",
            },
          ],
        },
        {
          h3: "Bat Trang ceramics",
          img: "/img/img-blog(2).png",
          p: "Điểm thu hút khách du lịch đến làng gốm cổ truyền, khi đến đây khách du lịch được tham quan các khu trưng bày gốm, tự tay trải nghiệm việc làm gốm, mua những đồ vật bừng gốm với giá cả hợp lí.",
          contracts: [
            {
              icon: "carry-out",
              p: "Dec 20,2020",
            },
            {
              icon: "map-marker",
              p: "Bat Trang,Long Biên",
            },
            {
              icon: "tags",
              p: "Art",
            },
            {
              icon: "comments",
              p: "Comments",
            },
          ],
          internets: [
            {
              icon: "camera",
              to: "",
            },
            {
              icon: "google",
              to: "",
            },
            {
              icon: "instagram",
              to: "",
            },
            {
              icon: "link",
              to: "",
            },
            {
              icon: "linkedin",
              to: "",
            },
          ],
        },
      ],
      blogViews: [
        {
          icon: "right",
          name: "Destinations",
          link: "/",
        },
        {
          icon: "right",
          name: "Reviews",
          link: "/",
        },
        {
          icon: "right",
          name: "Events",
          link: "/",
        },
        {
          icon: "right",
          name: "Nature",
          link: "/",
        },
        {
          icon: "right",
          name: "Photos",
          link: "/",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
// @import "@/scss/style.scss";
h6{
    font-family: inherit !important;
}
.bg-white {
  margin-top: 80px !important;
  margin-bottom: 80px !important;
  div {
    i {
      color: #47a0ff;
    }
    p {
      font-size: 20px;
      line-height: 25px;
      font-weight: 400;
    }
  }
  .py-5 {
    div {
      i {
        color: #ddd !important;
        font-size: 30px;
        &:hover {
          color: #333 !important;
        }
      }
    }
  }
  .borderbottom {
    padding: 2px;
    background-image: linear-gradient(to right, #3366cc, #ccff33);
  }
  h6 {
    font-family: Courier Prime;
  }
  .blog-follow {
    &__icon {
      width: 25px;
      height: 25px;
      border: 0.25px solid #e88750;
      border-radius: 50%;
      text-align: center;
      margin-right: 20px;
      i {
        color: #e88750;
      }
    }
    &__name {
      font-size: 14px;
      font-weight: 400;
      a {
        color: rgba(0, 0, 0, 0.5) !important;
      }
    }
  }
}
.ant-tag {
  padding: 10px;
  margin: 5px;
  font-weight: 500;
  color: #000;
  font-size: 14px;
}
</style>
