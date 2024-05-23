<template>
    <main-master-page>
        <template #main>
            <div class="container">
			<button-home-component/>
					
                <form class="form">
                    <div class="form__line">
                        <label class="form__label" for="1">Сумма сплати</label>
                        <input v-model.trim="financeDataObj.sum" autocomplete="off" type="number" id="1" class="form__input" />
                    </div>
                    <div class="form__line">
                        <label class="form__label" for="2">Кількість декларацій день</label>
                        <input v-model.trim="financeDataObj.dayDeclaration" autocomplete="off" type="number" id="2" class="form__input" />
                    </div>
                    <div class="form__line">
                        <label class="form__label" for="3">Кількість декларацій ніч</label>
                        <input v-model.trim="financeDataObj.nightDeclaration" autocomplete="off" type="number" id="3" class="form__input" />
                    </div>
                    <button type="button" class="form__button button" @click="addData">
                        Send<font-awesome-icon :icon="['fas', 'share']" />
                    </button>
                    <div v-if="message" class="message">{{ message }}</div>
                </form> 	
            </div>
			
        </template>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import ButtonHomeComponent from '@/components/ButtonHomeComponent.vue';

import { mapGetters,mapActions } from 'vuex'

export default {
    name: 'DataPageView',
    components: {
        MainMasterPage,ButtonHomeComponent
    },
    data() {
        return {
            message: null,
            financeDataObj: {},
        }
    },
	 
	 computed: {
		...mapGetters('financeData',['getTotalTaxValue','getDayBonusSum','getItemsListFinance']),

	 },
	 created () {
		this.loadList()
	 },
    methods: {
		...mapActions('financeData',['addItem','loadList','loadFilteredData']),
        addData() {
            if (this.financeDataObj.sum && this.financeDataObj.dayDeclaration >= 0 && this.financeDataObj.nightDeclaration >= 0)
				{ 
					this.addItem(this.financeDataObj)
                this.financeDataObj = {}

               }
					else this.message = 'Треба заповнити всі поля'
           
        },
		
    },
}
</script>

<style lang="scss" scoped>


</style>
