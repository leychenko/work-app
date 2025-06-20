import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('financeData')
import { HTTP } from '@/store/helpers/http-common.js'

import { getInfo, test, getSalaryPerMonth, searchPaymentList, getMySalary } from '@/store/helpers/globalFunction.js'
export default {
    namespaced: true,
    state: () => ({
        financeObjList: [],
        monthList: [
            'Січень',
            'Лютий',
            'Березень',
            'Квітень',
            'Травень',
            'Червень',
            'Липень',
            'Серпень',
            'Вересень',
            'Жовтень',
            'Листопад',
            'Грудень',
        ],
        filteredList: null,
        targetYear: new Date().getFullYear(),
        targetMonth: new Date().toLocaleDateString('uk-UA').slice(3, 5),
        tax: {
            tax2024: 0.05,
            tax2025: 0.06,
        },
        dayBonus: 1000,
        nightBonus: 1000,
        currency: [],
    }),
    getters: {
        getTargetYear: (state) => state.targetYear,
        getList: (state) => (data) => searchPaymentList(state.financeObjList, 'date', data),
        getTaxForThreeMonth: (state) => test(state.financeObjList, 'sum', state.tax),
        getFilteredList: (state) => state.filteredList,
        getTotalTaxValue: (state) => getInfo(state.financeObjList, 'sum', state.tax),
        getDayBonusSum: (state) => getMySalary(state.financeObjList, 'dayDeclaration', state.dayBonus),
        getNightBonusSum: (state) => getMySalary(state.financeObjList, 'nightDeclaration', state.nightBonus),
        getSalary: (state) => getMySalary(state.financeObjList, 'sum', 1),
        hasError: (state) => state.error,
        getMonthList: (state) => state.monthList,
        getItemsListFinance: ({ financeObjList }) => financeObjList,
        getItemById: (state) => (itemId) => state.financeObjList.find((item) => item.id == itemId),
      //   getTotalSum: (state) => state.financeObjList.reduce((prevEl, item) => prevEl + item.sum, 0),
        getCorrectCurrency: (state) => {
            HTTP.get().then((response) => {
                state.currency = response.data
            })
        },
        getCurrency: (state) => state.currency,
        getTest: (state) => state.financeObjList,
        getSalaryPerMonthMoney: (state) => (val) => getSalaryPerMonth(state.financeObjList, 'sum', val),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.financeObjList = itemsList
        },
        setItemFilteredList(state, itemsList) {
            state.financeObjList = itemsList
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addItem({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem({
                    month: new Date().getMonth() + 1,
                    date: new Date().toLocaleDateString('uk-UA'),
                    ...item,
                })
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteItem({ commit, dispatch }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(itemId)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateItem({ commit, dispatch }, { itemId, data }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .updateItem(itemId, data)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        loadFilteredList({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
    },
}
