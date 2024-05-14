<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid ps-3">
      <a class="navbar-brand text-white fw-bold" href="#">商品後台</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/dashboard/products"
              class="nav-link active text-white"
              aria-current="page"
              href="#"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link text-white" href=""
              >訂單資訊</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link text-white" href="#"
              >優惠卷</router-link
            >
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link text-white" href="#">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    //登出方式
    logout() {
      const api = `${import.meta.env.VITE_PATH_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          //登出成功後轉址
          this.$router.push('/login')
        }
      })
    },
    clickPage() {
      this.$router.push('/dashboard/orders')
    }
  }
}
</script>
