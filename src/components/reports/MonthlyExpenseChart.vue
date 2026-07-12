<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { useExpenseStore } from '../../store/expenseStore'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

const store = useExpenseStore()

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const chartData = computed(() => {
  const monthlyExpenses = new Array(12).fill(0)

  store.transactions.forEach(transaction => {
    if (transaction.type === 'expense' && transaction.date) {
      const month = new Date(transaction.date).getMonth()
      monthlyExpenses[month] += transaction.amount
    }
  })

  return {
    labels: monthNames,
    datasets: [
      {
        label: 'Expenses',
        data: monthlyExpenses,
        backgroundColor: '#f44336'
      }
    ]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div class="chart-card">
    <h2>Monthly Expenses</h2>

    <div class="chart-wrapper">
      <Bar
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<style scoped>
.chart-card {
  background: white;
  padding: 25px;
  border-radius: 14px;
  margin-top: 30px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: .3s;
}

.chart-card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,.15);
}

.chart-card h2 {
  text-align: center;
  margin-bottom: 20px;
}

.chart-wrapper {
  width: 100%;
  height: 420px;
}

@media(max-width:768px){

.chart-wrapper{
height:330px;
}

}

@media(max-width:576px){

.chart-card{
padding:18px;
}

.chart-wrapper{
height:260px;
}

}
</style>