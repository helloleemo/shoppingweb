  <div class="cart">
    <!-- list -->
    <div class="cart-show border p-5 rounded-4 w-75">
      <h5 class="text-center pd-2">購物車清單</h5>
      <hr />
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th>品項</th>
            <th>數量</th>
            <th>單價</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                {{ item.product.title }}
                <!-- <div class="text-success">已套用優惠券</div> -->
              </td>
              <td>
                <div class="qty input-group input-group-sm">
                  <input
                    v-model.number="item.qty"
                    min="1"
                    :disabled="item.id === status.loadingItem"
                    @change="updateCart(item)"
                    type="number"
                    class="form-control"
                  />
                  {{ item.product.unit }}
                </div>
              </td>
              <td>
                {{ $filters.currency(item.product.origin_price) }}
                <!-- <small class="text-success">{{
                  `折扣價：${$filters.currency(item.product.price)}`
                }}</small> -->
              </td>
              <td>
                <button
                  :disabled="status.loadingItem === item.id"
                  @click="delCart(item.id)"
                  type="button"
                  class="btn btn-sm"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4" class="text-end">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <!-- 優惠卷 -->
      <!-- <div class="input-group mb-3 input-group-sm w-50">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
            套用優惠碼
          </button>
        </div>
      </div> -->
      <button class="btn btn-outline-primary w-50">結帳</button>
    </div>
  </div>