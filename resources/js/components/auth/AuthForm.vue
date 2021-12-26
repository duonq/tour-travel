<template>
  <div class="container">
    <a-card
      class="login m-auto shadow"
      :bordered="false"
      :bodyStyle="{ padding: '16px' }"
    >
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <h3 class="my-auto">Travel</h3>
        </router-link>
      </div>
      <slot></slot>
    </a-card>
  </div>
</template>

<script>
export default {
  created() {
    const fb = document.getElementById("fb-root");
    if (fb) {
      fb.style.display = "none";
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .login {
    width: 410px;
    background-color: #eef0f8;
    .logo {
      padding: 20px;
      text-align: center;
    }
  }
}
</style>
