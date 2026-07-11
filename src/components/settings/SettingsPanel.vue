<script setup>
import { useExpenseStore } from '../../store/expenseStore'
import { useBudgetStore } from '../../store/budgetStore'

const expenseStore = useExpenseStore()
const budgetStore = useBudgetStore()

const clearTransactions = () => {
  if (confirm('Are you sure you want to delete all transactions?')) {
    expenseStore.transactions = []
    expenseStore.saveTransactions()
    alert('All transactions have been deleted.')
  }
}

const resetBudget = () => {
  if (confirm('Are you sure you want to reset the budget?')) {
    budgetStore.setBudget(0)
    alert('Budget has been reset.')
  }
}
</script>

<template>
  <div class="settings-card">
    <h2>Settings</h2>

    <div class="setting-item">
      <button class="danger-btn" @click="clearTransactions">
        Clear All Transactions
      </button>
    </div>

    <div class="setting-item">
      <button class="warning-btn" @click="resetBudget">
        Reset Budget
      </button>
    </div>
  </div>
</template>

<style scoped>
.settings-card {
  background: white;
  padding: 20px;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.setting-item {
  margin-top: 20px;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
 transition: all .25s ease;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(.95);
}

.danger-btn {
  background: #e53935;
}

.warning-btn {
  background: #ff9800;
}

button:hover {
  opacity: 0.9;
}
</style>