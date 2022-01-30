<template>
  <div class="container">
    <div class="row">
      <div
        class="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"
      >
        <router-link to="/">
          <button
            class="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            @click="clearCart"
          >
            clear cart
          </button>
        </router-link>
        <h5>
          <span class="text-title">subtotal :</span>
          <strong>$ {{ total.cartSubTotal }}</strong>
        </h5>
        <h5>
          <span class="text-title">tax :</span>
          <strong>$ {{ total.cartTax }}</strong>
        </h5>
        <h5>
          <span class="text-title">total :</span>
          <strong>$ {{ total.cartTotal }}</strong>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CartTotals',
  computed: mapGetters(['total']),
  methods: mapMutations(['clearCart']),
};
</script>

<style></style>
