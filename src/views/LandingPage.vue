<template>
  <Loading :active="isLoading"></Loading>
  <div id="page-top">
    <!-- Navigation-->

    <!-- Masthead-->
    <header class="masthead">
      <div class="imgbox position-relative">
        <div
          class="container px-4 px-lg-5 h-100 position-absolute top-0 start-50 translate-middle-x"
        >
          <div class="bgColor">
            <div
              class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
            >
              <div class="col-lg-8 align-self-end">
                <h1 class="text-dark font-weight-bold">{{ text.title1 }}</h1>
                <hr class="divider" />
              </div>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-5">
                  {{ text.intro1 }}
                </p>
                <router-link
                  to="/user/cart"
                  class="btn btn-primary btn-xl w-50"
                  aria-current="page"
                  href="#"
                  >查看更多</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <img
          class="img-fluid"
          src="../assets/img/banner/pixlr-image-generator-9a264969-5b8e-4ca5-b3ab-b69d6479a2c2.png"
          alt=""
        />
      </div>
    </header>
    <!-- About-->
    <section class="page-section px-0 m-0 w-100" id="about">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-dark mt-5">{{ text.title2 }}</h2>
            <hr class="divider divider-light" />
            <p class="text-secondary mb-4">
              {{ text.intro2 }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- showcase-->
    <section>
      <div class="row w-100 showCase px-0" id="showCase">
        <div class="col-12 px-0">
          <div class="imgbox position-relative">
            <div class="alpha position-absolute"></div>
            <div class="text position-absolute top-50 start-50 translate-middle w-50 text-center">
              <h2 class="fw-bold">{{ text.showcaseTitle1 }}</h2>
              <p>
                {{ text.showcaseIntro1 }}
              </p>
            </div>
            <img
              class="img-fluid"
              src="../assets/img/banner/pixlr-image-generator-87d1b6de-6b51-419a-9c0c-8924b1b86cf0.png"
              alt=""
            />
          </div>

          <div class="col-12 pt-3">
            <div class="imgbox position-relative">
              <div class="alpha position-absolute"></div>
              <div class="text position-absolute top-50 start-50 translate-middle text-center">
                <h2 class="fw-bold">{{ text.showcaseTitle2 }}</h2>
                <p>
                  {{ text.showcaseIntro2 }}
                </p>
              </div>
              <img
                class="img-fluid"
                src="../assets/img/banner/pixlr-image-generator-b69f1ec2-695b-4e9b-aa7d-99b7a766551f.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services-->
    <section class="services-bgColor page-section" id="services">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center text-white mt-0">獨一無二</h2>
        <hr class="divider text-white" />
        <div class="row gx-4 gx-lg-5">
          <div class="card-intro col-lg-4 col-md-6 text-center">
            <div class="mt-5 position-relative">
              <img class="img-fluid" src="../assets/products/中國古典圈椅.png" alt="" />
              <div class="alpha position-absolute top-50 start-50 translate-middle"></div>
              <div class="text-intro text-white position-absolute top-50 start-50 translate-middle">
                <h3 class="h4 mb-2">{{ text.serviceTitle1 }}</h3>
                <p class="text-white mb-0">
                  {{ text.serviceIntro1 }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-intro col-lg-4 col-md-6 text-center">
            <div class="mt-5 position-relative">
              <img class="img-fluid" src="../assets/products/外星人主題椅.png" alt="" />
              <div class="alpha position-absolute top-50 start-50 translate-middle"></div>
              <div class="text-intro text-white position-absolute top-50 start-50 translate-middle">
                <h3 class="h4 mb-2">{{ text.serviceTitle2 }}</h3>
                <p class="text-white mb-0">
                  {{ text.serviceIntro2 }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-intro col-lg-4 col-md-6 text-center">
            <div class="mt-5 position-relative">
              <img class="img-fluid" src="../assets/products/多彩波普椅.png" alt="" />
              <div class="alpha position-absolute top-50 start-50 translate-middle"></div>
              <div class="text-intro text-white position-absolute top-50 start-50 translate-middle">
                <h3 class="h4 mb-2">{{ text.serviceTitle3 }}</h3>
                <p class="text-white mb-0">
                  {{ text.serviceIntro3 }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-intro col-lg-4 col-md-6 text-center">
            <div class="mt-5 position-relative">
              <img class="img-fluid" src="../assets/products/幾何圖案椅.png" alt="" />
              <div class="alpha position-absolute top-50 start-50 translate-middle"></div>
              <div class="text-intro text-white position-absolute top-50 start-50 translate-middle">
                <h3 class="h4 mb-2">{{ text.serviceTitle4 }}</h3>
                <p class="text-white mb-0">
                  {{ text.serviceIntro4 }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-intro col-lg-4 col-md-6 text-center">
            <div class="mt-5 position-relative">
              <img class="img-fluid" src="../assets/products/彩色花卉華麗椅.png" alt="" />
              <div class="alpha position-absolute top-50 start-50 translate-middle"></div>
              <div class="text-intro text-white position-absolute top-50 start-50 translate-middle">
                <h3 class="h4 mb-2">{{ text.serviceTitle5 }}</h3>
                <p class="text-white mb-0">
                  {{ text.serviceIntro5 }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-intro col-lg-4 col-md-6 text-center">
            <div class="mt-5 position-relative">
              <img class="img-fluid" src="../assets/products/未來主義設計椅.png" alt="" />
              <div class="alpha position-absolute top-50 start-50 translate-middle"></div>
              <div class="text-intro text-white position-absolute top-50 start-50 translate-middle">
                <h3 class="h4 mb-2">{{ text.serviceTitle6 }}</h3>
                <p class="text-white mb-0">
                  {{ text.serviceIntro6 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call to action-->
    <section class="callToAction page-section text-white position-relative">
      <div class="container px-4 px-lg-5 text-center">
        <div class="alpha bg-dark position-absolute top-0 start-0"></div>
        <div class="text position-absolute top-50 start-50 translate-middle">
          <h2 class="mb-4">現在購入有優惠</h2>
          <a class="btn btn-light btn-xl" href="#/user/cart">點我看更多！</a>
        </div>
      </div>
      <div class="imgbox">
        <img
          class="img-fluid"
          src="../assets/img/banner/pixlr-image-generator-d5bd0d5d-4111-461b-881a-290bc0daeaa4.png"
          alt=""
        />
      </div>
    </section>
    <!-- Contact-->
    <section class="page-section" id="contact">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 col-xl-6 text-center">
            <h2 class="mt-0">聯絡我們</h2>
            <hr class="divider" />
            <p class="text-muted mb-5">告訴我們您的想法！</p>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div class="col-lg-6">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label for="name">姓名</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">必填項目</div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label for="email">信箱</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  必須填寫正確email
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">email無效</div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">手機號碼</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">必填項目</div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message">留言告訴我們...</label>
                <div class="invalid-feedback" data-sb-feedback="message:required">留言不得為空</div>
              </div>
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">提交成功！</div>
                  <br />
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">錯誤！</div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid">
                <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">
                  送出
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-4 text-center mb-5 mb-lg-0">
            <i class="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+1 (555) 123-4567</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer-->
  </div>
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; 珍奇椅 2024</p>
    </div>
  </footer>
</template>
<script>
// import UserFooter from '../components/UserFooter.vue'

export default {
  components: {},
  data() {
    return {
      isLoading: false,
      text: {
        title1: '最適合您的家居主題',
        intro1:
          '尋找一張完美的椅子來提升您的生活空間？我們的椅子系列提供多樣風格，從現代極簡到古典華麗，應有盡有，滿足您的各種需求。',
        title2: '各種風格',
        intro2:
          '我們的椅子融合了時尚與實用，不僅美觀大方，更具功能性。精緻的工藝和細膩的細節處理，使每一張椅子都成為藝術品。立即選購，讓您的家居和辦公空間煥然一新。無論是為了放鬆還是工作，我們的椅子都能為您提供無與倫比的舒適體驗，讓您感受生活中的每一刻。',
        showcaseTitle1: '現代居家風格',
        showcaseIntro1:
          '現代居家風格注重簡約、實用和美觀的結合，追求空間的開放感和功能性。這種風格通常採用中性色調，如白色、灰色和黑色，搭配明亮的點綴色，營造出清新、整潔的氛圍。家具設計簡約而不失舒適感，線條流暢、造型簡潔，材料選擇上以木材、金屬和玻璃為主，強調質感和工藝。',
        showcaseTitle2: '低調奢華辦公座椅',
        showcaseIntro2:
          '低調奢華辦公座椅結合了現代設計與高級材料，打造出既舒適又具品味的工作空間。這種椅子通常採用優質皮革或高檔布料覆蓋，手感柔軟、透氣性好，座墊和靠背部分經過精心設計，提供極佳的支撐和舒適感，適合長時間工作。',
        serviceTitle1: '古典美',
        serviceIntro1: '優雅設計，簡約復古。',
        serviceTitle2: '怪奇物語',
        serviceIntro2: '風格迥異',
        serviceTitle3: '鮮豔風格',
        serviceIntro3: '豐富色彩，獨特設計。',
        serviceTitle4: '橙色現代單椅',
        serviceIntro4: '明亮色彩，簡約設計。',
        serviceTitle5: '無與倫比',
        serviceIntro5: '豐富與鮮豔的對比色彩',
        serviceTitle6: '極致幾何',
        serviceIntro6: '幾何造型的千變萬化'
      }
    }
  },
  methods: {},
  //載入元件
  //確定環境變數已經加載

  created() {
    // console.log(import.meta.env.VITE_PATH_API, import.meta.env.VITE_PATH_APP)
    this.isLoading = true
  },
  mounted() {
    this.isLoading = false
  }
}
</script>

<style lang="scss">
.masthead {
  background-color: #ededed;
  .imgbox {
    overflow: hidden;
    max-width: 100%;
    height: 800px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .bgColor {
    background-color: rgba(225, 225, 225, 0.6);
    padding: 50px;
    margin-top: 200px;
  }
}
.page-section {
  background-color: rgb(239, 239, 239);
  height: 100%;
  padding: 100px 0px;
}
.showCase {
  .alpha {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
  }
  .imgbox {
    overflow: hidden;
    max-width: 100%;
    height: 500px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &:hover .alpha {
      opacity: 1;
    }
    &:hover .text {
      opacity: 1;
    }
    .alpha,
    .text {
      opacity: 0;
      transition: all 0.3s ease;
    }
  }
}
.services-bgColor {
  background-color: rgb(184, 178, 167);
  .card-intro {
    transition: all 0.3s ease;
    &:hover .alpha {
      opacity: 1;
    }
    &:hover .text-intro {
      opacity: 1;
    }
  }
  .alpha {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.3s ease;
  }
  .text-intro {
    opacity: 0;
    transition: all 0.3s ease;
  }
}
.callToAction {
  background-color: rgb(103, 93, 76);

  .alpha {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .imgbox {
    width: 100%;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
