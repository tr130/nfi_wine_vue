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
<AppHeader />
<section class="content">
  <h1>{{cart}}
  </h1>
  <RouterView />
</section>

</template>

<style>
@import '../node_modules/bulma/css/bulma.css';
@import 'assets/style.css';
</style>
