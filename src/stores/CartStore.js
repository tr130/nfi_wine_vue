import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            cart: useStorage('cart', []),
        }
    },
    //actions
    actions: {
	clearCart() {
	    this.cart = [];
	},
        updateCart(itemId, quantity) {
            let itemIndex = this.cart.findIndex(item => item.id === itemId);
            if (itemIndex >= 0) {
                if (quantity === 0) {
                    this.cart.splice(itemIndex,1);
                } else {
                    this.cart[itemIndex] = {
                        id: Number.parseInt(itemId),
                        quantity: quantity,
                    };
                }
            } else {
                if (quantity > 0) {
                    this.cart.push({
                        id: Number.parseInt(itemId),
                        quantity: quantity,
                    });
                }
            }
        },
    }
    //getters
});
