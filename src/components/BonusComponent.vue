<template>
	<div class="bonus">
		<div class="bonus__container">
			<div class="bonus__content">
				
				<div class="total"> Всього за {{ getTargetYear }} рік : 
					<p>{{showTotalSum}} грн.</p>
					<p v-for="item in currencyUSD" :key="item.id">{{(getTotalSalaryPerYear / item.rateSell).toFixed(2)}} $.</p>
					<p v-for="item in currencyEURO" :key="item.id">{{(getTotalSalaryPerYear / item.rateSell).toFixed(2)}} €</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';

	export default {
		name:'BonusComponent',
		computed: {
			...mapGetters('financeData',['getItemsListFinance','getSalary','getTargetYear','getCorrectCurrency','getCurrency']),
			showTotalSum(){
				const text = this.getTotalSalaryPerYear.toString()
				return  text.replace(/(\d{3})\B/g,"$& ");
			},
			currencyUSD(){
			return this.getCurrency.filter(el=>el.currencyCodeA === 840)
		},
		currencyEURO(){
			return this.getCurrency.filter(el=>el.currencyCodeA === 978 && el.currencyCodeB === 980 )
		},
			getTotalSalaryPerYear(){
				const bonusNight = (this.getItemsListFinance.reduce((prevEl,item)=>prevEl + item.nightDeclaration,0)) * 1200
				const bonusDay = (this.getItemsListFinance.reduce((prevEl,item)=>prevEl + item.dayDeclaration,0)) * 700
				const totalSalary = this.getItemsListFinance.reduce((prevEl,item)=>prevEl + item.sum,0)
				const tax = totalSalary * 0.05
				const result = totalSalary - tax - bonusNight - bonusDay

				return result
			},
		},
		created () {
			this.loadList()
			this.getCorrectCurrency
		},

		methods: {
			...mapActions('financeData',['loadList'])
		},
	}
</script>

<style lang="scss" scoped>
.bonus{
	color: white;
}
.total{
	margin-top: 200px;
	font-size: 28px;
}
.rating{
	height: 10px;

	background-color: #fff;
}
</style>