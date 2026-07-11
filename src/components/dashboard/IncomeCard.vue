<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()

const totalIncome = computed(() => store.totalIncome)
</script>

<template>
  <div class="card">
    <h3>Total Income</h3>
    <h2>₹{{ totalIncome.toFixed(2) }}</h2>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 220px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform .3s ease, box-shadow .3s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,.15);
}
</style>