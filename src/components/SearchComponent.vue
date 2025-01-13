<template>
    <main-master-page>
        <template #main>
            <div class="info">
			<button-home-component/>
					
                <form class="form">
                    <div class="form__line">
                        <label class="form__label">Введіть місяць</label>
                        <input v-model="userData.date" autocomplete="off" type="text" class="form__input" />
                    </div>
						  <div class="form__line">
                        <label class="form__label">Введіть рік</label>
                        <input v-model="userData.year" autocomplete="off" type="number" class="form__input" />
                    </div>
                    <div class="form__action">
                        <button type="button" class="form__button button" @click="filteredData(userData)">Пошук</button>
                        <button type="submit" class="form__button button" @click="clear">Очистити</button>
                    </div>
						  <p v-if="message">{{message}}</p>
                </form>
            </div>
            <div v-if="arr" class="result"> 
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
					
                <div class="result__total"><span>Итого : {{ getTest }} грн.</span></div>


            </div>
        </template>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import ButtonHomeComponent from '@/components/ButtonHomeComponent.vue';
import {sortData} from '@/store/helpers/globalFunction';
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'SearchComponent',
    components: {
        MainMasterPage,ButtonHomeComponent
    },
    data() {
        return {
           userData: {
                date: null,
                year: null,
            },
				arr:null,
            message: null,
				table:['Дата','Декларацій за день','Декларацій за ніч','Сума'],
		
				
        }
    },
    computed: {
		...mapGetters('paymentList', ['getTaxForThreeMonth', 'getSearchedItemsList']),
        ...mapGetters('financeData', ['getItemsListFinance', 'getTotalSum','getList']),
      //   isActive() {
      //       return this.getTotalSum === null ? null : this.getTotalSum
      //   },
		  getFilteredList(){
			return sortData(this.arr)
		  },
		  getTest(){
			return this.arr.reduce((oldVal,val)=>oldVal + val.sum,0)
		  }
    },
	 mounted() {
        this.loadList()

	
    },
    methods: {
      //   ...mapActions('financeData', ['loadFilteredList']),
		  ...mapActions('financeData', ['loadList']),
        filteredData(userData) {
            if (this.userData.date && this.userData.year) {
                const result = this.getList(userData)

                this.arr = result
             if (result.length <= 0) this.message = 'Нічого не знайденно'
                this.userData = {}
					 
					 
            } 
				else this.message = 'Введіть данні в обидва поля'
				
				
        },
		
        clear() {
             this.userData = {}
        },
		  goBack(){
			this.$router.go(-1)
		  }
    },
}
</script>

<style lang="scss" scoped>

</style>
