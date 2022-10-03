<template>
<a href=""><button class="sort-button fas fa-2x fa-sort"></button></a>
<div v-for="wine in wines" :key="wine.id" id="list">
  <div class="card" id="{{ wine.id }}">
    <a href="#">
			<img class="card-img-top" src="{{ wine.image_filename }}" width="200px">
      <div class="card-body">
        <h2>{{ wine.name }}</h2>
        <p>{{ wine.description }}</p>
			</div>
    </a>
    <div class="card-figures">
      <p>{{ wine.stock_level }} in stock</p>
      <p>0 in basket</p>
    </div>
    <div class="card-footer">
      <p>Price: {{ wine.price_incvat }}</p>
      <form class="winelist-form" action="{% url 'update-cart' %}" method="post">
        <input type="hidden" name="wine_id" value={{wine.id}}>
        <input type="number" name="quantity" id="" 
          value="{{ wine.id|in_basket:request.session }}" 
          min="0" max="{{ wine.stock_level }}">
        <button class="cart-button fas fa-2x fa-cart-plus" type="submit"></button>
      </form>
    </div>
  <hr>
  </div>
</div>
</template>

<script lang="ts">
    import axios from 'axios'
    export default {
        name: 'WineList',
				data() {
					return {
						wines: []
					};
				},
				mounted() {
					this.getWines();
				},
        methods: {
            async getWines() {
              await axios
								.get('/api/winelist')
								.then(response => { this.wines = response.data})
								.catch(error => {console.log(error)})
            }
        },
				
    }
</script>