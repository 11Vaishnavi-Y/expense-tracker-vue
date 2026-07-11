<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
import BudgetForm from '../components/budget/BudgetForm.vue'
import BudgetSummary from '../components/budget/BudgetSummary.vue'
import BudgetProgress from '../components/budget/BudgetProgress.vue'
</script>

<template>
  <div>
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
        <h1>Budget Management</h1>

        <BudgetForm />
        <BudgetSummary />
        <BudgetProgress />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>