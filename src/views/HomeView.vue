<template>
  <main>
    <header>
      <h1 class="has-text-centered">Importers of Fine Wines</h1>
    </header>
<img id="index-img" src="../assets/pexels-grape-things-2954924.jpg" alt="grapevines">
<p class="intro-text">Since 1792 NFI Wine Merchants have been dedicated to sourcing and importing the best European wines. We have long standing
partnerships with an exclusive network of vineyards across the continent, and pride ourselves on the consistent
quality of our wines and our high standards of customer service.</p>
<form action="/winelist" method="get">
  <h3>Find your perfect wine</h3>
  <div class="field">
    <div class="control">
      <div class="select is-fullwidth">
        <select name="country" id="country">
          <option value="%">Country (any)</option>
          <option v-for="country in countries" :value="country" :key="country">{{ country}}</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <div class="select is-fullwidth">
        <select name="color" id="color">
          <option value="%">Colour (any)</option>
          <option v-for="color in colors" :value="color" :key="color">{{ color }}</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <div class="select is-fullwidth">
        <select name="price" id="price">
          <option value="0 1000">Price (any)</option>
          <option value="0 10">Up to £10</option>
          <option value="10 20">£10 to £19.99</option>
          <option value="20 35">£20 to £34.99</option>
          <option value="35 50">£35 to £50</option>
          <option value="50 1000">Over £50</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control has-text-centered">
      <label>
        <input class="" type="radio" name="sort" id="desc" value="desc" checked>
        Sort Price High-Low
      </label>
      </div>
      <div class="control has-text-centered">
        <label>
        <input type="radio" name="sort" id="asc" value="asc">
        Sort Price Low-High
      </label>
      </div>
      <!-- <label class="checkcontainer">Four
        <input type="radio" name="radio">
        <span class="radiobtn"></span>
      </label> -->
    
  </div>
  <input type="submit" value="Search wines">
</form>

<h3>Disclaimer</h3>
<p>This isn't a real wine shop. I don't have this wine and you can't buy it off me. I've built this shop to practise using
  Flask. If you want to buy any of these wines go to <a style="text-decoration:underline" href="https://www.tanners-wines.co.uk/">Tanners Wine Merchants</a>
  who are an excellent actual wine merchants and from whose website I borrowed the details of the individual wines.</p>


  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      countries: [],
      colors: []
    };
  },
  mounted() {
    this.getParams();
  },
  methods: {
    async getParams() {
      await axios
        .get('/api/getParams')
        .then(response => {
          this.countries = response.data.countries;
          this.colors = response.data.colors;
          console.log(response.data)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
.checkcontainer {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 17px;
}

.checkcontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  padding: 0;
}

.radiobtn {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
}
</style>