<template>
  <div class="signin">
    <div class="bg-login mx-auto">
      <h3 class="text-center py-5">Login</h3>
      <p>Username or email</p>
      <v-text-field placeholder="Nhập tên đăng nhập" solo></v-text-field>
      <p>Password</p>
      <v-text-field
        type="password"
        placeholder="Nhập password"
        solo
      ></v-text-field>
      <v-btn class="btn pa-6 w-100 mt-5"> Sign in </v-btn>
      <p>Forgot password?</p>
      <p class="my-5 text-center">
        Do not have an account? <a @click="visible = 1">Register</a>
      </p>
    </div>
    <register :visible="visible === 1" @close="visible = -1" />
  </div>
</template>

<script>
import Register from "./Register.vue";
export default {
  components: { Register },
  name: "SignIn",
  data() {
    return {
      visible: -1,
      dialog: -1,
    };
  },
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}
.signin {
  margin: 200px 0;
}
.bg-login {
  width: 500px;
  padding: 70px;
}
.btn {
  background-color: #dc834e !important;
  color: #fff !important;
  font-size: 14px;
  font-weight: 700 !important;
  text-transform: capitalize;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px !important;
}
</style>