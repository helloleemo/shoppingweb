<template>
  <LoadingPage :active="isLoading"></LoadingPage>
  <!-- banner -->
  <div class="banner">
    <div class="">
      <img
        class="img"
        src="../assets/img/banner/pixlr-image-generator-9ac50136-21cb-4414-ac42-f18b99affc71.png"
        alt=""
      />
    </div>
  </div>
  <!-- product -->
  <section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" :src="getImageSrc()" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="small mb-1">{{ product.description }}</div>
          <h3 class="display-6 fw-bolder">{{ product.title }}</h3>
          <hr />
          <div class="fs-5 mb-5">
            <span class="text-decoration-line-through"
              >${{ $filters.currency(product.origin_price) }}</span
            >
            <span> ${{ $filters.currency(product.price) }} </span>
          </div>
          <p class="lead" style="font-size: 16px">
            {{ product.content }}
          </p>
          <div class="d-flex align-items-center flex-wrap">
            <div class="qty input-group input-group-sm">
              <input
                style="height: 40px"
                :disabled="product.id === status.loadingItem"
                v-model.number="qty"
                min="1"
                @change="updateCart(item)"
                type="number"
                class="form-control w-50"
              />
            </div>
            <div class="btn">
              <button
                btn-addcart
                :disabled="this.status.loadingItem === product.id"
                @click="addCart(product.id)"
                type="button"
                class="btn btn-dark border border-secondary btn-xl w-100 mt-2"
              >
                <i class="bi-cart-fill me-1"></i>
                <div
                  v-if="this.status.loadingItem === product.id"
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車
              </button>
              <button class="btn btn-outline-primary btn-xl w-100 mt-2" type="button">結帳</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- recommend -->
  <section class="py-5 bg-light">
    <div class="container px-4 px-lg-5 mt-5">
      <h2 class="fw-bolder mb-4">推薦產品</h2>
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div class="col mb-5">
          <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" :src="`/products/多彩波普椅.png`" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">多彩波普椅</h5>
                <!-- Product price-->
                4,000
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <router-link
                  :to="`/user/product/-Ny4-Hn0yzilsjsc-qQJ`"
                  class="btn btn-outline-dark mt-auto"
                  >觀看更多</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <!-- Sale badge-->
            <div
              class="badge bg-dark text-white position-absolute"
              style="top: 0.5rem; right: 0.5rem"
            >
              Sale
            </div>
            <!-- Product image-->
            <img class="card-img-top" :src="`/products/未來主義設計椅.png`" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">未來主義設計椅</h5>
                <!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <!-- Product price-->
                <span class="text-muted text-decoration-line-through">$9,200</span>
                $8,700
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <router-link
                  to="/user/product/-Ny4Aw8YcgaeP4jbtacO"
                  class="btn btn-outline-dark mt-auto"
                  >觀看更多</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <!-- Sale badge-->
            <div
              class="badge bg-dark text-white position-absolute"
              style="top: 0.5rem; right: 0.5rem"
            >
              Sale
            </div>
            <!-- Product image-->
            <img class="card-img-top" :src="`/products/民族風圖案扶手椅.png`" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">民族風圖案扶手椅</h5>
                <!-- Product price-->
                <span class="text-muted text-decoration-line-through">$4,200</span>
                $3,800
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <router-link
                  to="/user/product/-Ny4555XplC5f_E-fm7B"
                  class="btn btn-outline-dark mt-auto"
                  >觀看更多</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" :src="`/products/奢華古典扶手椅.png`" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">奢華古典扶手椅</h5>
                <!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <!-- Product price-->
                $7,000
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <router-link
                  to="/user/product/-Ny3xagF4hqM2-2Mov5O"
                  class="btn btn-outline-dark mt-auto"
                  >觀看更多</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- information -->
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="row position-relative">
        <div
          class="col-lg-7 about-img"
          style="background-image: url(../src/assets/img/banner.png)"
        ></div>

        <div class="col-lg-7">
          <h3 class="text-secondary"></h3>
          <div class="our-story">
            <h4 class="pt-2">感謝您對我們椅子產品的關注</h4>
            <h3 class="pt-2">{{ text.title1 }}</h3>
            <p class="pt-2 text-primary lh-base">
              {{ text.description }}
            </p>
            <ul>
              <li>
                <i class="bi bi-check-circle"></i>
                <span>產品價格已包含稅費</span>
              </li>
              <li>
                <i class="bi bi-check-circle"></i>
                <span>不包含運費。運費會根據您的送貨地址和購買數量計算</span>
              </li>
              <li>
                <i class="bi bi-check-circle"></i>
                <span>每款椅子都有詳細的產品說明和尺寸圖表供您參考</span>
              </li>
            </ul>
            <p>
              {{ text.description2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- information -->
  <section id="alt-services" class="alt-services">
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-around gy-4">
        <div
          class="col-lg-6 img-bg"
          style="
            background-image: url(../src/assets/img/banner/pixlr-image-generator-25dfecbf-b02b-4275-8dce-b48b8f7dc6fe.png);
          "
          data-aos="zoom-in"
          data-aos-delay="100"
        ></div>

        <div class="col-lg-5 d-flex flex-column justify-content-center">
          <h3 class="pt-5">{{ text.title3 }}</h3>
          <p class="text-primary lh-base">
            {{ text.description3 }}
          </p>

          <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
            <i class="bi bi-easel flex-shrink-0"></i>
            <div>
              <h4><p class="stretched-link">定期清潔椅子表面</p></h4>
              <p>首先，定期清潔椅子表面，避免灰塵和污垢積累。</p>
            </div>
          </div>
          <!-- End Icon Box -->

          <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-patch-check flex-shrink-0"></i>
            <div>
              <h4><p class="stretched-link">實木椅子</p></h4>
              <p>
                對於實木椅子，建議使用乾燥柔軟的布料擦拭，並定期使用木質保養油進行保養，保持木質的光澤和延長使用壽命。
              </p>
            </div>
          </div>
          <!-- End Icon Box -->

          <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-brightness-high flex-shrink-0"></i>
            <div>
              <h4><p class="stretched-link">金屬椅子</p></h4>
              <p class="pb-5">
                可使用微濕布料擦拭，避免使用含酸性或鹼性成分的清潔劑，以免損壞金屬表面。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <UserFooter></UserFooter>
</template>

<script>
import UserFooter from '../components/UserFooter.vue'

export default {
  components: {
    UserFooter
  },
  data() {
    return {
      product: {},
      cart: {},
      qty: 1,
      id: '',
      isLoading: false,
      status: {
        loadingItem: '' //對應品項的ID:當選取後，加入特定品項，則按鈕disable
      },
      text: {
        title1: '購買須知',
        description:
          '感謝您對我們椅子產品的關注！在購買前，請仔細閱讀以下須知，以確保您能夠滿意地選購到適合您的椅子。首先，請確認您所選購的椅子款式、顏色及尺寸符合您的需求和空間配置。我們提供多種款式和材質，包括實木、金屬和塑料，並且每款椅子都有詳細的產品說明和尺寸圖表，供您參考。此外，我們建議您在購買前親自試坐，以確保舒適度符合您的期望。',
        description2: '',
        title3: '保養須知',
        description3: '為確保您購買的椅子長久使用，請仔細閱讀以下保養須知。'
      }
    }
  },
  methods: {
    getProduct() {
      this.isLoading = true
      const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/product/${this.id}`
      // console.log(api)

      this.$http.get(api).then((res) => {
        // console.log(res.data)
        this.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
        }
      })
    },
    addCart(id) {
      //加入購物車
      // console.log(id)
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.status.loadingItem = id //有東西

      let cart = {
        product_id: id,
        qty: this.qty
      }
      this.$http.post(url, { data: cart }).then((res) => {
        console.log(res)
        this.status.loadingItem = '' //清空
      })
    },
    getImageSrc() {
      try {
        return new URL(`../assets/products/${this.product.title}.png`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${this.product.title}:`, error)
        return ''
      }
    }
  },
  created() {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>

<style>
.description2 {
  color: grey;
}

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: var(--font-default);
  color: var(--color-default);
  overflow-x: hidden;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  color: #ffc732;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-primary);
}

/*--------------------------------------------------------------
# Sections & Section Header
--------------------------------------------------------------*/
section {
  padding: 80px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f5f6f7;
}

.section-header {
  text-align: center;
  padding-bottom: 70px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  position: relative;
  color: #2e3135;
}

.section-header h2:before,
.section-header h2:after {
  content: '';
  width: 50px;
  height: 2px;
  background: var(--color-primary);
  display: inline-block;
}

.section-header h2:before {
  margin: 0 15px 10px 0;
}

.section-header h2:after {
  margin: 0 0 10px 15px;
}

.section-header p {
  margin: 0 auto 0 auto;
}

@media (min-width: 1199px) {
  .section-header p {
    max-width: 60%;
  }
}
.about h2 {
  font-size: 48px;
  font-weight: 700;
  font-family: var(--font-secondary);
  margin: 30px 0;
}

@media (min-width: 991px) {
  .about h2 {
    max-width: 65%;
    margin: 0 0 80px 0;
  }
}

.about .our-story {
  padding: 40px;
  background-color: #f5f6f7;
}

@media (min-width: 991px) {
  .about .our-story {
    padding-right: 35%;
  }
}

.about .our-story h4 {
  text-transform: uppercase;
  font-size: 18px;
  color: #838893;
}

.about .our-story h3 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-secondary);
}

.about .our-story p:last-child {
  margin-bottom: 0;
}

.about ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.about ul li {
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.about ul i {
  font-size: 20px;
  margin-right: 4px;
  color: var(--color-primary);
}

.about .watch-video i {
  font-size: 32px;
  transition: 0.3s;
  color: var(--color-primary);
}

.about .watch-video a {
  font-weight: 600;
  color: var(--color-secondary);
  margin-left: 8px;
  transition: 0.3s;
}

.about .watch-video:hover a {
  color: var(--color-primary);
}

.about .about-img {
  min-height: 600px;
  background-size: cover;
  background-position: center;
}

@media (min-width: 992px) {
  .about .about-img {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
