<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()

const totalBalance = computed(() => store.totalBalance)
</script>

<template>
  <div class="card">
    <h3>Total Balance</h3>
    <h2>₹{{ totalBalance.toFixed(2) }}</h2>
  </div>
</template>

<style scoped>
.card {
  background: white;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  padding: 24px;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 12px rgba(0,0,0,.08);

  transition: transform .3s ease,
  box-shadow .3s ease;
}


.card h3 {
  margin: 0;
  color: #555;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.card h2 {
  margin-top: 18px;
  color: #1976d2;
  font-size: 34px;
  font-weight: bold;
  word-break: break-word;
  text-align: center;
}

/* Tablet */
@media (max-width:768px){

  .card{
    padding:20px;
  }

  .card h3{
    font-size:20px;
  }

  .card h2{
    font-size:30px;
  }

}

/* Mobile */
@media (max-width:576px){

  .card{
    padding:18px;
  }

  .card h3{
    font-size:18px;
  }

  .card h2{
    font-size:26px;
  }

}
</style>