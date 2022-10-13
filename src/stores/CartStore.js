import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            cart: useStorage('cart', {1:1,2:2,3:3}),
            count: useStorage('count', 0),
        }
    },
    //actions
    actions: {
        updateCart(itemId, quantity) {
            if (quantity === 0) {
                delete this.cart[itemId];
            } else {
                this.cart[itemId] = quantity 
            }
        },
        increment() {
            this.count++;
        }
    }
    //getters
});