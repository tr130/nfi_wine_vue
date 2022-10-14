<script>
import AppHeader from '@/components/AppHeader.vue';  

export default {
  name: 'App',
  data() {
    return {
          a: "b",
    }
  },

  components: {
    AppHeader,
  },
}
</script>

<template>
<!--AppHeader /-->
<section class="content">
  <RouterView />
</section>

</template>

<style>
@import '../node_modules/bulma/css/bulma.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import 'assets/style.css';
</style>
