<template>
    <main-master-page>
        <template #main>
						<div>
									 <form class="form">
	                    <div class="form__line">
	                        <label class="form__label">Введіть номер акта</label>
	                        <input v-model="acts" autocomplete="off" type="number" class="form__input" />
	                    </div>
	                    <div class="form__action">
	                        <button type="button" class="form__button button" @click="searchNumberActs()">Пошук</button>
	                        <button type="button" class="form__button button" @click="clear()">Очистити</button>

	                    </div>
							  <p v-if="message">{{message}}</p>
	                </form>	
						</div>
						<div class="">
							 <form class="form">
	                    <div class="form__line">
	                        <label class="form__label">Дата</label>
	                        <input v-model="actObj.date" autocomplete="off" type="text" class="form__input" />
	                    </div>
							  <div class="form__line">
	                        <label class="form__label">Номер акта</label>
	                        <input v-model="actObj.number" autocomplete="off" type="number" class="form__input" />
	                    </div>
							  <div class="form__line">
	                        <label class="form__label">Сумма</label>
	                        <input v-model="actObj.sum" autocomplete="off" type="number" class="form__input" />
	                    </div>
							  <div class="form__line">
	                        <label class="form__label">Дата оплати</label>
	                        <input v-model="actObj.cashDay" autocomplete="off" type="text" class="form__input" />
	                    </div>
	                    <div class="form__action">
	                        <button type="button" class="form__button button" @click="updateData()">Виправити</button>
	                    </div>
							  <p v-if="message">{{message}}</p>
	                </form>	
						</div>

		
		</template>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SearchForNumberAct',
    components: {
        MainMasterPage,
    },
	 	 data() {
		return {
			acts:null,
			actObj: {}
		}
	 },
	 computed: {
		...mapGetters('paymentList',['getList'])
	 },
	 	 mounted () {
		this.loadList()
	 },
	 methods: {
		...mapActions('paymentList',['loadList','updateItem']),

		  searchNumberActs(){
			const result = this.getList.find(el=>el.number === this.acts)
			this.actObj = result
			
		  },
		  updateData(){
			this.updateItem(
				{itemId:this.actObj.id,
					data:this.actObj
				})
				this.actObj = {}
				this.acts = null
		  },
		  clear(){
				this.actObj = {}
				this.acts = null
		  }
	 },
}
</script>

<style lang="scss" scoped></style>
