<template>
  <h1>Log in</h1>
  <LoginForm />
  <a href="#">Make an account</a>
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
