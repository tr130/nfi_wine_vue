<template>
<AppHeader :count="this.cart.length"/>
<h1>Basket</h1>
<p v-if="cart.length < 1">Your basket is empty</p>
<div v-else>
<ul>
    <li v-for="wine of wines" :key="wine" class="cart-item">
        <div class="cart-item-division">
            <router-link :to="getUrl(wine.id)">
		<div class="card-image">
		  <figure class="image is-48x48">
		    <img :src="wine.get_thumbnail" width="50px"/>
                  </figure>
                </div>
                    <div class="class-item-info">
                        <h3>{{ wine.name }} {{ wine.year }}</h3>
                        <p>£{{ wine.price_incvat }} each
                        <br>{{ wine.stock_level }} in stock
                        <br>{{ getQuantity(wine.id) }} in basket
                        </p>
                    </div>
            </router-link>
        </div>
        <div class="cart-item-division">
            <form action="#" method="POST">
                <input type="hidden" name="item_id" value="{{ wine }}">
                <input type="number" name="quantity" id="" value="" min="1"
                    max="">
                <button class="cart-button" type="submit">Update</button>
            </form>
            <form action="#" method="POST">
                <input type="hidden" name="item_id" value="{{ wine }}">
                <button class="cart-button fas fa-2x fa-times" type="submit"></button>
            </form>
        </div>
    </li>

    <li class="cart-item"><a class="clear-cart" @click="clearCart">Clear Cart</a></li>
</ul>
<h3>Subtotal: </h3>
<p>Postage will be calculated at checkout</p>

<a href="#">Checkout Now</a>
</div>
</template>

<script>
import axios from 'axios';
import { useCartStore } from '@/stores/CartStore.js';
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'ShowCart',
  setup() {
    const cartStore = useCartStore();

    return {cartStore}
  },
  components: {
    AppHeader,
  },
  data() {
    return {
      cart: this.cartStore.cart,
      wines: [],
    }
  },
  methods: {
    updateCart(itemId, quantity) {
      this.cartStore.updateCart(itemId, quantity);
      this.cart = this.cartStore.cart;
    },
    clearCart() {
      this.cartStore.clearCart();
      this.cart = this.cartStore.cart;
    },
    getQuantity(wineId) {
      console.log(this.cart, wineId);
      return this.cart.find(item => item.id === wineId).quantity;
    },
    getUrl(id) {
      return `details/${id}`
    },
    async getCartDetails() {
      await axios
	.post('/api/cart_details', {'cart': this.cart.map((wine) => (wine.id))})
	.then(response => {this.wines = response.data})
	.catch(error => console.log(error))
    },
  },
  mounted() {
    this.getCartDetails();
  },
}
</script>
