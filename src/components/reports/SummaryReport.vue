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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: all .3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,.15);
}

.card h3 {
  margin-bottom: 12px;
  color: #555;
  font-size: 20px;
}

.card p {
  font-size: 32px;
  font-weight: bold;
  color: #1976d2;
}

@media(max-width:576px){

.card{
padding:18px;
}

.card h3{
font-size:18px;
}

.card p{
font-size:26px;
}

}
</style>