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
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: .3s;
}

.chart-card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,.15);
}

.chart-card h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.chart-wrapper {
  width: 100%;
  max-width: 500px;
  height: 380px;
  margin: auto;
}

@media(max-width:768px){

.chart-wrapper{
height:320px;
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