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
      backgroundColor: ['#4CAF50', '#F44336']
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}
</script>

<template>
  <div class="chart-card">
    <h2>Income vs Expense</h2>

    <div class="chart-wrapper">
      <Pie
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.chart-wrapper {
  width: 450px;
  height: 350px;
  margin: auto;
}
</style>