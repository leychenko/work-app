<template>
	<main-master-page>
		 <template #main >
         <div class="card">
         	<div class="card__item item">
					<h4 class="item__title subtitle">Бонуси :</h4>
					<div class="item__info">
						<p>Бонусів на {{correctMonth.date}}</p><span>{{countBonus}} грн.</span>
					</div>
				</div>
				<router-link :to="{name:'bonus'}" class="card__item item">
					<h4 class="item__title subtitle">Зарплата :</h4>
					<div class="item__info">
						<p>Зарплата на {{correctMonth.date}}</p><span>{{getSumSalary}} грн.</span>
					</div>
				</router-link>
				<div class="card__item item">
					<h4 class="item__title subtitle">Податки :</h4>
					<div class="item__info">
						<p>Податків за {{correctMonth.month}}</p><span>{{getTotalTaxValue}} грн.</span>
						<div v-if="valueTax"><p>Податків за квартал :</p><span>{{getTaxForThreeMonth}} грн.</span></div>
					</div>
				</div>
				<div class="card__item item">
					<h4 class="item__title subtitle">Залишити на карті :</h4>
					<div class="item__info">
						<p>Загалом :</p>
						<span>{{getSumOnCardWithBonusAndTax}} грн.</span>
					</div>
				</div>
         </div>


        </template>
	</main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import { mapGetters, mapActions } from 'vuex'
	export default {
    name: 'HomeComponent',
    components: { MainMasterPage },
	 data() {
        return {
            obj: {},
            isMenuActive: false,
				date:null
        }
    },
    computed: {
        ...mapGetters('declarationData', ['getItemsList']),
        ...mapGetters('financeData', [
            'getItemsListFinance',
            'getDayBonusSum',
            'getMonthList',
            'getNightBonusSum',
            'getTotalTaxValue',
				'getSalary','getTaxForThreeMonth','getTotalSum'
        ]),
        countBonus() {
            return  this.getDayBonusSum + this.getNightBonusSum  
        },
        correctMonth() {
            const correctMonth = new Date().getMonth()
				const date = new Date().toLocaleDateString("uk-UA")
            let month
            for (let i = 0; i < this.getMonthList.length; i++) {
                month = this.getMonthList[correctMonth]
            }
            return {month,date}
        },
		  valueTax(){
			return this.getTaxForThreeMonth !== this.getTotalTaxValue
		  },
		  getSumSalary(){
			return this.getSalary - this.countBonus - this.getTotalTaxValue
		  },
		  getSumOnCardWithBonusAndTax(){
			return this.getTaxForThreeMonth + this.countBonus
		  },
    },
    created() {
        this.loadList()
    },

    methods: {
        ...mapActions('financeData', ['loadList', 'addItem', 'deleteItem', 'updateItem','loadFilteredList']),
        onObjAction() {
            if (this.isEditing) {
                this.updateItem({
                    itemId: this.obj.id,
                    data: {
                        tax: this.obj.tax,
                        month: new Date().getMonth() + 1,
                    },
                })
                this.obj = {}
            } else {
                this.addItem(this.obj)
                this.obj = {}
            }
        },
        onEdit(item) {
			console.log({ ...item });
            this.obj = { ...item }
        },



    },
}
</script>

<style lang="scss" scoped>
input{
	background-color: #fff;
}
</style>