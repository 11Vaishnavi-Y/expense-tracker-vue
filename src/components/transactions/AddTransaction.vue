<script setup>
import { ref, watch } from 'vue'
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()

const title = ref('')
const amount = ref('')
const type = ref('income')

watch(
  () => store.editingTransaction,
  (transaction) => {
    if (transaction) {
      title.value = transaction.title
      amount.value = transaction.amount
      type.value = transaction.type
    }
  }
)

const saveTransaction = () => {
  if (!title.value || !amount.value) {
    alert('Please fill all fields')
    return
  }

  if (store.editingTransaction) {
    store.updateTransaction({
      id: store.editingTransaction.id,
      title: title.value,
      amount: Number(amount.value),
      type: type.value
    })
  } else {
    store.addTransaction({
      title: title.value,
      amount: Number(amount.value),
      type: type.value
    })
  }

  // Reset the form
  title.value = ''
  amount.value = ''
  type.value = 'income'
}
</script>

<template>
  <div class="transaction-form">
    <h2>
      {{ store.editingTransaction ? 'Edit Transaction' : 'Add Transaction' }}
    </h2>

    <input
      v-model="title"
      type="text"
      placeholder="Enter Title"
    />

    <input
      v-model="amount"
      type="number"
      placeholder="Enter Amount"
    />

    <select v-model="type">
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>

    <button @click="saveTransaction">
      {{ store.editingTransaction ? 'Update Transaction' : 'Add Transaction' }}
    </button>
  </div>
</template>

<style scoped>
.transaction-form {
  background: white;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.transaction-form h2 {
  margin-bottom: 20px;
}

.transaction-form input,
.transaction-form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.transaction-form button {
  width: 100%;
  padding: 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.transaction-form button:hover {
  background: #45a049;
}
</style>