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
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.chart-wrapper {
  height: 400px;
}
</style>