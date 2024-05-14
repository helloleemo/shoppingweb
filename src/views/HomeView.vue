<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="https://picsum.photos/200/50" alt="" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-space-around" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link fw-bold active" aria-current="page" href="#">Work</a>
          <a class="nav-link fw-bold" href="#">About</a>
          <a class="nav-link fw-bold" href="#">Resume</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="main">
    <div class="container">
      <div class="about d-flex flex-wrap justify-content-center">
        <div class="avatar">
          <img class="rounded-circle" src="https://picsum.photos/150/150" alt="" />
        </div>
        <div class="intro ps-3">
          <h3 class="fw-bold d-inline-block pe-3">Hello, I’m LeeMo</h3>
          <p class="d-inline-block">Taipei, Taiwan.</p>
          <p class="">{{ introText }}</p>
          <div class="mainBtn d-flex">
            <button class="btn me-2 border border-dark">Work</button>
            <button class="btn border border-dark">cc</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="workSection py-2">
    <div class="container">
      <div class="title d-flex justify-content-center">
        <div class="mt-3 d-inline-block border-top w-25"></div>
        <h4 class="px-5 fw-bold d-inline-block">Work</h4>
        <div class="mt-3 d-inline-block border-top w-25"></div>
      </div>

      <div class="case d-flex flex-wrap">
        <div class="shoppingWeb m-auto">
          <div class="case-img rounded">
            <img class="img-fluid" src="https://picsum.photos/1200/600" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="component">
    <div class="container">
      <div class="title d-flex justify-content-center">
        <div class="mt-3 d-inline-block border-top w-25"></div>
        <h4 class="px-5 fw-bold d-inline-block">Component</h4>
        <div class="mt-3 d-inline-block border-top w-25"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.case-img {
  max-width: 900px;
  max-height: 250px;
  overflow: hidden;
  img {
    object-fit: cover;
    justify-content: space-around;
  }
}
.intro {
  p {
    max-width: 500px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      introText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id aliquid quia minima perferendis molestiae tempora, accusantium officia ratione itaque aut!',
      isActive: false
    }
  },
  methods: {},
  //載入元件
  components: {
    // TheWelcome
  },
  //確定環境變數已經加載
  created() {
    // console.log(import.meta.env.VITE_PATH_API, import.meta.env.VITE_PATH_APP)
  }
}
</script>
