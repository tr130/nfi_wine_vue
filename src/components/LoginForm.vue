<template>
  <Form @submit="onSubmit">
    <label for="email">Email</label>
    <Field type="email" name="email" id="email"/>
    <label for="password">Password</label>
    <Field type="password" name="password" id="password"/>
    <button type="submit">Log In</button>
  </Form>
  <button @click="logout">Logout</button>
</template>

<script>
import { Form, Field } from 'vee-validate';

import { useAuthStore } from '@/stores/AuthStore.js';

export default {
  name: 'LoginForm',
  components: {
    Form,
    Field,
  },
  methods: {
    async onSubmit(values) {
      const authStore = useAuthStore();
      const { email, password } = values;
      await authStore.login(email, password);
    },
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
    },
  },
}
</script>
