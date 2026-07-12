<script setup>
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()
</script>

<template>
  <div class="transaction-list">
    <h2>Recent Transactions</h2>

    <div
      v-if="store.transactions.length === 0"
      class="empty"
    >
      No transactions found.
    </div>

    <div
      v-else
      v-for="transaction in store.transactions"
      :key="transaction.id"
      class="transaction-item"
    >
      <div class="transaction-details">
        <h4>{{ transaction.title }}</h4>

        <p class="type">
          {{ transaction.type }}
        </p>

        <p class="date">
          📅 {{ transaction.date }}
        </p>
      </div>

      <div class="actions">
        <span
          :class="transaction.type === 'income' ? 'income' : 'expense'"
        >
          {{ transaction.type === 'income' ? '+' : '-' }}
          ₹{{ transaction.amount.toFixed(2) }}
        </span>

        <button
          class="edit-btn"
          @click="store.editTransaction(transaction)"
        >
          Edit
        </button>

        <button
          class="delete-btn"
          @click="store.deleteTransaction(transaction.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transaction-list {
  margin-top: 30px;
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
}

.transaction-list h2 {
  margin-bottom: 25px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #ececec;
  transition: .3s;
}

.transaction-item:hover {
  transform: translateY(-2px);
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-details h4 {
  margin: 0;
  font-size: 18px;
}

.type {
  margin: 6px 0;
  color: #666;
  text-transform: capitalize;
}

.date {
  color: #999;
  font-size: 14px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.income {
  color: #2e7d32;
  font-weight: bold;
}

.expense {
  color: #d32f2f;
  font-weight: bold;
}

.edit-btn,
.delete-btn {
  border: none;
  color: white;
  padding: 9px 16px;
  border-radius: 7px;
  cursor: pointer;
  transition: .3s;
}

.edit-btn {
  background: #1976d2;
}

.edit-btn:hover {
  background: #1565c0;
}

.delete-btn {
  background: #e53935;
}

.delete-btn:hover {
  background: #c62828;
}

.empty {
  text-align: center;
  color: #888;
  padding: 30px;
}

@media(max-width:768px){

.transaction-item{
flex-direction:column;
align-items:flex-start;
gap:15px;
}

.actions{
width:100%;
justify-content:space-between;
}

}

@media(max-width:576px){

.transaction-list{
padding:18px;
}

.actions{
flex-direction:column;
align-items:stretch;
}

.edit-btn,
.delete-btn{
width:100%;
}

}
</style>