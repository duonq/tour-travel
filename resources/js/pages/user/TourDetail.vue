<template>
  <div :style="{ marginTop: '24px' }">
    <loading-full-screen v-if="loading" />
    <div v-else>
      <div style="margin-bottom: 20px !important;">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link :to="{ name: 'home' }">Trang chủ</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link :to="{ name: 'tours' }">Tour</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            {{ tour.name }}
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>

      <a-row :gutter="{ xs: 8, sm: 8, md: 16, lg: 16 }">
        <a-col>
          <h3>Tour du lịch : {{ tour.name }}</h3>
        </a-col>
        <a-col :xs="24" :sm="24" :md="16" :lg="16">
          <!-- import miêu tả cơ bản về tour -->
          <description :tour="tour" />
          <!-- kết thúc -->

          <!-- các hình ảnh của tour -->
          <gallery :tour="tour" />
          <!-- kết thúc -->

          <!-- kế hoạch lộ trình của tour -->
          <schedule :tour="tour" />
          <!-- kết thúc -->

          <!-- đánh giá -->
          <rating :tour="tour" />
          <!-- kết thúc -->
        </a-col>
        <a-col :xs="24" :sm="24" :md="8" :lg="8">
          <!-- price tour -->
          <price-tour :tour="tour" />
          <!-- end price tour -->

          <!-- Đặt tour -->
          <a-affix :offsetTop="80" :target="targetAffix">
            <order :tour="tour" />
          </a-affix>
          <!-- kết thúc -->
        </a-col>

        <a-col :xs="24" :sm="24" :md="24" :lg="24">
          <!-- related tour -->
          <related-tour :to-place-code="tour.to_place_code" :current-tour-id="tour.id" />
          <!-- end related tour -->
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import Description from "@/components/tourDetail/Description";
  import Gallery from "@/components/tourDetail/Gallery";
  import Schedule from "@/components/tourDetail/Schedule";
  import Rating from "@/components/tourDetail/Rating";
  import PriceTour from "@/components/tourDetail/PriceTour";
  import Order from "@/components/tourDetail/Order";
  import RelatedTour from "@/components/tourDetail/RelatedTour";
  export default {
    components: { Description, Gallery, Schedule, Rating, PriceTour, Order, RelatedTour },
    metaInfo() {
      return {
        title: this.tour.name,
        meta: [{ vmid: "description", name: "description", content: this.tour.name }],
      };
    },
    computed: {
      ...mapGetters("tourDetail", ["tour", "loading"]),
    },
    watch: {
      $route: "getTour",
    },
    created() {
      this.getTour();
    },
    methods: {
      ...mapActions("tourDetail", ["getTour"]),
      targetAffix() {
        return document.getElementById("app");
      },
    },
  };
</script>

<style lang="less" scoped>
h3{
  color: #000 !important;
  text-align: left !important;
}
</style>
