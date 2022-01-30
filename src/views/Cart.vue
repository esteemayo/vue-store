<template>
  <EmptyCart v-if="cart.length === 0" />
  <section v-else>
    <Title name="your" title="cart" />
    <CartColumn />
    <CartList :cart="cart" />
    <CartTotals />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import Title from '@/components/Title.vue';
import CartList from '@/components/Cart/CartList.vue';
import EmptyCart from '@/components/Cart/EmptyCart.vue';
import CartColumn from '@/components/Cart/CartColumn.vue';
import CartTotals from '@/components/Cart/CartTotals.vue';

export default {
  name: 'Cart',
  components: {
    Title,
    CartList,
    EmptyCart,
    CartColumn,
    CartTotals,
  },
  computed: mapGetters(['cart']),
};
</script>

<style></style>
