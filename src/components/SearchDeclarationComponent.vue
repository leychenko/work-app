<template>
	<main-master-page>
		
			<template #main>
				<div class=info>
			<button-home-component/>
				
					<form class="form">
									<div class="form__line">
											<label class="form__label">Введіть назву товару</label>
											<input v-model="title" autocomplete="off" type="text" class="form__input" />
									</div>
									<div class="form__action">
											<button type="button" class="form__button button" @click="filteredData">Пошук</button>
											<button type="submit" class="form__button button" @click="clear">Очистити</button>
									</div>
									<p v-if="message">{{message}}</p>
						</form>
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
		
		                                        {{ item.number }}
		
		                                   </td>
		
		                        </tr>
		
							</table>
						</div>
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
		name:'SearchDeclarationComponent',
		components: {
			MainMasterPage,ButtonHomeComponent
		},
		data() {
			return {
				list:[],
				title: null,
            message: null,
				table:['Дата','Номер декларації' ],
			}
		},
		computed: {
        ...mapGetters('declarationData', ['getFilteredDeclarationList', 'getItemsList']),
        isActive() {
            return this.getFilteredDeclarationList.length
        },
		  getFilteredList(){
			return sortData(this.getFilteredDeclarationList)
		  }
    },
	 created () {
			this.loadList()
		},
		methods: {
			...mapActions('declarationData', ['loadFilteredList','loadList']),
        filteredData() {
            this.loadFilteredList({ fieldTitle: 'title', compareOperator: '==', valueToCompare: this.title })
            this.title = null
				
        },
        clear() {
            this.loadFilteredList({ fieldTitle: 'title', compareOperator: '==', valueToCompare: this.title })
        },
    },
	}
</script>

<style lang="scss" scoped>

</style>