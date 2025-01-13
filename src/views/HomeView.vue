<template>
    <loading-component v-if="isLoading" />
    <weather-component />

    <home-component />
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import WeatherComponent from '@/components/WeatherComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'


import { mapGetters } from 'vuex'

export default {
    name: 'HomeView',
    components: {
        HomeComponent,
        WeatherComponent,
        LoadingComponent,
		  
        
    },
    computed: {
        ...mapGetters(['isLoading', 'hasError']),
    },
}
</script>
<style scoped lang="scss">

</style>
