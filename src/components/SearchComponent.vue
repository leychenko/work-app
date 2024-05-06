<template>
    <main-master-page>
        <template #main>
            <div class="info">
                <form class="form">
                    <div class="form__line">
                        <label class="form__label">Введіть номер місяця</label>
                        <input v-model="date" autocomplete="off" type="number" class="form__input" />
                    </div>
                    <div class="form__action">
                        <button type="button" class="form__button button" @click="filteredData">Пошук</button>
                        <button type="submit" class="form__button button" @click="clear">Очистити</button>
                    </div>
						  <p v-if="message">{{message}}</p>
                </form>
            </div>
            <div v-if="isActive" class="result"> 
					<h3 class="result__head">Данні пошуку</h3>
					<table>
										<tr>

                                   <td v-for="item in table" :key="item.id">
														{{ item }}
         
                                   </td>

               

                        </tr>
								<tr v-for="item in getFilteredList" :key="item.id">
														

                                   <td >
														{{ item.date}}

                                   </td>

                                   <td>

                                        {{ item.dayDeclaration }}

                                   </td>
											  <td>

                                        {{ item.nightDeclaration }}

                                   </td>
											  <td>

                                        {{ item.sum }}

                                   </td>

                        </tr>

					</table>
					
                <div class="result__total"><span>Итого : {{ getTotalSum }} грн.</span></div>


            </div>
        </template>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import {sortData} from '@/store/helpers/globalFunction';
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'SearchComponent',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            date: null,
            message: null,
				table:['Дата','Декларацій за день','Декларацій за ніч','Сума'],
		
				
        }
    },
    computed: {
        ...mapGetters('financeData', ['getItemsListFinance', 'getTotalSum']),
        isActive() {
            return this.getTotalSum === null ? null : this.getTotalSum
        },
		  getFilteredList(){
			return sortData(this.getItemsListFinance)
		  }
    },
    methods: {
        ...mapActions('financeData', ['loadFilteredList']),
        filteredData() {
            this.loadFilteredList({ fieldTitle: 'month', compareOperator: '==', valueToCompare: this.date })
            this.date = null
				
        },
        clear() {
            this.loadFilteredList({ fieldTitle: 'month', compareOperator: '==', valueToCompare: this.date })
        },
    },
}
</script>

<style lang="scss" scoped>
table{
	border: 1px solid black;
	text-align: center;
}

td{
	padding: 10px;
	border: 1px solid black;
}
.test1{
	display: flex;
	flex-direction: column
}
</style>
