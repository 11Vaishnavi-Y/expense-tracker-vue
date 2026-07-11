<script setup>
import { computed } from 'vue'
import { useBudgetStore } from '../../store/budgetStore'
import { useExpenseStore } from '../../store/expenseStore'

const budgetStore = useBudgetStore()
const expenseStore = useExpenseStore()

const percentage = computed(() => {
  if (budgetStore.monthlyBudget === 0) return 0

  return Math.min(
    (expenseStore.totalExpense / budgetStore.monthlyBudget) * 100,
    100
  )
})

const progressColor = computed(() => {
  if (percentage.value < 70) return '#4CAF50'
  if (percentage.value < 90) return '#FFC107'
  return '#F44336'
})
</script>

<template>
  <div class="progress-card">
    <h2>Budget Usage</h2>

    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{
          width: percentage + '%',
          backgroundColor: progressColor
        }"
      ></div>
    </div>

    <p>{{ percentage.toFixed(1) }}% Used</p>
  </div>
</template>

<style scoped>
.progress-card {
  margin-top: 30px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.progress-bar {
  width: 100%;
  height: 25px;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-fill {
  height: 100%;
  transition: width 0.5s ease;
}

p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>