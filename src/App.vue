<script>
export default {
  name: 'App',
}
</script>

<template>
  <div class="container">
    <nav>
      <a href="#"><i class="far fa-2x fa-user-circle"></i></a>
  <a href="#"><h1>NFI Wine Merchants</h1></a>
  <div id="cart-container">
  <a href="#"><i class="fas fa-2x fa-shopping-cart"></i>
    <p id="cart-count">0</p>
</a>
  </div>
</nav>
<section class="content">
  <RouterView />
</section>
    
  </div>
</template>

<style scoped>


</style>
