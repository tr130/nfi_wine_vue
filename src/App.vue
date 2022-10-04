<script>
export default {
  name: 'App',
}
</script>

<template>
    <nav>
      <a href="#"><span class="icon is-large"><ion-icon name="person-circle"></ion-icon></span></a>
  <a href="/"><h1>NFI Wine Merchants</h1></a>
  <div id="cart-container">
  <a href="#"><span class="icon is-large"><ion-icon name="cart"></ion-icon></span>
    <p id="cart-count">0</p>
</a>
  </div>
</nav>
<section class="content">
  <RouterView />
</section>

</template>

<style>
@import '../node_modules/bulma/css/bulma.css';
@import 'assets/style.css';
</style>
