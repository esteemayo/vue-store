<template>
  <div class="col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div class="card">
      <div class="img-container p-5">
        <router-link to="/details" @click="handleDetail(product.id)">
          <img :src="product.img" :alt="product.title" class="card-img-top" />
        </router-link>
        <button
          class="cart-btn"
          :disabled="product.inCart ? true : false"
          @click="
            addToCart(product.id);
            openModal(product.id);
          "
        >
          <p v-if="product.inCart" class="text-capitalize mb-0" disabled>
            in cart
          </p>
          <i v-else class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <p class="align-self-center mb-0">{{ product.title }}</p>
      <h5 class="text-blue font-italic mb-0">
        <span class="mr-1">${{ product.price }}</span>
      </h5>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: mapMutations(['addToCart', 'openModal', 'handleDetail']),
};
</script>

<style>
.card {
  border-color: transparent;
  transition: all 1s linear;
}

.card-footer {
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}

div:hover .card {
  border: 0.04rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}

div:hover .card-footer {
  background: rgba(247, 247, 247);
}

.img-container {
  position: relative;
  overflow: hidden;
}

.card-img-top {
  transition: all 1s linear;
}

.img-container:hover .card-img-top {
  transform: scale(1.2);
}

.cart-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--lightBlue);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 1s ease-in-out;
}

.img-container:hover .cart-btn {
  transform: translate(0, 0);
}

.cart-btn:hover {
  color: var(--mainBlue);
  cursor: pointer;
}
</style>
