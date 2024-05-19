<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="container">
      <h3 class="text-start pt-3">產品管理</h3>

      <div class="text-start">
        <button class="btn btn-outline-primary mt-2" @click="openCouponModal(true)">
          建立新的優惠券
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th class="text-center">折扣百分比</th>
            <th class="text-center">到期日</th>
            <th class="text-center">啟用狀態</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td class="text-center">{{ item.percent }}%</td>
            <td class="text-center">{{ $filters.date(item.due_date) }}</td>
            <td class="text-center">
              <span v-if="item.is_enabled === 1" class="text-success">
                <i class="bi bi-circle-fill small"></i>
              </span>
              <span v-else class="text-muted">
                <i class="bi bi-circle-fill small"></i>
              </span>
            </td>
            <td class="text-center">
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openCouponModal(false, item)"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon" />
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  components: { CouponModal, DelModal },
  props: {
    config: Object
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    openCouponModal(isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getCoupons() {
      this.isLoading = true
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/coupons`
      this.$http.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons
        this.isLoading = false
        console.log(response)
      })
    },
    updateCoupon(tempCoupon) {
      if (this.isNew) {
        const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/coupon`
        this.$http.post(url, { data: tempCoupon }).then((response) => {
          console.log(response, tempCoupon)
          this.$httpMessageState(response, '新增優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
      } else {
        const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon }).then((response) => {
          console.log(response)
          this.$httpMessageState(response, '新增優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
      }
    },
    delCoupon() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        console.log(response, this.tempCoupon)
        this.$httpMessageState(response, '刪除優惠券')
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getCoupons()
      })
    }
  },
  created() {
    this.getCoupons()
  }
}
</script>
