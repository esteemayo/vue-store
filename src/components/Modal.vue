<template>
  <div class="modal-container">
    <div class="container">
      <div class="row">
        <div
          class="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
          id="modal"
        >
          <h5>item added to cart</h5>
          <img
            :src="modalProduct.img"
            class="img-fluid"
            :alt="modalProduct.title"
          />
          <h5>{{ modalProduct.title }}</h5>
          <h5 class="text-muted">price : ${{ modalProduct.price }}</h5>
          <router-link to="/" class="btn__link">
            <button @click="closeModal">Continue Shopping</button>
          </router-link>
          <router-link to="/cart" class="btn__link">
            <button class="cart" @click="closeModal">Go To Cart</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Modal',
  computed: mapGetters(['modalProduct']),
  methods: mapMutations(['openModal', 'closeModal']),
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container #modal {
  background: var(--mainWhite);
}

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
  display: block;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
}

button:first-child {
  margin-bottom: 7px;
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

.btn__link {
  text-decoration: none;
}
</style>
