<template>
  <h1>Log in</h1>
  <LoginForm />
  <router-link to="/register">Make an account</router-link>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
}
</script>
