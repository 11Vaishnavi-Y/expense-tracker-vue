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
  margin-top: 35px;
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: .3s;
}

.progress-card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,.12);
}

.progress-card h2 {
  margin-bottom: 20px;
  color: #333;
}

.progress-bar {
  width: 100%;
  height: 28px;
  background: #e9ecef;
  border-radius: 30px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-fill {
  height: 100%;
  border-radius: 30px;
  transition: width .8s ease;
}

p {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #444;
}

@media(max-width:576px){

.progress-card{
padding:18px;
}

.progress-bar{
height:22px;
}

p{
font-size:18px;
}

}
</style>