import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
    }),
    actions: {
        async login(email, password) {
            await axios
                .post('/api/token/', {'email': email, 'password': password})
                .then(response => {
                    console.log(response.data)
                    const user = response.data;
                    this.user = user;
                    console.log(this.user.access);
                    console.log('local', localStorage.getItem('user'))
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log('local', localStorage.getItem('user'));
                })
                .catch(error => console.log(error))
        },
        logout() {
            console.log('thisb4', this.user)
            console.log('localb4', localStorage.getItem('user'));
            this.user = null;
            localStorage.removeItem('user');
            console.log('thisafter', this.user)
            console.log('localafter', localStorage.getItem('user'));
        }
    },
});
