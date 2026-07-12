<script setup>
import { computed } from 'vue'
import { useBudgetStore } from '../../store/budgetStore'
import { useExpenseStore } from '../../store/expenseStore'

const budgetStore = useBudgetStore()
const expenseStore = useExpenseStore()

const remainingBudget = computed(() => {
  return budgetStore.monthlyBudget - expenseStore.totalExpense
})

const budgetUsed = computed(() => {
  if (budgetStore.monthlyBudget === 0) return 0

  return (
    (expenseStore.totalExpense / budgetStore.monthlyBudget) * 100
  ).toFixed(1)
})
</script>

<template>
  <div class="budget-summary">
    <h2>Budget Summary</h2>

    <div class="summary-grid">
      <div class="card">
        <h3>Monthly Budget</h3>
        <p>₹{{ budgetStore.monthlyBudget.toFixed(2) }}</p>
      </div>

      <div class="card">
        <h3>Total Expenses</h3>
        <p>₹{{ expenseStore.totalExpense.toFixed(2) }}</p>
      </div>

      <div class="card">
        <h3>Remaining Budget</h3>
        <p>₹{{ remainingBudget.toFixed(2) }}</p>
      </div>

      <div class="card">
        <h3>Budget Used</h3>
        <p>{{ budgetUsed }}%</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.budget-summary {
  margin-top: 35px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: .3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,.15);
}

.card h3 {
  margin-bottom: 12px;
  color: #555;
}

.card p {
  font-size: 30px;
  font-weight: bold;
  color: #1976d2;
  word-break: break-word;
}

@media(max-width:576px){

.card{
padding:18px;
}

.card p{
font-size:24px;
}

}
</style>