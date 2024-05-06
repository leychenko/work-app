<template>
    <div class="weather">
    	<div class="weather__container">
			<div v-if="!weatherIcon" class = 'weather__loading'>
		<img src='@/assets/img/loading.gif'> 
	</div>
	    	 <div class="weather__info">
	    	 	<div class="weather__city">{{ res.location }}</div>
			    <div class="weather__temp">Температура : {{ res.temp }} ℃</div>
			    <div class="weather__feelsLike">Відчувається як : {{ res.feelsLike }} ℃</div>
			    
	    	 </div>
			 <div class="weather__icon">
				<div class="weather__weatherStatus">{{ res.weatherStatus }}</div>
				<img  :src="weatherIcon"  alt="weatherIcon">
			 </div>
	    </div>
    </div>
</template>

<script>
import { getWeatherInfo } from '@/store/helpers/globalFunction'


export default {
    name: 'WeatherComponent',
    data() {
        return {
            res: {},
        }
    },
	computed: {
		weatherIcon(){
			return `https://openweathermap.org/img/w/${this.res.weatherIcon}.png`
		}
	},

    async mounted() {
        this.res = await getWeatherInfo()
    },
}
</script>

<style lang="scss" scoped>

</style>

