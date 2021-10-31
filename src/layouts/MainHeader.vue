<template>
  <div class="header">
    <v-container>
      <div class="d-flex justify-space-between">
        <v-tabs>
          <h1 class="my-auto">Travel .</h1>
        </v-tabs>
        <v-tabs v-model="tab" align-with-title>
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            @click="curentTab = i"
            >{{ item.title }}
          </v-tab>
        </v-tabs>
        <slot name="default" />
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Mypage",
  data() {
    return {
      tab: null,
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Tour",
          to: "/tours",
        },
        {
          title: "About",
          to: "/about",
        },
        {
          title: "Contact",
          to: "/contact",
        },
        {
          title: "Blog",
          to: "/blog",
        },
      ],
    };
  },
  components: {},
};
</script>

<style lang="scss" scope>
.header {
  position: fixed !important;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: #6078AB;
}
.container {
  padding: 0 !important;
  height: 80px;
}
h1 {
  font-size: 36px !important;
  line-height: 58px !important;
  font-weight: bold;
  font-family: Mogra !important;
  text-transform: uppercase;
  text-decoration: underline !important;
  padding: 0 !important;
  color: #fff;
}
.v-slide-group__wrapper {
  height: 80px;
}
.v-tab {
  font-weight: bold;
  font-size: 18px !important;
  line-height: 28px !important;
  text-transform: uppercase;
}
.v-tab:not(.v-tab--active) {
  color: #fff !important;
  &:hover {
    background-color: #eeeeee;
    color: #13ace0 !important;
  }
}
.v-tab--active {
  color: #13ace0 !important;
}
.v-tab--active:hover {
  background-color: #ceeffb !important;
  color: #13ace0 !important;
}
.theme--light.v-tabs > .v-tabs-bar {
  background: none !important;
}
.v-application a {
  color: #ceeffb;
}

</style>
