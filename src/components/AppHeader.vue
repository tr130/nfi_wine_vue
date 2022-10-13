<template>
<nav>
  <a href="#"><span class="icon is-large"><ion-icon name="person-circle"></ion-icon></span></a>
  <a href="/"><h1>NFI Wine Merchants</h1></a>
  <div id="cart-container">
  <a href="#"><span class="icon is-large"><ion-icon name="cart"></ion-icon></span>
  <p id="cart-count">{{ cartCount }}</p>
</a>
  </div>
</nav>

</template>

<script>
import { mapState } from 'pinia';
import { useCartStore } from '@/stores/CartStore.js';

export default {
  name: 'AppHeader',
  computed: {
    ...mapState(useCartStore, {
      cartCount: (store) => Object.keys(store.cart).length,
    }),
  },
  mounted() {
    console.log(this.cartCount)
  }
}
</script>