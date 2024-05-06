<template>
	<div class="error-container">
		<h3 >Upss...</h3>
		<font-awesome-icon :icon="['fal', 'triangle-exclamation']"  size="2x" class="icon" />
		<h2>{{ hasError }}</h2>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';


	export default {
		name:'ErrorComponent',
		computed: {
			...mapGetters(['hasError']) 
		},
	}
</script>

<style lang="scss" scoped>

</style>