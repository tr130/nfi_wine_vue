<script>
import AppHeader from '@/components/AppHeader.vue';  
import { useCartStore } from '@/stores/CartStore.js';

export default {
  name: 'App',
  data() {
    return {
      cart: this.cartStore.cart,
    }
  },
  components: {
    AppHeader,
  },
  setup() {
    const cartStore = useCartStore();

    return {cartStore}
  }
}
</script>

<template>
<AppHeader />
<section class="content">
  <RouterView />
</section>

</template>

<style>
@import '../node_modules/bulma/css/bulma.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import 'assets/style.css';
</style>
