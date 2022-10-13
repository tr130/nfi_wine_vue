<template>
<a href=""><button class="sort-button fas fa-2x fa-sort"></button></a>
<div id="list">
  <div v-for="wine in wines" :key="wine.id" class="card" id="{{ wine.id }}">
    <router-link v-bind:to="getUrl(wine.id)">
      <div class="card-image">
        <figure class="image">
          <img :src="wine.get_thumbnail" width="200px"/>
        </figure>
      </div>
      <div class="card-content">
        <h2>{{ wine.name }} {{ wine.year }}</h2>
        <p>{{ truncate(wine.description, 100, "...")}}</p>
			</div><div class="card-figures">
      <p>{{ wine.stock_level }} in stock</p>
      <p>0 in basket</p>
    </div>
  </router-link>
    
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

<script>
    import axios from 'axios'
    export default {
        name: 'WineList',
				data() {
					return {
						wines: [],
            query: '',
					};
				},
				mounted() {
          this.query = window.location.search.substring(1);
          console.log(this.query)
					this.getWines();
				},
        methods: {
            async getWines() {
              await axios
								.post('/api/winelist', {'query': this.query})
								.then(response => { this.wines = response.data})
								.catch(error => {console.log(error)})
            },
            truncate(text, stop, clamp) {
              return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
            },
            getUrl(id) {
              return `details/${id}`
            }
        },
				
    }
</script>