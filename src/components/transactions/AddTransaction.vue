<script setup>
import { ref, watch } from 'vue'
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()

const title = ref('')
const amount = ref('')
const type = ref('income')
const date = ref(new Date().toISOString().split('T')[0])

watch(
  () => store.editingTransaction,
  (transaction) => {
    if (transaction) {
      title.value = transaction.title
      amount.value = transaction.amount
      type.value = transaction.type
      date.value = transaction.date
    }
  }
)

const saveTransaction = () => {
  if (!title.value || !amount.value || !date.value) {
    alert('Please fill all fields')
    return
  }

  if (store.editingTransaction) {
    store.updateTransaction({
      id: store.editingTransaction.id,
      title: title.value,
      amount: Number(amount.value),
      type: type.value,
      date: date.value
    })
  } else {
    store.addTransaction({
      title: title.value,
      amount: Number(amount.value),
      type: type.value,
      date: date.value
    })
  }

  // Reset the form
  title.value = ''
  amount.value = ''
  type.value = 'income'
  date.value = new Date().toISOString().split('T')[0]
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

    <input
      v-model="date"
      type="date"
    />

    <button @click="saveTransaction">
      {{ store.editingTransaction ? 'Update Transaction' : 'Add Transaction' }}
    </button>
  </div>
</template>

<style scoped>
.transaction-form {
  width: 100%;
  max-width: 550px;
  background: #fff;
  padding: 25px;
  margin-top: 30px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  transition: all .3s ease;
}

.transaction-form:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,.12);
}

.transaction-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.transaction-form input,
.transaction-form select {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  margin-bottom: 16px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  font-size: 15px;
  transition: .3s;
}

.transaction-form input:focus,
.transaction-form select:focus {
  outline: none;
  border-color: #1976d2;
  box-shadow: 0 0 8px rgba(25,118,210,.2);
}

.transaction-form button {
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

.transaction-form button:hover {
  background: #1565c0;
  transform: translateY(-2px);
}

.transaction-form button:active {
  transform: scale(.98);
}

@media(max-width:768px){

.transaction-form{
max-width:100%;
padding:20px;
}

}

@media(max-width:576px){

.transaction-form{
padding:16px;
margin-top:20px;
}

.transaction-form h2{
font-size:22px;
}

}
</style>