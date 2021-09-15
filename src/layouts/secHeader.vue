<template>
  <b-navbar toggleable="lg" type="dark" variant="charcoal">
    <div class="container">
      <b-navbar-brand>Travel .</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="ml-auto">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/tours">Tour</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
