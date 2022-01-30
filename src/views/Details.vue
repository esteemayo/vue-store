<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-10 mx-auto text-center text-slanted text-blue my-5">
        <h1>{{ detailProduct.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-10 mx-auto col-md-6 my-3">
        <img
          :src="detailProduct.img"
          :alt="detailProduct.title"
          class="img-fluid"
        />
      </div>
      <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
        <h1>model: {{ detailProduct.title }}</h1>
        <h4 class="text-title text-uppercase text-muted mt-3 mb-2">
          made by:
          <span class="text-uppercase">{{ detailProduct.company }}</span>
        </h4>
        <h4 class="text-blue">
          <strong>
            price : <span>${{ detailProduct.price }}</span>
          </strong>
        </h4>
        <p class="text-capitalize font-weight-bold mt-3 mb-0">
          some info about product :
        </p>
        <p class="text-muted lead">{{ detailProduct.info }}</p>
        <div>
          <router-link to="/">
            <button>back to products</button>
          </router-link>
          <button
            class="cart"
            :disabled="detailProduct.inCart ? true : false"
            @click="
              addToCart(detailProduct.id);
              openModal(detailProduct.id);
            "
          >
            {{ detailProduct.inCart ? 'inCart' : 'add to cart' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Details',
  computed: mapGetters(['detailProduct']),
  methods: mapMutations(['addToCart', 'openModal']),
};
</script>

<style scoped>
button {
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
}

button:hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}

button:focus {
  outline: none;
}

button.cart {
  border-color: var(--mainYellow);
  color: var(--mainYellow);
}

button.cart:hover {
  background-color: var(--mainYellow);
  color: var(--mainBlue);
}
</style>
