import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            cart: useStorage('cart', []),
        }
    },
    actions: {
	clearCart() {
	   this.cart = [];
	},
        updateCart(itemId, quantity) {
	    console.log(typeof(itemId));
            let itemIndex = this.cart.findIndex(item => item.id === itemId);
            if (itemIndex >= 0) {
		console.log('this');
                if (quantity === 0) {
                    this.cart.splice(itemIndex,1);
                } else {
                    this.cart[itemIndex] = {
                        id: Number.parseInt(itemId),
                        quantity: quantity,
                    };
                }
            } else {
		console.log('that');
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
