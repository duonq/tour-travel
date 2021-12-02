<template>
  <div>
    <v-dialog v-model="dialog" @click:outside="closeDialog">
      <div class="bg-login mx-auto">
        <v-form ref="form">
          <h3 class="mb-3 text-center">Sign Up</h3>
          <p>Username *</p>
          <v-text-field placeholder="Nhập tên đăng nhập" solo></v-text-field>
          <p>Name</p>
          <v-text-field placeholder="Nhập họ và tên" solo></v-text-field>
          <p>Your email *</p>
          <v-text-field placeholder="Nhập mail" solo></v-text-field>
          <p>Confirm email *</p>
          <v-text-field placeholder="Nhập lại mail" solo></v-text-field>
          <v-btn class="btn pa-6 w-100 mt-3" @click="save"> Sign up </v-btn>
          <p class="my-5 text-center">
            Already have an account?
            <router-link to="/login" target="_blank">Login</router-link>
          </p>
        </v-form>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    visible: Boolean,
  },
  computed: {
    dialog: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    save(){
      this.$emit("close");
    },
    closeDialog() {
      this.resetForm();
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.w-100 {
  width: 100%;
}
// .signin {
//   margin: 200px 0;
// }
.bg-login {
  padding: 30px 70px;
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
::v-deep {
  .v-dialog {
    width: 500px;
    // width: 100%;
    background-color: white;
    // padding: 23px 20px 17px;
    border-radius: 9px;
    .v-label {
      font-size: 8px;
      color: #000 !important;
      font-weight: 600;
    }
  }
}
</style>