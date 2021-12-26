<template>
  <a-card
    class="shadow-sm"
    title="Book tour"
    :bordered="false"
    :bodyStyle="{ padding: '20px !impirtant' }"
  >
    <div class="book">
      <div>Ngày khởi hành</div>
      <div>
        <a-date-picker
          placeholder="Date"
          :disabledDate="disabledDate"
          @change="onChangDepart"
          allowClear
        />
      </div>
    </div>
    <div class="book">
      <div>
        <b>{{ tour.price_default | currencyVN }}</b> x
        <b>{{ quantityPeople }}</b> người lớn
      </div>
      <div>
        <a-input-number
          :min="0"
          :max="tour.number_persons"
          v-model="quantityPeople"
          class="w-10"
        />
      </div>
    </div>
    <div class="book">
      <div>
        <b>{{ tour.price_children | currencyVN }}</b> x
        <b>{{ quantityChildren }}</b> trẻ em
      </div>
      <div>
        <a-input-number
          :min="0"
          :max="tour.number_persons"
          v-model="quantityChildren"
          class="w-10"
        />
      </div>
    </div>
    <div class="book">
      <div>
        <b>{{ tour.price_baby | currencyVN }}</b> x <b>{{ quantityBaby }}</b> em
        bé
      </div>
      <div>
        <a-input-number
          :min="0"
          :max="quantityPeople"
          v-model="quantityBaby"
          class="w-10"
        />
      </div>
    </div>
    <a-divider />
    <div class="book">
      Tổng cộng: <b v-if="total !== 0">{{ total | currencyVN }}</b>
    </div>
    <div class="book">
      Giảm giá:
      <b v-if="discount !== 0"
        >-{{ discount | currencyVN }} (-{{ discountCode.percent }}%)</b
      >
    </div>
    <a-row class="book">
      <a-col :style="{ padding: 0 }" :span="6"> Mã giảm giá </a-col>
      <a-col :span="12">
        <a-input
          placeholder="Mã giảm giá"
          v-model="code"
          :disabled="discount !== 0"
        />
      </a-col>
      <a-col :span="6">
        <a-button
          block
          :disabled="!code"
          @click="discount === 0 ? getDiscount(code) : cancelDiscount()"
        >
          {{ discount === 0 ? "Áp dụng" : "Hủy" }}
        </a-button>
      </a-col>
    </a-row>
    <div class="book">
      Thành tiền: <b v-if="total !== 0">{{ totalAmount() | currencyVN }}</b>
    </div>
    <div v-if="!$auth.user && !$auth.loggedIn">
      <a-alert type="warning" showIcon class="w-100" banner>
        <div slot="message">
          Vui lòng
          <router-link :to="{ name: 'login' }">đăng nhập</router-link> để đặt
          tour
        </div>
      </a-alert>
    </div>
    <a-button
      v-else
      @click="continueOrder"
      class="btn-book"
      >Book tour</a-button
    >
  </a-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    tour: {
      type: Object,
    },
  },
  data() {
    return {
      dateDepart: null,
      quantityPeople: 0,
      quantityChildren: 0,
      quantityBaby: 0,
      //
      code: "",
    };
  },
  computed: {
    ...mapState("orderUser", ["discountCode"]),
    discount() {
      const { total, discountCode } = this;
      return (total / 100) * discountCode.percent || 0;
    },
    total() {
      return (
        this.computePricePeople() +
        this.computePriceChildren() +
        this.computePriceBaby()
      );
    },
  },
  methods: {
    ...mapActions("orderUser", [
      "saveOrderInfo",
      "applyDiscount",
      "clearDiscount",
    ]),
    onChangDepart(dates, dateStrings) {
      this.dateDepart = dateStrings;
    },
    disabledDate(current) {
      return current && current < new Date(Date.now() - 864e5);
    },
    computePricePeople() {
      return +this.tour.price_default * this.quantityPeople;
    },
    computePriceChildren() {
      return +this.tour.price_children * this.quantityChildren;
    },
    computePriceBaby() {
      return +this.tour.price_baby * this.quantityBaby;
    },
    totalAmount() {
      return this.total - this.discount;
    },
    getDiscount(code) {
      this.applyDiscount({ discountCode: code });
    },
    cancelDiscount() {
      this.code = "";
      this.clearDiscount();
    },
    continueOrder() {
      const {
        tour,
        dateDepart,
        quantityPeople,
        quantityChildren,
        quantityBaby,
        discountCode,
        total,
        discount,
      } = this;
      if (dateDepart == null) {
        this.$message.warning("Vui lòng chọn ngày khởi hành");
        return;
      }
      if (quantityPeople === 0) {
        this.$message.warning("Vui lòng đăng ký ít nhất 1 người lớn");
        return;
      }
      if (
        quantityPeople + quantityChildren + quantityBaby >
        tour.number_persons
      ) {
        this.$message.warning(
          `Số người tối đa vượt quá ${tour.number_persons}`
        );
        return;
      }
      const data = {
        tour_id: tour.id,
        date_depart: dateDepart,
        quantity_people: quantityPeople,
        quantity_children: quantityChildren,
        quantity_baby: quantityBaby,
        discount_code: discountCode.code || "",
        discount_percent: discountCode.percent || "",
        total: total,
        discount: discount,
        total_amount: this.totalAmount(),
      };
      this.saveOrderInfo(data);
    },
  },
};
</script>

<style lang="less" scoped>
.book {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 16px;
}
.btn-book{
  background: #8592B0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  align-items: center;
}
</style>
