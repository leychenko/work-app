<template>
    <div class="bonus">
        <div class="bonus__container">
            <div class="bonus__content">
                <div class="total">
                    Всього за {{ getTargetYear }} рік :
                    <p>В гривні : {{ getAllSumSalary.showText }} грн.</p>
                    <p v-for="item in currencyUSD" :key="item.id">
                        В доларах : {{ (getAllSumSalary.resNumber / item.rateSell).toFixed(2) }} $.
                    </p>
                    <p v-for="item in currencyEURO" :key="item.id">
                        В євро : {{ (getAllSumSalary.resNumber / item.rateSell).toFixed(2) }} €
                    </p>
                    <p>Залишилось до цілі :</p>
                    <p>{{ howLeftMoneyToObj }} грн.</p>
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BonusComponent',
    data() {
        return {
            money: 2500000,
            userData: {
                date: null,
                year: null,
            },
        }
    },
    computed: {
        ...mapGetters('financeData', [
            'getItemsListFinance',
            'getSalary',
            'getTargetYear',
            'getCorrectCurrency',
            'getCurrency',
        ]),
        showTotalSum() {
            const text = this.getItemsListFinance.reduce((prevEl, item) => prevEl + item.sum, 0)
            return text
        },
        howLeftMoneyToObj() {
            let res = (this.money - this.getAllSumSalary.resNumber)
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')
            return res
        },
        currencyUSD() {
            return this.getCurrency.filter((el) => el.currencyCodeA === 840)
        },
        currencyEURO() {
            return this.getCurrency.filter((el) => el.currencyCodeA === 978 && el.currencyCodeB === 980)
        },
		  
		//      getTotalSalaryPerYear() {
           
      //           let result
      //           const dateRegex = new RegExp(`\\d{2}.(0[1-5]).2024`)
      //           const oldSalary = this.getItemsListFinance.filter((item) => item.date.match(dateRegex))

      //           const bonusNight = oldSalary.reduce((prevEl, item) => prevEl + item.nightDeclaration, 0) * 700
      //           const bonusDay = oldSalary.reduce((prevEl, item) => prevEl + item.dayDeclaration, 0) * 1200
      //           const totalSalary = oldSalary.reduce((prevEl, item) => prevEl + item.sum, 0)
      //           const tax = totalSalary * 0.05
      //           result = totalSalary - tax - bonusNight - bonusDay

      //           return result
          
      //   },


        getTotalSalaryPer2025Year() {
            const targetYear = new Date().getFullYear()
            let result
            const dateRegex = new RegExp(`\\d{2}.(0[1-9]|1[0-2]).${targetYear}`)

            const newSalary = this.getItemsListFinance.filter((item) => item.date.match(dateRegex))
            const bonus =
                newSalary.reduce((prevEl, item) => prevEl + item.nightDeclaration + item.dayDeclaration, 0) * 1000
            const totalSalary = newSalary.reduce((prevEl, item) => prevEl + item.sum, 0)
            const tax = totalSalary * 0.06
            result = totalSalary - tax - bonus
            console.log(result)

            return result
        },
        getAllSumSalary() {
            const resNumber = this.getTotalSalaryPer2025Year
            const showText = resNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')
            return { resNumber, showText }
        },
    },

    created() {
        this.loadList()
        this.getCorrectCurrency
    },

    methods: {
        ...mapActions('financeData', ['loadList']),

    },
}
</script>

<style lang="scss" scoped>
.bonus {
    color: white;
}
.total {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 28px;
}
.rating {
    height: 10px;

    background-color: #fff;
}
</style>
