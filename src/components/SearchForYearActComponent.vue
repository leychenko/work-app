<template>
    <main-master-page>
        <template #main>
            <form class="form">
                <div class="form__line">
                    <label class="form__label">Введіть місяць</label>
                    <input v-model="userData.date" autocomplete="off" type="text" class="form__input" />
                </div>
                <div class="form__line">
                    <label class="form__label">Введіть рік</label>
                    <input v-model="userData.year" autocomplete="off" type="text" class="form__input" />
                </div>
                <div class="form__action">
                    <button type="button" class="form__button button" @click="searchData(userData)">Пошук</button>
                    <button type="button" class="form__button button" @click="clear()">Очистити</button>
                </div>
                <p v-if="message">{{ message }}</p>
            </form>
            <div v-if="arr" class="table-container">
                <table >
                    <tr>
                        <td v-for="item in table" :key="item.id">
                            {{ item }}
                        </td>
                    </tr>
                    <tr v-for="item in getSortListActs" :key="item.id">
                        <td>
                            {{ item.date }}
                        </td>

                        <td>№ {{ item.number }}</td>
                        <td>
                            {{ item.cashDay }}
                        </td>
                        <td>{{ item.sum }} грн</td>
                    </tr>
                </table>
            </div>
        </template>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { mapActions, mapGetters } from 'vuex'
import { sortData } from '@/store/helpers/globalFunction'

export default {
    name: 'SearchForYearActComponent',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            userData: {
                date: null,
                year: null,
            },
            table: ['Дата акту', 'Номер акту', 'Дата оплати', 'Сума'],
            arr: null,
            message: null,
        }
    },
    computed: {
        ...mapGetters('paymentList', ['getDataForMonth', 'getSearchedItemsList']),
        getSortListActs() {
            return sortData(this.arr)
        },
    },
    mounted() {
        this.loadList()
    },
    methods: {
        ...mapActions('paymentList', ['loadList']),
        searchData(userData) {
			
            if (this.userData.date && this.userData.year) {
                const result = this.getDataForMonth(userData)
                this.arr = result
             if (result.length <= 0) this.message = 'Нічого не знайденно'
                this.userData = {}
            } 
				else this.message = 'Введіть данні в обидва поля'
				
				
        },
        clear() {
            this.userData = {}
            this.message = null
        },
    },
}
</script>

<style lang="scss" scoped>
.table-container {
    background-color: #fff;
    width: 100%;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
