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
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: .3s;
}

.budget-form:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,.12);
}

.budget-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.budget-form input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  margin-bottom: 18px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  font-size: 15px;
  transition: .3s;
}

.budget-form input:focus {
  outline: none;
  border-color: #1976d2;
  box-shadow: 0 0 8px rgba(25,118,210,.2);
}

.budget-form button {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 8px;
  background: #1976d2;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
}

.budget-form button:hover {
  background: #1565c0;
  transform: translateY(-2px);
}

.current-budget {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;
}

.current-budget h3 {
  color: #555;
}

.current-budget p {
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #2e7d32;
}

@media(max-width:576px){

.budget-form{
padding:18px;
}

.current-budget p{
font-size:24px;
}

}
</style>