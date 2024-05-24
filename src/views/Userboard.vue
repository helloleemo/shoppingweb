<template>
  <!-- NavBar -->
  <UserNavbar></UserNavbar>
  <!-- container -->
  <!-- <div class="container"> -->
  <ToastMessages></ToastMessages>
  <router-view></router-view>
  <!-- </div> -->
</template>

<script>
// 修正
import emitter from '../methods/emitter.js'
import ToastMessages from '../components/ToastMessages.vue'
import UserNavbar from '../components/UserNavbar.vue'
// import Banner from '../components/Banner.vue'

export default {
  components: {
    UserNavbar,
    // Banner,
    ToastMessages
  },
  provide() {
    return {
      emitter
    }
  },
  create() {}
}
</script>

<style lang="scss">
.banner {
  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
  }
}
.card {
  height: 500px;
  cursor: pointer;

  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
  .card-img-top {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  button {
    border: none;
  }
}
</style>
