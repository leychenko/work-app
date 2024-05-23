<template>
			<button class="button-link" @click="goHome"><span><font-awesome-icon :icon="['fas', 'house']" /></span></button>
</template>

<script>
	export default {
		name:'ButtonHomeComponent',
		methods: {
			goHome() {
				this.$router.push({
					name:'home'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>