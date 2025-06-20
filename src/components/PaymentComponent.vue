<template>
	<main-master-page>
			<template #main>
				<div class="">
					<button-home-component/>
					<form class="form">
                    <div class="form__line">
                        <label class="form__label" for="1">Сумма сплати</label>
                        <input v-model.trim="paymentDataObj.sum" autocomplete="off" type="number" id="1" class="form__input" />
                    </div>
                    <div class="form__line">
                        <label class="form__label" for="2">Дата акту</label>
                        <input v-model.trim="paymentDataObj.date" autocomplete="off" type="text" id="2" class="form__input" />
                    </div>
                    <div class="form__line">
                        <label class="form__label" for="3">Номер акту</label>
                        <input v-model.trim="paymentDataObj.number" autocomplete="off" type="number" id="3" class="form__input" />
                    </div>
                    <button type="button" class="form__button button" @click="addData">
                        Send<font-awesome-icon :icon="['fas', 'share']" />
                    </button>
                    <div v-if="message" class="message">{{ message }}</div>
                </form> 
				</div>
				<div class="action">
					<button type="button" class="button" @click="goToSearch">Розшириний пошук</button>
					<button type="button" class="button" @click="goToSearchActs">Пошук за ном. акта</button>
				</div>
			</template>
	</main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import { mapActions, mapGetters } from 'vuex';
import ButtonHomeComponent from '@/components/ButtonHomeComponent.vue';

	export default {
		name:'PaymentComponent',
		components: {
			MainMasterPage,
			ButtonHomeComponent
		},
		    data() {
        return {
			data:{
				date:null,
				year:null,
			},
			// table:['Дата акта','Номер акта','Дата оплати','Сума'],
			acts:null,
            message: null,
            paymentDataObj: {},
            message2: null,
				arr:null

        }
    },
	 computed: {
		...mapGetters('paymentList',['getTest','getFilteredList','getTotalTaxValue','getSalaryPerMonthMoney','getAllTaxForThreeMonth']),
	 },
	 mounted () {
		this.loadPaymentList()
	 },
		methods: {
			...mapActions('paymentList',['addItem','loadFilteredList','loadPaymentList']),
			addData() {
            if (this.paymentDataObj.sum && this.paymentDataObj.date && this.paymentDataObj.number )
				{ 
					this.addItem(this.paymentDataObj)
                this.paymentDataObj = {}
					
               }
					else this.message = 'Треба заповнити всі поля'
           
        },

		  filteredData() {
			this.loadFilteredList({ fieldTitle: 'month', compareOperator: '==', valueToCompare: this.data.date});
			this.data = {}

        },
		  goToSearch(){
				this.$router.push({
					name:'searchForDate-page'
				})
		  },
		  goToSearchActs(){
			this.$router.push({
					name:'searchForNumberAct-page'
				})
			
		  },
		//   test(data){
			
		// 	const result =getTTTT
		// 	console.log(result);
			
		// 	return result
		//   },


		},
	}
</script>

<style lang="scss" scoped>
.action{
	display: flex;
	padding: 20px;
	justify-content: space-between;
	@media (max-width:425px){
		flex-direction: column;
		gap: 20px;
	}
}
</style>