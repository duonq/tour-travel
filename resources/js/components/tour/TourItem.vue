<template>
  <a-col class="mb-16" :xs="col.xs" :sm="col.sm" :md="col.md" :lg="col.lg">
    <router-link :to="{ name: 'tours.show', params: { slug: data.slug } }">
      <a-card
        :bordered="false"
        :bodyStyle="{ padding: '25px !important' }"
        hoverable
        style="border-radius: 20px !important"
      >
        <img
          class="img-tour"
          :alt="data.name"
          v-lazy="data.image"
          slot="cover"
        />
        <div class="d-flex place">
          <a-icon type="environment" />
          <h6>{{ data.name }}</h6>
        </div>

        <template slot="description">
          <div class="description">
            {{ data.from_place_name }} đến
            {{ data.to_place_name }}
          </div>
        </template>
        <div class="content">
          <div class="content-rating">
            <a-rate :defaultValue="ratingRounded" disabled allowHalf />
            | {{ data.count_rating }} đánh giá
          </div>
          <div class="d-flex justify-space-between">
            <p class="content-price">
              Giá:
              <span> {{ data.price_default | currencyVN }}</span>
            </p>
            <p class="content-price">Xem thêm -></p>
          </div>
        </div>
      </a-card>
    </router-link>
  </a-col>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    col: {
      type: Object,
      default() {
        return {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 8,
        };
      },
    },
  },
  computed: {
    ratingRounded() {
      return Math.round(this.data.avg_rating * 100) / 100;
    },
  },
};
</script>

<style lang="less" scoped>
img.img-tour {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  transition: 0.5s ease;
  // overflow: hidden;
  // display: block;
  border-radius: 20px;
  &:hover {
    opacity: 0.55;
    cursor: pointer;
    // transform: scale(1.3);
    background-color: beige;
  }
}
.content {
  margin-top: 8px;
  margin-bottom: -4px;
  &-rating {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  &-price {
    font-size: 16px;
    font-weight: 700;
    span {
      color: #eda378;
    }
  }
}
h6 {
  margin-top: 0 !important;
}
.mb-16 {
  margin-bottom: 16px;
}
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.place {
  margin-bottom: 10px;
  align-items: center;
  i {
    font-size: 18px;
    margin-right: 10px;
    color: #8592b0;
  }
}
</style>
