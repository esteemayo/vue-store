<template>
  <div class="row">
    <div class="col-10 mx-auto my-2 text-center text-title">
      <h1 class="text-capitalize font-weight-bold">
        {{ name }} <strong class="text-blue">{{ title }}</strong>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
