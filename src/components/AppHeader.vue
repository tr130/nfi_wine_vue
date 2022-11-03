<template>
<nav>
  <router-link :to="accountLink"><span class="icon is-large"><i class="bi bi-person-circle" style="font-size: 2.2rem"></i></span></router-link>
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
import { useAuthStore } from '@/stores/AuthStore.js';

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
  computed: {
    accountLink() {
      const authStore = useAuthStore();
      console.log(authStore.user);
      if (authStore.user) {
        console.log('logged in');
        return '/account';
      } else {
        return '/login';
      }
    },
  },
}
</script>
