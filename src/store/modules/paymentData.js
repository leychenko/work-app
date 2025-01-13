import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('paymentList')
// import { HTTP } from '@/store/helpers/http-common.js'

import { getSalaryPerMonth, searchPaymentList } from '@/store/helpers/globalFunction.js'
export default {
    namespaced: true,
    state: () => ({
        paymentObjList: [],
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
        currency: [],
    }),
    getters: {
        getTargetYear: (state) => state.targetYear,
        getTaxForThreeMonth: (state) => (data) => searchPaymentList(state.paymentObjList, 'date', data),
        getFilteredList: (state) => state.filteredList,
        hasError: (state) => state.error,
        getMonthList: (state) => state.monthList,
        getSearchedItemsList: ({ paymentObjList }) => paymentObjList,
        getItemById: (state) => (itemId) => state.paymentObjList.find((item) => item.id == itemId),
        getTotalSum: (state) => state.paymentObjList.reduce((prevEl, item) => prevEl + item.sum, 0),

        getCurrency: (state) => state.currency,
        getTest: (state) => state.paymentObjList,
        getSalaryPerMonthMoney: (state) => (val) => getSalaryPerMonth(state.paymentObjList, 'sum', val),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.paymentObjList = itemsList
        },
        setItemFilteredList(state, itemsList) {
            state.filteredList = itemsList
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
                    commit('setItemFilteredList', list)
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
