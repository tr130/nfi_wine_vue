<template>
	<ul v-for="wine in wines" :key="wine.id">
	<li >{{ wine.name }}</li>
	</ul>
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