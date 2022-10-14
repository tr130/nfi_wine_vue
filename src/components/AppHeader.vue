<template>
<nav>
  <a href="#"><span class="icon is-large"><i class="bi bi-person-circle" style="font-size: 2.2rem"></i></span></a>
  <a href="/"><h1>NFI Wine Merchants</h1></a>
  

  <div id="cart-container">
  <a href="/showcart"><span class="icon is-large"><i class="bi bi-cart-fill" style="font-size: 2.2rem"></i></span>
  
  <p id="cart-count" >{{ cartCount }}</p>
</a>
  </div>
</nav>

</template>

<script>
import { useCartStore } from '@/stores/CartStore.js';

export default {
  name: 'AppHeader',
  setup() {
    const cartStore = useCartStore();

    return {cartStore}
  },
  data() {
    return {
      cartCount: this.cartStore.cart.length,
    }
  },
  methods: {
    updateCart(itemId, quantity) {
      this.cartStore.updateCart(itemId, quantity);
    },
  },
}
</script>
