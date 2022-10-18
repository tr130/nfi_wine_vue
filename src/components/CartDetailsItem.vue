<template>
  <div class="cart-item-division">
    <router-link :to="getUrl(wine.id)">
      <div class="card-image">
        <figure class="image is-48x48">
	  <img :src="wine.details.get_thumbnail" width="50px"/>
        </figure>
      </div>
      <div class="class-item-info">
        <h3>{{ wine.details.name }} {{ wine.details.year }}</h3>
        <p>£{{ wine.details.price_incvat }} each
          <br>{{ wine.details.stock_level }} in stock
          <br>{{ wine.quantity }} in basket
        </p>
      </div>
    </router-link>
  </div>
  <div class="cart-item-division">
    <form action="#" method="POST">
      <input type="hidden" name="item_id" value="{{ wine.details.id }}">
      <input type="number" name="quantity" id="" value="" min="1"
        max="">
      <button class="cart-button" type="submit">Update</button>
    </form>
    <form action="#" method="POST">
      <input type="hidden" name="item_id" value="{{ wine.details.id }}">
      <a @click="updateCart(wine.details, 0)" class="cart-button"><i class="bi bi-x-lg" style="font-size:2rem"></i></a>
    </form>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/CartStore.js';
import { storeToRefs } from 'pinia';

export default {
  name: 'CartDetailsItem',
  props: {
    wine: {
      type: Object,
      required: true,
    },
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
    getUrl(id) {
      return `details/${id}`;
    },
//    getQuantity(wineId) {
//      console.log(this.cart, wineId);
//      return this.cart.find(item => item.id === wineId).quantity;
//    },
  },
}
</script>
