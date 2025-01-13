import { createStore } from 'vuex'
// import appdata from '@/store/modules/financeData.js';
import declarationData from '@/store/modules/declarationData.js'
import financeData from '@/store/modules/financeData.js'
import paymentList from '@/store/modules/paymentData'

export default createStore({
    namespaced: true,
    state: {
        password: {
            loading: null,
            error: null,
        },
    },
    getters: {
        getPassword: (state) => state.password,
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        startLoading({ commit }) {
            commit('setLoading', true)
            commit('setError', null)
        },
        setError({ commit }, error) {
            commit('setError', error)
        },
        async generalApiOperation({ commit, dispatch }, { operation, successCallback, errorCallBack }) {
            dispatch('startLoading')
            try {
                const res = await operation()
                if (successCallback) successCallback(res)
                return res
            } catch (error) {
                commit('setError', error)
                if (errorCallBack) errorCallBack(error)
            } finally {
                commit('setLoading', false)
            }
        },
    },
    modules: {
        declarationData,
        financeData,
        paymentList,
    },
})
