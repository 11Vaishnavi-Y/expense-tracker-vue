<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '../../store/expenseStore'

const store = useExpenseStore()

const totalSavings = computed(() => store.totalSavings)
</script>

<template>
  <div class="card">
    <h3>Savings</h3>
    <h2>₹{{ totalSavings.toFixed(2) }}</h2>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 220px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>