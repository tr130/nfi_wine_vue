import { defineStore } from 'pinia';

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            cart: {},
        }
    },
    //actions
    //getters
});