<template>
<a><button class="sort-button"><i class="bi bi-sort-numeric-up"></i></button></a>
<div id="list">
  <div v-for="wine in wines" :key="wine.id" class="card" :id="wine.id">
    <router-link v-bind:to="getUrl(wine.id)">
      <div class="card-image">
        <figure class="image">
          <img :src="wine.get_thumbnail" width="200px"/>
        </figure>
      </div>
      <div class="card-content">
        <h2>{{ wine.name }} {{ wine.year }}</h2>
        <p>{{ truncate(wine.description, 100, "...")}}</p>
			</div><div class="card-figures">
      <p>{{ wine.stock_level }} in stock</p>
      <p>{{ getQuantity(wine.id) }} in basket</p>
    </div>
  </router-link>
    
    <div class="card-footer">
      <p>Price: £{{ wine.price_incvat }}</p>
      <div class="winelist-form" >
        <input type="hidden" name="wine_id" value="wine.id">
        <input type="number" name="quantity" :id="wine.id + '-quantity'"
          :value="getValue(wine.id, wine.stock_level)" 
          min="0" :max=wine.stock_level>
        <a @click="updateCart" class="cart-button" type="submit" :id="wine.id"><i class="bi bi-cart-plus-fill"></i>Add</a>
      </div>
    </div>
  <hr>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/CartStore.js';

export default {
    name: 'WineList',
    setup() {
        const cartStore = useCartStore();

        const { cart } = storeToRefs(cartStore);
        const { updateCart } = cartStore;

        return {
            cart,
            updateCart,
        };
    },
    data() {
      return {
        wines: [],
        query: '',
      };
    },
    mounted() {
      this.query = window.location.search.substring(1);
      this.getWines();
    },
    methods: {
        async getWines() {
          await axios
            .post('/api/winelist', {'query': this.query})
            .then(response => { this.wines = response.data })
            .catch(error => {console.log(error)})
        },
        truncate(text, stop, clamp) {
          return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
        },
        getQuantity(wineId) {
	    const wineInCart = this.cart.find(item => item.id === wineId);
	    if (wineInCart) {
	        return wineInCart.quantity;
	    } 
            return 0; 
        },
        getValue(wineId, stockLevel) {
	    if (stockLevel < 1) {
		return 0;
	    }
	    const wineInCart = this.cart.find(item => item.id === wineId);
	    if (wineInCart) {
	        return wineInCart.quantity;
	    } 
            return 1; 
        },
        getUrl(id) {
          return `details/${id}`
        },
        updateCart(e) {
          let wineId = Number.parseInt(e.target.id)
          let quantity = Number.parseInt(document.getElementById(`${e.target.id}-quantity`).value);
          this.updateCart(wineId, quantity);
        },
    },
}
</script>
