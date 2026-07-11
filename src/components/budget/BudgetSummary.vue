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
  margin-top: 30px;
}

.summary-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 220px;
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
}
</style>