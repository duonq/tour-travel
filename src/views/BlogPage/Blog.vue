<template>
  <div class="blog bg-f6">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(banner, i) in banners" :key="i"
        ><v-img :src="require(`@/assets/${banner.img}`)"
      /></v-carousel-item>
    </v-carousel>
    <div class="mx-16">
      <v-row>
        <v-col cols="8">
          <div class="bg-white" v-for="(item, i) in posts" :key="i">
            <div class="borderbottom"></div>
            <h3 class="text-center pt-7">{{ item.h3 }}</h3>
            <div class="d-flex justify-space-between my-9 px-9">
              <div
                class="d-flex align-items-center"
                v-for="(blog, i) in item.contracts"
                :key="i"
              >
                <i :class="blog.icon"></i>
                <p class="mx-2">{{ blog.p }}</p>
              </div>
            </div>
            <div class="zoom">
              <img :src="require(`@/assets/${item.img}`)" />
            </div>
            <p class="pa-11 text-justify">
              {{ item.p }}
            </p>
            <v-divider></v-divider>

            <div class="d-flex justify-space-between mx-9 px-9 py-5">
              <div v-for="(internet, i) in item.internets" :key="i">
                <router-link :to="internet.to">
                  <i :class="internet.icon"></i>
                </router-link>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3 mx-auto">
          <v-card>
            <div class="bg-white">
              <div class="borderbottom"></div>
              <h6 class="text-center py-3">CATEGORIES</h6>
              <v-divider class="mx-4"></v-divider>
              <div class="mx-5 px-5 py-3">
                <div
                  v-for="item in blogViews"
                  :key="item.name"
                  class="d-table mb-4 mt-2"
                >
                  <div class="blog-follow__icon d-inline-block">
                    <a :href="item.link" target="_blank">
                      <i :class="item.icon"></i>
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
          </v-card>

          <v-card>
            <div class="bg-white">
              <div class="borderbottom"></div>
              <h6 class="text-center py-3">Tags</h6>
              <v-divider class="mx-4"></v-divider>
              <div class="mx-5 px-5 py-5">
                <v-chip-group active-class="primary--text" column>
                  <v-chip v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
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
          img: "slide_img_blog.png",
          caption: "Blog",
          text: " Homepage / Blog",
        },
      ],
      posts: [
        {
          h3: "Lau flower field",
          img: "img-blog(1).png",
          p: "Hoa cỏ lau chỉ nở rộ vào mùa khô, thường là trong một thời gian ngắn từ cuối tháng 10 đến giữa tháng 11. Cuối mùa hạt rụng xuống, gió đưa hạt bay đi, lan xa để vào đầu mùa mưa, những hạt nhỏ li ti sẽ đâm chồi nảy lộc và thoáng chốc trở thành những vạt cỏ lau vi vu trong gió.",
          contracts: [
            {
              icon: "fa fa-calendar-check-o",
              p: "Nov 20,2019",
            },
            {
              icon: "fa fa-map-marker",
              p: "Green House,Long Biên",
            },
            {
              icon: "fa fa-tags",
              p: "Nature",
            },
            {
              icon: "fa fa-comments",
              p: "Comments",
            },
          ],
          internets: [
            {
              icon: "fa fa-camera-retro",
              to: "",
            },
            {
              icon: "fa fa-google",
              to: "",
            },
            {
              icon: "fa fa-instagram",
              to: "",
            },
            {
              icon: "fa fa-link",
              to: "",
            },
            {
              icon: "fa fa-linkedin",
              to: "",
            },
          ],
        },
        {
          h3: "Bat Trang ceramics",
          img: "img-blog(2).png",
          p: "Điểm thu hút khách du lịch đến làng gốm cổ truyền, khi đến đây khách du lịch được tham quan các khu trưng bày gốm, tự tay trải nghiệm việc làm gốm, mua những đồ vật bừng gốm với giá cả hợp lí.",
          contracts: [
            {
              icon: "fa fa-calendar-check-o",
              p: "Dec 20,2020",
            },
            {
              icon: "fa fa-map-marker",
              p: "Bat Trang,Long Biên",
            },
            {
              icon: "fa fa-tags",
              p: "Art",
            },
            {
              icon: "fa fa-comments",
              p: "Comments",
            },
          ],
          internets: [
            {
              icon: "fa fa-camera-retro",
              to: "",
            },
            {
              icon: "fa fa-google",
              to: "",
            },
            {
              icon: "fa fa-instagram",
              to: "",
            },
            {
              icon: "fa fa-link",
              to: "",
            },
            {
              icon: "fa fa-linkedin",
              to: "",
            },
          ],
        },
      ],
      blogViews: [
        {
          icon: "fa fa-angle-right",
          name: "Destinations",
          link: "/",
        },
        {
          icon: "fa fa-angle-right",
          name: "Reviews",
          link: "/",
        },
        {
          icon: "fa fa-angle-right",
          name: "Events",
          link: "/",
        },
        {
          icon: "fa fa-angle-right",
          name: "Nature",
          link: "/",
        },
        {
          icon: "fa fa-angle-right",
          name: "Photos",
          link: "/",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";

.bg-white {
  margin-top: 80px !important;
  margin-bottom: 80px !important;
  div {
    i {
      color: $colorBlueSky;
      font-size: 20px;
    }
    p {
      @include font-size(20px, 25px);
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
      @include width-height(25px, 25px);
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
        color: $colorBlack50 !important;
      }
    }
  }
}
::v-deep {
  .v-slide-group__wrapper {
    height: auto !important;
  }
}
</style>
