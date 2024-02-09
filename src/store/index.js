import { createStore } from "vuex";
// import appdata from '@/store/modules/financeData.js';
import declarationData from '@/store/modules/declarationData.js';
import financeData from '@/store/modules/financeData.js'

export default createStore({
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        declarationData,
        financeData,
    },
})
