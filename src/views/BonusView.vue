<template>
	<div class="__container">
		<button type="button" class="button" @click="onBack">Back</button>
		<bonus-component/>
	</div>
</template>

<script>
import BonusComponent from '@/components/BonusComponent.vue';
	export default {
		name:'BonusView',
		components: {
			BonusComponent,
		},
		methods: {
			onBack(){
				this.$router.go(-1)
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>