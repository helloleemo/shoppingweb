<template>
  <Loading :active="isLoading"></Loading>
  <div class="row">
    <div class="col">
      <img src="https://picsum.photos/600/400" alt="" />
    </div>
    <div class="col">
      <div class="tag border px-2 py-0 my-2 rounded fs-6 d-inline-block">Morden</div>
      <h2 class="fw-bold">{{ product.title }}</h2>
      <div class="review d-flex">
        <div class="star">OOOO</div>
        <p>300 Reviews</p>
      </div>
      <div class="description h6">
        {{ product.description }}
      </div>
      <hr />
      <div class="description2">
        {{ product.content }}
      </div>
      <select class="mt-3 w-25 form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Open this select menu</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">5</option>
      </select>
      <button class="mt-3 btn btn-dark" type="button">加入購物車</button>
    </div>
  </div>
  <div class="intro text-center">
    <h2 class="h2 fw-bold">Title</h2>
    <p class="w-50 mx-auto">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque in minima ut ipsum quos
      odio quod consequuntur iste autem dolor.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      id: '',
      isLoading: false
    }
  },
  methods: {
    getProduct() {
      this.isLoading = true
      const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/product/${this.id}`
      // console.log(api)

      this.$http.get(api).then((res) => {
        console.log(res.data)
        this.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
        }
      })
    }
  },
  created() {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>

<style lang="scss">
.description2 {
  color: grey;
}
</style>
