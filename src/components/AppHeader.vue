<template>
<nav>
  <a href="#"><span class="icon is-large"><i class="bi bi-person-circle" style="font-size: 2.2rem"></i></span></a>
  <a href="/"><h1>NFI Wine Merchants</h1></a>
  

  <div id="cart-container">
  <a href="/showcart"><span class="icon is-large"><i class="bi bi-cart-fill" style="font-size: 2.2rem"></i></span>
  
  <p id="cart-count" >{{ this.cart.length }}</p>
</a>
  </div>
</nav>

</template>

<script>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/CartStore.js';

export default {
  name: 'AppHeader',
  setup() {
    const cartStore = useCartStore();

    const { cart } = storeToRefs(cartStore);    

    return {cart};
  },
  data() {
    return {
      cart: this.cart,
    }
  },
}
</script>
