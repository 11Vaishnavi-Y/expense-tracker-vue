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
        <p>{{ transaction.type }}</p>
      </div>

      <div class="actions">
        <span
          :class="transaction.type === 'income' ? 'income' : 'expense'"
        >
          {{ transaction.type === 'income' ? '+' : '-' }}
          ₹{{ transaction.amount.toFixed(2) }}
        </span>

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
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.transaction-list h2 {
  margin-bottom: 20px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-details h4 {
  margin: 0;
}

.transaction-details p {
  margin: 5px 0 0;
  color: #777;
  text-transform: capitalize;
}

.actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.income {
  color: green;
  font-weight: bold;
}

.expense {
  color: red;
  font-weight: bold;
}

.delete-btn {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #c62828;
}

.empty {
  text-align: center;
  color: #777;
  padding: 20px;
}
</style>