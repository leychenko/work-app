<template>
	<div class="currency">
		<div class="currency__container">
			<div class="currency__content content">
					<p class="content__info" v-for="item in currencyUSD" :key="item.id">$: {{(item.rateSell).toFixed(4)}}</p>
					<p class="content__info" v-for="item in currencyEURO" :key="item.id">€: {{( item.rateSell).toFixed(3)}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

	export default {
		name:'CurrencyComponent',
		computed: {
			...mapGetters('financeData',['getCorrectCurrency','getCurrency']),

		currencyUSD(){	
			return this.getCurrency.filter(el=>el.currencyCodeA === 840);
		},

		currencyEURO(){
			return this.getCurrency.filter(el=>el.currencyCodeA === 978 && el.currencyCodeB === 980)
		},
		getDate(){
			const date = new Date().toLocaleDateString('uk-UA')
			return date
		},

		},
		created () {
			this.getCorrectCurrency
		},
    
	}
</script>

<style lang="scss" scoped>

</style>