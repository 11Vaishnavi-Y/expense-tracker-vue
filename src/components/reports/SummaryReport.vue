<script setup>
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()
</script>

<template>
  <div class="summary-cards">
    <div class="card">
      <h3>Total Income</h3>
      <p>₹{{ store.totalIncome.toFixed(2) }}</p>
    </div>

    <div class="card">
      <h3>Total Expense</h3>
      <p>₹{{ store.totalExpense.toFixed(2) }}</p>
    </div>

    <div class="card">
      <h3>Balance</h3>
      <p>₹{{ store.totalBalance.toFixed(2) }}</p>
    </div>
  </div>
</template>

<style scoped>
.summary-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 220px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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