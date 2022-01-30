<template>
  <div class="container-fluid">
    <CartItem v-for="item in cart" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  name: 'CartList',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  components: {
    CartItem,
  },
};
</script>

<style></style>
