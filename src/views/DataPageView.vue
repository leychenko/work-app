<template>
    <main-master-page>
        <template #main>
            <div class="container">
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
import { mapGetters,mapActions } from 'vuex'

export default {
    name: 'DataPageView',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            message: null,
            financeDataObj: {},
				allTaxValue:{}
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
		// ...mapActions('allTaxData',['addItemTax']),
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

.container {
	padding-top: 100px;
    max-width: 900px;
    margin: 0 auto;
}
.form {
    display: flex;
    flex-direction: column;
    padding: 40px;
    border: 2px solid black;
    gap: 25px;
    border-radius: 10px;
    background: #fff5;
    backdrop-filter: blur(15px);
    // .form__line
    &__line {
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 25px;
        font-weight: 700;
        gap: 20px;
        justify-content: space-between;
    }
    // .form__label
    &__label {
        color: black;
        cursor: pointer;
    }
    // .form__input
    &__input {
        flex: 0 1 50%;
        padding: 5px;
        font-size: 25px;
        // border: 2px solid black;
        border-radius: 5px;
        background-color: #fff;
        outline: 2px solid orangered;
        &:focus {
            background-color: rgb(224, 245, 202);
        }
    }
    // .form__button
    &__button {
        align-self: flex-start;
        display: flex;
        align-items: center;
		  gap: 5px;

    }
}
.message{
	color: red;
	font-size: 22px;
}





.input-test{
	background-color: #fff;
}
</style>
