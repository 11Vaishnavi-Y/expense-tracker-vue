<script setup>
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import { useExpenseStore } from '../../store/expenseStore'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const store = useExpenseStore()

const chartData = computed(() => ({
  labels: ['Income', 'Expense'],
  datasets: [
    {
      data: [
        store.totalIncome,
        store.totalExpense
      ],
      backgroundColor: [
        '#4CAF50',
        '#F44336'
      ]
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div class="chart-container">
    <h2>Income vs Expense</h2>

    <Pie
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<style scoped>
.chart-container {
  width: 500px;
  height: 400px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}
</style>