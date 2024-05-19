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
  <div class="work-section d-flex flex-column align-items-center">
    <div class="work-title">
      <div class="container">
        <h4 class="px-5 fw-bold d-inline-block">Work</h4>
      </div>
    </div>
    <div class="imgbox rounded-4 position-relative">
      <div class="alpha position-absolute"></div>
      <img class="img-fluid" src="https://picsum.photos/900/300" alt="" />
      <div class="infoCard me-3 position-absolute top-50 end-0 translate-middle-y">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">珍奇椅櫃</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <img class="icon" src="../assets/vuejs.svg" alt="" />
            <a href="#" class="btn btn-primary w-100">Button</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="component-section d-flex flex-column align-items-center">
    <div class="work-title">
      <div class="container">
        <h4 class="px-5 fw-bold d-inline-block">Components</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 g-2">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/200/200" alt="" />
          <div class="card-body rounded-3">
            <h5 class="card-title">Card title</h5>
            <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
      <div class="col-md-6 g-2">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/200/200" alt="" />
          <div class="card-body rounded-3">
            <h5 class="card-title">Card title</h5>
            <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
      <div class="col-md-6 g-2">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/200/200" alt="" />
          <div class="card-body rounded-3">
            <h5 class="card-title">Card title</h5>
            <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
      <div class="col-md-6 g-2">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/200/200" alt="" />
          <div class="card-body rounded-3">
            <h5 class="card-title">Card title</h5>
            <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      introText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id aliquid quia minima perferendis molestiae tempora, accusantium officia ratione itaque aut!',
      isActive: false,
      isShow: false,
      workSections: [
        {
          title: 'work',
          imgUrl: '',
          modalTitle: '',
          description: '',
          tag: ''
        }
      ]
    }
  },
  methods: {
    showModal() {
      this.isShow = !this.isShow
    }
  },
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

<style lang="scss">
.intro {
  p {
    max-width: 500px;
  }
}
.work-section {
  .imgbox {
    max-width: 800px;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
    }

    &:hover .infoCard {
      opacity: 1;
    }
    &:hover .alpha {
      opacity: 0.3;
    }
    .infoCard {
      width: 300px;
      opacity: 0;
      transition: all 0.2s ease;
    }
    .alpha {
      width: 100%;
      height: 100%;
      opacity: 0;

      background-color: #000000;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
