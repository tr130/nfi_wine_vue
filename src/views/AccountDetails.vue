<template>
  Account details
  {{ responseData }}
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/AuthStore.js';

export default {
  name: 'AccountDetails',
  data() {
    return {
      responseData: {},
    };
  },
  mounted() {
    this.getResponse()
  },
  methods: {
    async getResponse() {
      const authStore = useAuthStore()
      const token = authStore.user.access;
      console.log(token)
      await axios
        .get('/api/authTest', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          this.responseData = response.data;
        })
        .catch(error => console.log(error))
    },
  }
}
</script>
