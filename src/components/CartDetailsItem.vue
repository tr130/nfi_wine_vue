<template>
  <div class="cart-item-division">
    <router-link :to="`details/${wine.details.id}`">
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
 
          <input type="number" name="quantity" :id="wine.details.id + '-quantity'"
            :value="wine.quantity" 
            min="0" :max=wine.stock_level>
          <a @click="updateCart(wine)" class="cart-button" type="submit" :id="wine.details.id"><i class="bi bi-cart-plus-fill"></i>update</a>
    </form>
    <form action="#" method="POST">
      <input type="hidden" name="item_id" value="{{ wine.details.id }}">
      <a @click="removeFromCart(wine)" class="cart-button"><i class="bi bi-x-lg" style="font-size:2rem"></i></a>
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
    removeFromCart(wine) {
      this.updateCart(wine.details, 0);
    },
    updateCart(wine) {
      let quantity = Number.parseInt(document.getElementById(`${wine.details.id}-quantity`).value);
      this.updateCart(wine.details, quantity);
    }
  },
}
</script>
