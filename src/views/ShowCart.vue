<template>
<h1>Basket</h1>
<p v-if="this.cart.length < 1">Your basket is empty</p>
<div v-else>
<ul>
    <li v-for="wine of cart" :key="wine" class="cart-item">
        <CartDetailsItem :wine="wine" />
    </li>
    <li class="cart-item"><a class="clear-cart" @click="clearCart">Clear Cart</a></li>
</ul>
<h3>Subtotal: £{{ subTotal }}</h3>
<p>Postage will be calculated at checkout</p>

<a href="#">Checkout Now</a>
</div>
</template>

<script>
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/CartStore.js';
import CartDetailsItem from '@/components/CartDetailsItem.vue';

export default {
  name: 'ShowCart',
  setup() {
    const cartStore = useCartStore();

    const { cart } = storeToRefs(cartStore);
    const { updateCart, clearCart } = cartStore;

    return {
      cart,
      updateCart,
      clearCart,
    };
  },
  computed: {
    subTotal() {
      return this.cart.reduce((total, item) => {
	console.log(item);
        return total + item.details.price_incvat * item.quantity;
      }, 0).toFixed(2);
    },
  },
  components: {
    CartDetailsItem,
  },
  data() {
    return {
      cart: this.cart,
      wines: [],
    }
  },
  methods: {
    getQuantity(wineId) {
      return this.cart.find(item => item.id === wineId).quantity;
    },
    getUrl(id) {
      return `details/${id}`
    },
  },
}
</script>
