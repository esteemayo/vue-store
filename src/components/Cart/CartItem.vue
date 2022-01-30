<template>
  <div class="row my-2 text-capitalize text-center">
    <div class="col-10 mx-auto col-lg-2">
      <img :src="item.img" :alt="item.title" class="img-fluid cart-img" />
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <span class="d-lg-none">product : </span>{{ item.title }}
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <span class="d-lg-none">price : </span>{{ item.price }}
    </div>
    <div class="col-10 mx-auto col-lg-2 my-2 my-lg-0">
      <div class="d-flex justify-content-center">
        <div>
          <span class="btn btn-black mx-1" @click="decrement(item.id)">
            -
          </span>
          <span class="btn btn-black mx-1">{{ item.count }}</span>
          <span class="btn btn-black mx-1" @click="increment(item.id)">
            +
          </span>
        </div>
      </div>
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <div class="cart-icon" @click="removeProduct(item.id)">
        <i class="fas fa-trash"></i>
      </div>
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <strong> item total: $ {{ item.total }}</strong>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: mapMutations(['increment', 'decrement', 'removeProduct']),
};
</script>

<style>
.cart-img {
  width: 5rem;
  height: 5rem;
}
</style>
