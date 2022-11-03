<template>
  <Form @submit="register">
    <label for="name">Name*</label>
    <Field type="text" name="name" id="name" required/>
    <label for="email">Email*</label>
    <Field type="email" name="email" id="email" required/>
    <label for="password">Password*</label>
    <Field type="password" name="password" id="password" required/>
    <label for="confirm_pw">Confirm Password*</label>
    <Field type="password" name="confirm_pw" id="confirm_pw" required/>
    <label for="address1">Address Line 1*</label>
    <Field type="text" name="address1" id="address1" required/>
    <label for="address2">Address Line 2</label>
    <Field type="text" name="address2" id="address2"/>
    <label for="address3">Address Line 3</label>
    <Field type="text" name="address3" id="address3"/>
    <label for="address4">Address Line 4</label>
    <Field type="text" name="address4" id="address4"/>
    <label for="postcode">Postcode*</label>
    <Field type="text" name="postcode" id="postcode" required/>
    <button type="submit">Register</button>
  </Form>

</template>

<script>
import { Form, Field } from 'vee-validate';
import axios from 'axios';
export default {
  name: "RegisterForm",
  components: {
    Form,
    Field,
  },
  methods: {
    async register(values) {
      console.log(values);
      await axios
        .post('/api/register', {values})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  },
}
</script>
