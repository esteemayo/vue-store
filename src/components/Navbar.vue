<template>
  <nav class="navbar navbar-expand-sm navbar-dark px-sm-5">
    <router-link to="/">
      <img :src="logo" alt="store" class="navbar-brand" />
    </router-link>
    <ul class="navbar-nav align-items-center">
      <li class="nav-item ml-5">
        <router-link to="/" class="nav-link">Products</router-link>
      </li>
    </ul>
    <router-link to="/cart" class="ml-auto">
      <button>
        <span class="mr-2">
          <i class="fas fa-cart-plus"></i>
        </span>
        my cart
      </button>
    </router-link>
  </nav>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
nav {
  background: var(--mainBlue);
}

.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}

@media (max-width: 576px) {
  .navbar-nav {
    flex-direction: row !important;
  }
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
  transition: all 0.5s ease-in-out;
}

button:hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}

button:focus {
  outline: none;
}
</style>
