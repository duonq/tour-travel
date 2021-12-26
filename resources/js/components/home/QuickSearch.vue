<template>
  <div>
    <!-- <div class="mx-16 mt-16">
      <v-row class="w-80 mx-auto bg-search px-5">
        <v-col cols="3">
          <v-select
            v-model="chosePlace"
            :items="listPlace"
            prepend-icon="mdi-map-marker"
            menu-props="auto"
            hide-details
            label="Địa điểm?"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Time"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="searchText"
            append-icon="mdi-magnify"
            label="Tìm kiếm tour"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </div> -->
    <div :bordered="false" class="d-flex w-90" style="justify-content: center">
      <div class="w-25 bg-search">
        <a-input placeholder="Tìm tour theo tên tour" v-model="query.q" />
      </div>

      <div class="w-25 bg-search">
        <a-select
          placeholder="Loại tour"
          style="width: 100%; height: 50px !important"
          @change="onChangeCategory"
        >
          <a-select-option value="0">Tất cả</a-select-option>
          <a-select-option value="1">Trong nước</a-select-option>
          <a-select-option value="2">Ngoài nước</a-select-option>
        </a-select>
      </div>
      <div class="w-25 bg-search">
        <a-select
          placeholder="Chọn nơi đến"
          class="w-100"
          v-model="toPlaceSelected"
          @change="onChangeDepart"
        >
          <a-select-option
            v-for="city in cities"
            :key="city.code"
            :value="city.code"
            >{{ city.name }}</a-select-option
          >
        </a-select>
      </div>
      <a-button class="searchTour bg-search" icon="search" @click="search" block
        >Tìm kiếm</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {
        q: "",
        categoryId: "",
        toPlace: "",
      },
      toPlaceSelected: undefined,
    };
  },
  computed: {
    cities() {
      if (!this.query.categoryId) {
        return this.$root.cities;
      }
      if (this.query.categoryId == 1) {
        return this.$root.cities.filter((item) => item.code < 100);
      }
      if (this.query.categoryId == 2) {
        return this.$root.cities.filter((item) => item.code >= 100);
      }
    },
  },
  methods: {
    onChangeCategory(value) {
      this.query.categoryId = +value;
      this.toPlaceSelected = undefined;
    },
    onChangeDepart(value) {
      this.query.toPlace = value;
    },
    search() {
      const { query } = this;
      const sendQuery = {};
      if (query.q || query.categoryId || query.toPlace) {
        sendQuery.page = 1;
        if (query.q) sendQuery.q = query.q;
        if (query.categoryId) sendQuery.category = query.categoryId;
        if (query.toPlace) sendQuery.toPlace = query.toPlace;

        this.$router.push({ name: "tours", query: sendQuery });
      }
    },
  },
};
</script>

<style scoped lang="less">
.title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
.searchTour {
  width: 20%;
}
.bg-search {
  align-items: center;
  align-items: center;
  justify-content: center;
  border: 1px solid snow;
}
// .ant-select-selection--single{
//   height: 50px !important;
// }
.ant-select-selection__rendered,
.ant-input {
  background-color: #add8e6 !important;
  border: none !important;
  height: 50px !important;
  color: #000 !important;
  &:hover {
    border-color: #add8e6 !important;
  }
}

</style>
