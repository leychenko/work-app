<template>
	<loading-component v-if="isLoading"/>
		<error-component v-else-if="hasError"/>
	 <header-component/>

	 	<slot name="main">
	
		 </slot>
	
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';

import { mapGetters } from 'vuex';

export default {
    name: 'MainMasterPage',
	 components: {
		HeaderComponent,
		LoadingComponent,
	 ErrorComponent
	 },
	 computed: {
			...mapGetters(['isLoading', 'hasError']) 
		},
}
</script>

<style lang="scss" scoped>


</style>
