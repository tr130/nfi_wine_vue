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
        updateCart(item, quantity) {
	    console.log(item, quantity);
	    console.log(this.cart);
            let itemIndex = this.cart.findIndex(cartItem => cartItem.details.id == item.id);
            if (itemIndex >= 0) {
		console.log('this');
                if (quantity === 0) {
                    this.cart.splice(itemIndex,1);
                } else {
                    this.cart[itemIndex] = {
			details: item,
                        quantity: quantity,
                    };
                }
            } else {
		console.log('that');
                if (quantity > 0) {
                    this.cart.push({
			details: item,
                        quantity: quantity,
                    });
                }
            }
        },
    }
    //getters
});
