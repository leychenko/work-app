<template>
    <div class="chart-body">
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto'
import { mapGetters } from 'vuex'
export default {
    name: 'ChartComponent',
    data() {
        return {
				months:['Январь',
                    'Февраль',
                    'Март',
                    'Апрель',
                    'Май',
                    'Июнь',
                    'Июль',
                    'Август',
                    'Сентябрь',
                    'Октябрь',
                    'Ноябрь',
                    'Декабрь',],
        }
    },
    computed: {
        ...mapGetters('financeData', ['getTest', 'getTotalSum', 'getCurrency','getSalaryPerMonthMoney']),
        filteredData() {
			// const targetYear = new Date().getFullYear().toString()
            const arr = []
				const months = []
			
            for (let index = 0; index < this.getTest.length; index++) {
                const element = this.getTest[index].month
					  console.log(element);
                if (!arr.includes(element)) arr.push(element)
            }
				 for (let index = 0; index < arr.length; index++) {
                const element = this.months[index]
                months.push(element);
					
            }
				
				
				arr.sort((a, b) => {
                return a - b
            })
            return {months,arr}
        },
		  filteredSalaryPerMonth(){
			const arrYData =[]
			for (let index = 0; index < this.filteredData.arr.length; index++) {
				arrYData.push(this.getSalaryPerMonthMoney(index+1))
			}
			return arrYData
		  }
    },
	 created () {
		this.filteredData
		this.filteredSalaryPerMont
	 },
    mounted() {
		const targetYear = new Date().getFullYear().toString()
        const ctx = document.getElementById('myChart')
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.filteredData.months,
                datasets: [
                    {
                        label: targetYear,
                        data: this.filteredSalaryPerMonth,
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 113, 64, 0.2)',
                            'rgba(180, 205, 82, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)',
                        ],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        })
        myChart
      //   this.filteredData
		//   this.filteredSalaryPerMonth
    },
}
</script>

<style lang="scss" scoped>
.chart-body{
	background: white;
}
</style>
