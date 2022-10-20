<template>
    <div class="cart-item-image">
      <router-link :to="`details/${wine.details.id}`">
        <img class="" :src="wine.details.get_thumbnail" width="64"/>
      </router-link>  
    </div>
    <div class="cart-item-details">
        <div class="cart-item-upper">
      <router-link :to="`details/${wine.details.id}`">
          <h3>{{ wine.details.name }} {{ wine.details.year }}</h3>
      </router-link>
        </div>
      <div class="cart-item-lower">
        <div class="cart-item-lower-left">
          <p>£{{ wine.details.price_incvat }} each</p>
                  </div>
        <div class="cart-item-lower-right">
          <div class="cart-item-subtotal">
            <h3>Subtotal</h3>
            <p>£{{ subtotal }}</p>
          </div>
          <input @focus="showUpdate" type="number" name="quantity" :id="wine.details.id + '-quantity'"
            :value="wine.quantity" min="0" :max=wine.stock_level>
          <a v-if="showUpdateBtn" @click="updateCart(wine)" class="cart-button" type="submit" id="updateBtn">
          <i class="bi bi-arrow-clockwise" style="font-size:1.5rem"></i></a>
          <a v-else @click="removeFromCart(wine)" class="cart-button">
            <i class="bi bi-x-lg" style="font-size:1.5rem"></i>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/CartStore.js';
import { storeToRefs } from 'pinia';

export default {
  name: 'CartDetailsItem',
  data() {
    return {
      showUpdateBtn: false,
    };
  },
  computed: {
    subtotal() {
      return (this.wine.details.price_incvat * this.wine.quantity).toFixed(2);
    },
  }, 
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
    showUpdate(e) {
      console.log(e.target);
      this.showUpdateBtn = true;
    },
    updateCart(wine) {
      let quantity = Number.parseInt(document.getElementById(`${wine.details.id}-quantity`).value);
      this.updateCart(wine.details, quantity);
    }
  },
}
</script>
