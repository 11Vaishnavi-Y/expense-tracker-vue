<script setup>
import { ref } from 'vue'
import { useBudgetStore } from '../../store/budgetStore'

const budgetStore = useBudgetStore()

const budget = ref(budgetStore.monthlyBudget)

const saveBudget = () => {
  if (budget.value <= 0) {
    alert('Please enter a valid budget')
    return
  }

  budgetStore.setBudget(Number(budget.value))
  alert('Budget saved successfully!')
}
</script>

<template>
  <div class="budget-form">
    <h2>Monthly Budget</h2>

    <input
      v-model="budget"
      type="number"
      placeholder="Enter Monthly Budget"
    />

    <button @click="saveBudget">
      Save Budget
    </button>

    <div class="current-budget">
      <h3>Current Budget</h3>
      <p>₹{{ budgetStore.monthlyBudget.toFixed(2) }}</p>
    </div>
  </div>
</template>

<style scoped>
.budget-form {
  background: white;
  padding: 20px;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.budget-form h2 {
  margin-bottom: 20px;
}

.budget-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.budget-form button {
  width: 100%;
  padding: 10px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.budget-form button:hover {
  background: #1565c0;
}

.current-budget {
  margin-top: 20px;
  text-align: center;
}

.current-budget p {
  font-size: 24px;
  font-weight: bold;
  color: #2e7d32;
}
</style>