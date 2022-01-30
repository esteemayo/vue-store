import { storeProducts } from '@/data';

const products = {
  state: () => ({
    products: storeProducts,
    detailProduct: null,
    cart: [],
    modalOpen: false,
    modalProduct: null,
    cartSubTotal: 0,
    cartTotal: 0,
    cartTax: 0,
  }),
  mutations: {
    handleDetail(state, payload) {
      const tempProducts = [...state.products];
      const product = tempProducts.find((p) => p.id === payload);

      state.detailProduct = product;
    },
    addToCart(state, payload) {
      const tempProducts = [...state.products];

      const specificProduct = tempProducts.find((p) => p.id === payload);
      const index = tempProducts.indexOf(specificProduct);
      const product = tempProducts[index];

      product.inCart = true;
      product.count++;
      const price = product.price;
      product.total = price;

      state.products = [...tempProducts];
      state.cart.push(product);
    },
    openModal(state, payload) {
      const product = state.products.find((p) => p.id === payload);

      state.modalProduct = product;
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
    increment(state, payload) {
      let tempCart = [...state.cart];

      const selectedProduct = tempCart.find((c) => c.id === payload);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];

      product.count++;
      product.total = product.count * product.price;

      state.cart = [...tempCart];
    },
    decrement(state, payload) {
      let tempProducts = [...state.products];
      let tempCart = [...state.cart];

      const selectedProduct = tempCart.find((c) => c.id === payload);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];

      product.count--;

      if (product.count === 0) {
        tempCart = tempCart.filter((c) => c.id !== payload);
        const selectedProduct = tempProducts.find((p) => p.id === payload);
        const index = tempProducts.indexOf(selectedProduct);
        const product = tempProducts[index];

        product.inCart = false;
        product.count = 0;
        product.total = 0;

        state.products = [...tempProducts];
      }

      product.total = product.count * product.price;

      state.cart = [...tempCart];
    },
    removeProduct(state, payload) {
      let tempProducts = [...state.products];
      let tempCart = [...state.cart];

      tempCart = tempCart.filter((c) => c.id !== payload);
      const selectedProduct = tempProducts.find((p) => p.id === payload);
      const index = tempProducts.indexOf(selectedProduct);
      const product = tempProducts[index];

      product.inCart = false;
      product.count = 0;
      product.total = 0;

      state.cart = [...tempCart];
      state.products = [...tempProducts];
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  getters: {
    cart: (state) => state.cart,
    products: (state) => state.products,
    detailProduct: (state) => state.detailProduct,
    modalProduct: (state) => state.modalProduct,
    modalOpen: (state) => state.modalOpen,
    total(state) {
      let { subTotal, tax, total } = state.cart
        .map((cartItem) => cartItem.total)
        .reduce(
          (cartTotal, cartItem) => {
            cartTotal.subTotal += cartItem;
            cartTotal.tax = cartTotal.subTotal * 0.1;
            cartTotal.total = cartTotal.subTotal + cartTotal.tax;
            return cartTotal;
          },
          { subTotal: 0, tax: 0, total: 0 }
        );

      tax = parseFloat(tax.toFixed(2));
      total = parseFloat(total.toFixed(2));
      subTotal = parseFloat(subTotal.toFixed(2));

      state.cartTax = tax;
      state.cartTotal = total;
      state.cartSubTotal = subTotal;

      return {
        cartTax: tax,
        cartTotal: total,
        cartSubTotal: subTotal,
      };
    },
  },
};

export default products;
