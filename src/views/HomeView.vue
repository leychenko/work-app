<template >
    <main-master-page>
      <template #main >
         <div class="card">
         	<div class="card__item item">
					<h4 class="item__title subtitle">Бонуси :</h4>
					<div class="item__info">
						<p>Бонусів на {{correctMonth.date}}</p><span>{{countBonus}} грн.</span>
					</div>
				</div>
				<div class="card__item item">
					<h4 class="item__title subtitle">Зарплата :</h4>
					<div class="item__info">
						<p>Зарплата на {{correctMonth.date}}</p><span>{{getSumSalary}} грн.</span>
					</div>
				</div>
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
import { mapGetters, mapActions } from 'vuex'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'




export default {
    name: 'HomeView',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            obj: {},
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
				'getSalary','getTaxForThreeMonth'
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
		  }
        //   buttonTitle() {
        //       return this.isEditing ? 'Save' : 'Add'
        //   },
    },
    created() {
        this.loadList()
    },

    methods: {
        ...mapActions('financeData', ['loadList', 'addItem', 'deleteItem', 'updateItem']),
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
            this.obj = { ...item }
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper)
            }
            const onSlideChange = () => {
                console.log('slide change')
            }
            return {
                onSwiper,
                onSlideChange,
            }
        },
    },
}
</script>
<style scoped lang="scss">

</style>
