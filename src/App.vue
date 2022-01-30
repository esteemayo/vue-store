<template>
  <Navbar />
  <router-view />

  <teleport to="body">
    <Modal v-if="modalOpen" />
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';

import Navbar from '@/components/Navbar.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Modal,
  },
  computed: mapGetters(['modalOpen']),
};
</script>

<style></style>
