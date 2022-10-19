<template>
    <header>
        <h1>{{ wine.name }} {{ wine.year }}</h1>
    </header>
<div class="card prod-card">
	<img class="" :src="wine.get_image" width="200px">
  <div>
    <div class="card-body">
      <h2>Tasting Notes</h2>
      <p>{{ wine.description }}</p>
      <h2>Product Information</h2>
      <p><strong>Country:</strong> {{ wine.country }}</p>
      <p><strong>Grape Variety:</strong> {{ wine.variety }}</p>
    </div>
    <div class="card-figures">
      <p>{{ wine.stock_level }} in stock</p>
      <p>{{ getQuantity(wine.id) }} in basket</p>
    </div>
 

  <div class="card-footer">
    <p>Price: {{ wine.price_incvat }}</p>
 <div class="winelist-form">
	<div v-if="inCart(wine)">
          <input type="number" name="quantity" :id="wine.id + '-quantity'"
            :value="getValue(wine.id, wine.stock_level)" 
            min="0" :max=wine.stock_level>
          <a @click="updateCart(wine)" class="cart-button" type="submit" :id="wine.id"><i class="bi bi-cart-plus-fill"></i>update</a>
        </div>
        <div v-else>
          <input type="number" name="quantity" :id="wine.id + '-quantity'"
            :value="wine.stock_level ? 1 : 0" 
            min="0" :max=wine.stock_level>
          <a @click="updateCart(wine)" class="cart-button" type="submit" :id="wine.id"><i class="bi bi-cart-plus-fill"></i>Add</a>
        </div>
      </div> </div>
</div>
</div>
<a class="button" href="">Back to search results</a>
</template>

<script>
import axios from 'axios'
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/CartStore.js';

export default {
    name: 'WineDetails',
    data() {
        return {
            wine: {},
        }
    },
    setup() {
        const cartStore = useCartStore();

        const { cart } = storeToRefs(cartStore);
        const { updateCart } = cartStore;

        return {
            cart,
            updateCart,
        };
    },
    methods: {
        async getProduct() {
            console.log('here')
            const wine_slug = this.$route.params.wine_slug

            await axios
                .get(`details/${wine_slug}`)
                .then(response => {
                    this.wine = response.data

                    document.title = this.wine.name + ' | NFI Wine Merchants'
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getQuantity(wineId) {
	    const wineInCart = this.cart.find(item => item.details.id === wineId);
	    if (wineInCart) {
	        return wineInCart.quantity;
	    } 
            return 0; 
        },
        getValue(wineId, stockLevel) {
	    if (stockLevel < 1) {
		return 0;
	    }
	    const wineInCart = this.cart.find(item => item.details.id === wineId);
	    if (wineInCart) {
	        return wineInCart.quantity;
	    } 
            return 1; 
        },
        getUrl(id) {
          return `details/${id}`
        },
        inCart(wine) {
          return this.cart.find(item => item.details.id === wine.id);
        },
        updateCart(wine) {
          let quantity = Number.parseInt(document.getElementById(`${wine.id}-quantity`).value);
          this.updateCart(wine, quantity);
        },

    },
    mounted() {
        this.getProduct();
    }
}


</script>
