<template>
  <div class="blog bg-f6">
    <slide-img-blog />
    <div class="container mx-auto">
      <b-row>
        <b-col cols="8">
          <div class="bg-white" v-for="(item, i) in posts" :key="i">
            <h3 class="text-center pt-4">{{ item.h3 }}</h3>
            <div class="d-flex justify-content-between my-3 px-4">
              <div
                class="d-flex align-items-center"
                v-for="(contract, i) in item.contracts"
                :key="i"
              >
                <i :class="contract.icon"></i>
                <p class="mx-2">{{ contract.p }}</p>
              </div>
            </div>
            <div class="zoom my-4">
              <img :src="require(`@/assets/${item.img}`)" />
            </div>
            <p class="p-5 text-justify">
              {{ item.p }}
            </p>
            <hr />
            <div class="d-flex justify-content-between mx-5 px-5 py-3">
              <div v-for="(internet, i) in item.internets" :key="i">
                <router-link :to="internet.to">
                  <i :class="internet.icon"></i>
                </router-link>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="3 mx-auto">
          <div class="bg-white">
            <div class="borderbottom"></div>
            <h6 class="text-center py-3">CATEGORIES</h6>
            <hr class="mx-4" />
            <div class="d-flex justify-content-between mx-5 px-5 py-3"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SlideImgBlog from "../components/carousel/SlideImgBlog.vue";
export default {
  components: { SlideImgBlog },
  name: "Blog",
  data() {
    return {
      posts: [
        {
          h3: "Lau flower field",
          img: "img-blog (1).png",
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
          img: "img-blog (2).png",
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
  .py-3 {
    div {
      i {
        color: #ddd !important;
        font-size: 25px;
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
}
</style>
