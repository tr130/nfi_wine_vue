<template>
    <header>
        <h1>{{ wine.name }} {{ wine.year }}</h1>
    </header>
<div class="card prod-card">
	<img class="" :src="wine.get_image" width="200px">
  <div>
    <div class="card-body">
      <h2>Tasting Notes</h2>
      <p>{{ wine.description }}</p>
      <h2>Product Information</h2>
      <p><strong>Country:</strong> {{ wine.country }}</p>
      <p><strong>Grape Variety:</strong> {{ wine.variety }}</p>
    </div>
    <div class="card-figures">
      <p>{{ wine.stock_level }} in stock</p>
      <p>0 in basket</p>
    </div>
 

  <div class="card-footer">
    <p>Price: {{ wine.price_incvat }}</p>
    <form class="winelist-form" action="{% url 'update-cart' %}" method="post">
      <input type="hidden" name="item_id" value={{wine.id}}>
      <input type="number" name="quantity" id="" value="" 
        min="0" max="{{ wine.stock_level }}">
      <button class="cart-button fas fa-2x fa-cart-plus" type="submit"></button>
    </form>
  </div>
</div>
</div>
<a class="button" href="">Back to search results</a>
</template>

<script>
import axios from 'axios'

export default {
    name: 'WineDetails',
    data() {
        return {
            wine: {},
        }
    },
    methods: {
        async getProduct() {
            console.log('here')
            const wine_slug = this.$route.params.wine_slug

            await axios
                .get(`details/${wine_slug}`)
                .then(response => {
                    this.wine = response.data

                    document.title = this.wine.name + ' | NFI Wine Merchants'
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getProduct();
    }
}


</script>