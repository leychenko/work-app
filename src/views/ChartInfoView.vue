<template>
	<main-master-page>
			<template #main>
				<chart-component/>
			</template>
	</main-master-page>

	
</template>

<script>

import ChartComponent from '@/components/ChartComponent.vue';
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
	export default {
		name:'ChartInfoView',
		components: {
		  ChartComponent,
		 MainMasterPage
        
    },
	}
</script>

<style lang="scss" scoped>

</style>