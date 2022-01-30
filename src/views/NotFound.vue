<template>
  <div class="container">
    <div class="row">
      <div class="col-10 mx-auto text-center text-title text-uppercase pt-5">
        <h1 class="display-3">404</h1>
        <h1>error</h1>
        <h2>page not found</h2>
        <h3>
          the requested URL
          <span class="text-danger">"{{ pathname }}"</span> was not found
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    pathname() {
      return this.$route.path;
    },
  },
};
</script>

<style></style>
