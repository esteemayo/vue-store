<template>
  <div class="py-5">
    <div class="container">
      <Title name="our" title="products" />
      <div class="row">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Product from '@/components/Product.vue';
import Title from '@/components/Title.vue';

export default {
  name: 'Home',
  components: {
    Product,
    Title,
  },
  computed: mapGetters(['products']),
};
</script>

<style></style>
