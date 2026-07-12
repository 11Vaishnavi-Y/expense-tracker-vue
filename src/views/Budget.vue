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
  min-height: calc(100vh - 60px);
}

.content {
  flex: 1;
  padding: 30px;
  background: #f4f6f9;
}

.content h1 {
  margin-bottom: 25px;
  color: #333;
}

@media(max-width:768px){

.layout{
flex-direction:column;
}

.content{
padding:20px;
}

}

@media(max-width:576px){

.content{
padding:15px;
}

.content h1{
text-align:center;
font-size:28px;
}

}
</style>