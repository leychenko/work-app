<template>
	<main-master-page>
		<template #main>
			<div class="container">
    		<form class="form">
			<div class="form__line">
				<label class="form__label" for="title">Назва Товару</label>
				<input v-model.trim="declaration.title" type="text" id="title" class="form__input">
			</div>
			<div class="form__line">
				<label class="form__label" for="number">Номер декларації</label>
				<input v-model.trim="declaration.number" type="text" id="number" class="form__input">
			</div>
			<div class="form__line">
				<label  class="form__label" for="date">Дата</label>
				<input v-model.trim="declaration.date" type="text" id="date" class="form__input">
			</div>
			<button type="button" class="form__button button" @click="addNewDecl">Send <font-awesome-icon :icon="['fas', 'share']" /></button>
			<div v-if="message" class="message">{{message}}</div>
		</form>
  </div>
		</template>
	</main-master-page>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import MainMasterPage from '@/masterpages/MainMasterPage.vue';


export default {
    name: 'AddDeclarationView',
	 components: {
		MainMasterPage,
	 },
	 data() {
		return {
			inpVal:null,
			message:null,
			declaration:{}
		}
	 },
	 
	 computed: {
		...mapGetters('declarationData',['getItemCurrent','getItemsList']),

	 },
	 created () {
		this.loadList()
	 },
	 methods: {
		...mapActions('declarationData',['addItem','loadList']),
		addNewDecl(){
			if(!this.declaration.title || !this.declaration.number || !this.declaration.date)
			{this.message='Будь ласка заповніть всі поля'
			
		}
			else
			{this.addItem(this.declaration)
			this.declaration = {}}
		},
	 },

}
</script>

<style scoped lang="scss">
.declaration {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
		gap: 10px;
		padding: 20px;
	max-width: 1000px;
	background-color: #fae4cd;
		// .declaration__item
		&__item {
			border: 2px solid black;
			border-radius: 5px;
			padding: 5px;
			background-color: #fff;
			font-size: 25px;
			display: grid;
			grid-template-columns: repeat(3,1fr);
		}
}

</style>